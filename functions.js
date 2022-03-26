localStorage.clear();

function addNewTodo(todo) {
    document.querySelector("input.new-todo").value = todo;
    //EventTarget.dispatchEvent() Отправляет событие в общую систему событий. cancelled = !target.dispatchEvent(event)
    document.querySelector("input.new-todo").dispatchEvent(new Event('change',{
        'bubbles': true}));
}


function createTodos(x) {
    for(let n=1; n<=x ; n++){
        addNewTodo("todo" + n);
    }
}
createTodos(5);