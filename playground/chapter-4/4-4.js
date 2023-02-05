
let todoList = []

function remember(task) {
  todoList.push(task)
}

function getTask() {
  return todoList.shift()
}

function rememberUrgently(task) {
  todoList.unshift(task)
}

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1))
}

remember('groceries')
console.log(todoList)
remember('call')
rememberUrgently('task2')
console.log(todoList)
