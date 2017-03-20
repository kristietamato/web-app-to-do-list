var toDoList = {
  toDos: [],
  displayToDos: function() {
    if (this.toDos.length === 0) {
      console.log('Your to do list is empty.');
    } else {
        console.log('My to dos: ');
        for(var count = 0; count < this.toDos.length; count++) {
          // check if to do is completed
          if(this.toDos[count].completed) {
            console.log('(x) ', this.toDos[count].toDoText);
          } else {
            console.log('( ) ', this.toDos[count].toDoText);
          }
        }
    }
  },
  addToDo: function(toDoText) {
    this.toDos.push({
      toDoText: toDoText,
      completed: false
    });
    this.displayToDos();
  },
  changeToDo: function(position, toDoText) {
    this.toDos[position].toDoText = toDoText;
    this.displayToDos();
  },
  deleteToDo: function(position) {
    this.toDos.splice(position, 1);
    this.displayToDos();
  },
  toggleCompleted: function(position) {
    var toDo = this.toDos[position];
    toDo.completed = !toDo.completed;
    this.displayToDos();
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

    this.displayToDos();
  }
};

var handlers = {
  displayToDos: function() {
    toDoList.displayToDos();
  },
  addToDo: function() {
    var addToDoInput = document.getElementById("add-to-do-input");
    toDoList.addToDo(addToDoInput.value);
    addToDoInput.value = "";
  },
  changeToDo: function() {
    var changeToDoPositionInput = document.getElementById("change-to-do-position-input");
    var changeToDoInput = document.getElementById("change-to-do-input");
    toDoList.changeToDo(changeToDoPositionInput.valueAsNumber, changeToDoInput.value);
    changeToDoPositionInput.value = "";
    changeToDoInput.value = "";
  },
  deleteToDo: function() {
    var deleteToDoPositionInput = document.getElementById("delete-to-do-position-input");
    toDoList.deleteToDo(deleteToDoPositionInput.valueAsNumber);
    deleteToDoPositionInput.value = "";
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById("toggle-completed-position-input");
    toDoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
  },
  toggleAll: function() {
    toDoList.toggleAll();
  }
};
