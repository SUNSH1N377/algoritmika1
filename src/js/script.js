let todos = [];
<<<<<<< HEAD

let id = 0

let output = document.querySelector(`#output`)

let tasc = document.querySelector(`.tasc`)
console.log(tasc)

output.innerHTML = "текст"

function addTodo(content) {
    let todo = {
        id: id,
        content: content
    }

    todos.push(todo)
    id++
}


function deleteTodo(id) {
    todos = todos.filter(item => item.id !== id)
=======
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
>>>>>>> 19d3b4f0fc3d63e03d80a849662bb79029225127
    console.log(todos)
}

function template(title, content){
<<<<<<< HEAD
    let html_template = `
    <div class="item">
              <h2>${title}</h2>
              <p>${content}</p>
              <div class="buttons">
                  <button>Выполнено</button>
                  <button>Удалить</button>
              </div>
          </div>
    `
    tasc.innerHTML+=html_template
}
template("Погулять с собакой", "3 раза обязательно погулять с собакой")
template("Сделать литературу", "Написать конспект страниц 200-205")
template("Сделать математику", "Подготовиться к диагностике на четверг")
template("Посмотреть вебы", "Решить тесты и обяз выучить материал")
template("Убраться дома", "Помыть полы и прибраться в гостиной")


addTodo(`Содержимое заметки 1`)
addTodo(`Содержимое заметки 2`)
addTodo(`Содержимое заметки 3`)

function printTodo(todos){

    for(let i = 0; i < todos.length; i++) {
        console.log(todos[i].content)
        output.innerHTML += todos[i].content
    }

=======
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
>>>>>>> 19d3b4f0fc3d63e03d80a849662bb79029225127
}

console.log(todos)






<<<<<<< HEAD
=======


>>>>>>> 19d3b4f0fc3d63e03d80a849662bb79029225127
