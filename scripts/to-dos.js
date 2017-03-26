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
    this.toDos.forEach(function(toDo) {
      if (toDo.completed) {
        completedToDos++;
      }
    });

    // if all true, make all to dos false. Else make all true
    this.toDos.forEach(function(toDo) {
      if (completedToDos === totalToDos) {
        toDo.completed = false;
      } else {
        toDo.completed = true;
      }
    });
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
  deleteToDo: function(position) {
    toDoList.deleteToDo(position);
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

    toDoList.toDos.forEach(function(toDo, position) {
      var toDoLi = document.createElement("li");
      var toDoTextWithCompletion = "";

      if(toDo.completed) {
        toDoTextWithCompletion = "(x) " + toDo.toDoText;
      } else {
        toDoTextWithCompletion = "( ) " + toDo.toDoText;
      }

      toDoLi.id = position;
      toDoLi.textContent = toDoTextWithCompletion;
      toDoLi.appendChild(this.createDeleteBtn());
      toDosUl.appendChild(toDoLi);
    }, this);
  },
  createDeleteBtn: function() {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    return deleteButton;
  },
  setUpEventListeners: function() {
    var toDosUl = document.querySelector("ul");
    toDosUl.addEventListener("click", function(event) {
      // get the element that was clicked on
      var elementClicked = event.target;

      // check if elementClicked is a delete button
      if (elementClicked.className === "delete-button") {
        handlers.deleteToDo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();
