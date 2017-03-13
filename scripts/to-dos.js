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
  }
};
