let todos = [];

let id = 0

function addTodo (content) {
   let todo = {
       id: id,
       content: content
   }
   todos.push(todo)
   id++
}

// function deleteTodo() {
//     todos.filter()
// }

addTodo('Содержимое заметки 1')
addTodo('Содержимое заметки 2')
addTodo('Содержимое заметки 3')
addTodo('Содержимое заметки 4')

 console.log(todos)