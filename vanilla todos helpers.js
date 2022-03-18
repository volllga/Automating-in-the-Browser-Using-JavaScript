function clickItem(item) {
    item.click();
}

function toggleAll() {
    document.querySelector("#toggle-all").click();
}

function toggleAll2() {
    document.querySelector("#toggle-all").click();
}

var toggles = document.querySelectorAll(".toggle");
toggles.forEach(clickItem);

function selectItemX(x) {
    document.querySelector("ul.todo-list li:nth-child(" + x + ") input.toggle").click();
}

function deleteItemX(x) {
    document.querySelector("ul.todo-list li:nth-child(" + x + ") button.destroy").click();
}

function addNewTodo(todo) {
    document.querySelector("input.new-todo").value = todo;
    document.querySelector("input.new-todo").dispatchEvent(new Event('change',{
        'bubbles': true
    }));
}

function filterComplited() {
    location.hash = "/completed";
}

function filterAll() {
    location.hash = "/";
}

function filterActive() {
    location.hash = "/active";
}
