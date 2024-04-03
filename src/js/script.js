let todos = [];
let id = 0
let output = document.querySelector ('#output')

output.innerHTML = "Текст"

function addTodo (content) {
   let todo = {
       id: id,
       content: content
   }
   todos.push(todo)
   id++
}

function deleteTodo(index) {
    todos.filter(index => index.id != id)
}

deleteTodo(2)

addTodo('Содержимое заметки 1')
addTodo('Содержимое заметки 2')
addTodo('Содержимое заметки 3')
addTodo('Содержимое заметки 4')

function printTodo(todos) {
    for (let i = 0; i < todos.length; i++){
        output.innerHTML += todos[i].content
    }
}

console.log(todos)
printTodo(todos)




