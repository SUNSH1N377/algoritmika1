let todos = [];
let id = 0
let output = document.querySelector ('#output')
let tasks = document.querySelector ('.tasks')
console.log(tasks)

output.innerHTML = "Текст"

function addTodo (content) {
   let todo = {
       id: id,
       content: content
   }
   todos.push(todo)
   id++
}

function deleteTodo(id) {
    todos = todos.filter(index => index.id !== id)
    console.log(todos)
}

function template(title, content){
    let html_template=`
    <div class="item">
        <h2>${title}</h2>
        <p>${content}</p>
        <div class ="buttons">
          <button> Выполнено </button>
          <button> Удалить </button>
        </div>
      </div>
    `
    tasks.innerHTML+=html_template
}
template('Сделать уроки','Выполнить 4 вариант ОГЭ русский язык')
template('Сходить в магазин','Купить колбасу и хлеб')
template('Убраться в комнате','Вытереть пыль, разобрать шкаф')
template('Почитсить компьютер','Убрать пыль и почистить видеокарту')
template('Погулять','Сходить в парк')

addTodo('Содержимое заметки 1')
addTodo('Содержимое заметки 2')
addTodo('Содержимое заметки 3')
addTodo('Содержимое заметки 4')

deleteTodo(0)
deleteTodo(1)
deleteTodo(2)
deleteTodo(3)

function printTodo(todos) {
    for (let i = 0; i < todos.length; i++){
        output.innerHTML += todos[i].content
    }
}

console.log(todos)








