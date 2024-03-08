const inptBox = document.getElementById("input");
const todosUl = document.getElementById("todos");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
})

const todos = JSON.parse(localStorage.getItem("todos"));
if (todos) {
    todos.forEach(todo => addTodo(todo))
}

function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }
    console.log(todoText)

    if (todoText) {
        const todoEl = document.createElement("li");
        if (todo && todo.completed) {
            console.log("entered")
            todoEl.classList.add("completed");
        }
        todoEl.innerHTML = todoText;

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed")
            updateLs()
        });

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todoEl.remove();
            updateLs()
        });

        todosUl.appendChild(todoEl);
        input.value = "";
    }

    updateLs()
}


function updateLs() {
    const todosElements = document.querySelectorAll("li");

    const todosList = [];

    todosElements.forEach(todoL => {
        todosList.push({
            text: todoL.innerText,
            completed: todoL.classList.contains("completed")
        })
    })

    localStorage.setItem("todos", JSON.stringify(todosList));
}
