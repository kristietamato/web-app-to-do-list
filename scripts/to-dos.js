var toDos = ['item 1', 'item 2', 'item 3'];

function displayToDos() {
  console.log('My to dos: ', toDos);
}

function addToDo(toDo) {
  toDos.push(toDo);
  displayToDos();
}

function changeToDo(position, newValue) {
  toDos[position] = newValue;
  displayToDos();
}

function deleteToDo(position) {
  toDos.splice(position, 1);
  displayToDos();
}
