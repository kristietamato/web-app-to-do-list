var toDoList = {
  toDos: [],
  addToDo: function(toDoText) {
    this.toDos.push({
      toDoText: toDoText,
      completed: false
    });
  },
  changeToDo: function(position, toDoText) {
    this.toDos[position].toDoText = toDoText;
  },
  deleteToDo: function(position) {
    this.toDos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var toDo = this.toDos[position];
    toDo.completed = !toDo.completed;
  },
  toggleAll: function() {
    var totalToDos = this.toDos.length;
    var completedToDos = 0;

    // get number of completed to dos
    for (var count = 0; count < totalToDos; count++) {
      if(this.toDos[count].completed) {
        completedToDos++;
      }
    }

    // if all true, make all to dos false. Else make all true
    if (completedToDos === totalToDos) {
      for (var count = 0; count < totalToDos; count++) {
        this.toDos[count].completed = false;
      }
    } else {
      for (var count = 0; count < totalToDos; count++) {
        this.toDos[count].completed = true;
      }
    }
  }
};

var handlers = {
  addToDo: function() {
    var addToDoInput = document.getElementById("add-to-do-input");
    toDoList.addToDo(addToDoInput.value);
    addToDoInput.value = "";
    view.displayToDos();
  },
  changeToDo: function() {
    var changeToDoPositionInput = document.getElementById("change-to-do-position-input");
    var changeToDoInput = document.getElementById("change-to-do-input");
    toDoList.changeToDo(changeToDoPositionInput.valueAsNumber, changeToDoInput.value);
    changeToDoPositionInput.value = "";
    changeToDoInput.value = "";
    view.displayToDos();
  },
  deleteToDo: function() {
    var deleteToDoPositionInput = document.getElementById("delete-to-do-position-input");
    toDoList.deleteToDo(deleteToDoPositionInput.valueAsNumber);
    deleteToDoPositionInput.value = "";
    view.displayToDos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById("toggle-completed-position-input");
    toDoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
    view.displayToDos();
  },
  toggleAll: function() {
    toDoList.toggleAll();
    view.displayToDos();
  }
};

var view = {
  displayToDos: function() {
    var toDosUl = document.querySelector("ul");
    toDosUl.innerHTML = "";
    for (var count = 0; count < toDoList.toDos.length; count++) {
      var toDoLi = document.createElement("li");
      var toDo = toDoList.toDos[count];
      var toDoTextWithCompletion = "";

      if(toDo.completed) {
        toDoTextWithCompletion = "(x) " + toDo.toDoText;
      } else {
        toDoTextWithCompletion = "( ) " + toDo.toDoText;
      }

      toDoLi.id = count;
      toDoLi.textContent = toDoTextWithCompletion;
      toDoLi.appendChild(this.createDeleteBtn());
      toDosUl.appendChild(toDoLi);
    }
  },
  createDeleteBtn: function() {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    return deleteButton;
  }
};

var toDosUl = document.querySelector("ul");
toDosUl.addEventListener("click", function(event) {
  // get the element that was clicked on
  var elementClicked = event.target;

  // check if elementClicked is a delete button
  if (elementClicked.className === "delete-button") {
    handlers.deleteToDo(paresInt(elementClicked.parentNode.id));
  }
});
