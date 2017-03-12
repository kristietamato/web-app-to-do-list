var toDoList = {
  toDos: ['item 1', 'item 2', 'item 3'],
  displayToDos: function() {
    console.log('My to dos: ', this.toDos);
  },
  addToDo: function(toDo) {
    this.toDos.push(toDo);
    this.displayToDos();
  }
};

function changeToDo(position, newValue) {
  toDos[position] = newValue;
  displayToDos();
}

function deleteToDo(position) {
  toDos.splice(position, 1);
  displayToDos();
}
