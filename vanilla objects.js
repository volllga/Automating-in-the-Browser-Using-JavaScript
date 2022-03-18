var autoTodo = new function name(params) {
    this.clickItem = function(item) {
        item.click();
    }

    // toggle all todos 
    this.toggleAll = function() {
        document.querySelector("#toggle-all").click();
    }

    // toggle X todo 
    this.selectItemX = function(x) {
        document.querySelector("ul.todo-list li:nth-child(" + x + ") input.toggle").click();
    }

    this.deleteItemX = function(x) {
        document.querySelector("ul.todo-list li:nth-child(" + x + ") button.destroy").click();
    }

    this.addNewTodo = function(todo) {
        document.querySelector("input.new-todo").value = todo;
        document.querySelector("input.new-todo").dispatchEvent(new Event('change',{
            'bubbles': true}));
    }

    this.editTodo = function(x, todo) {
        document.querySelector("ul.todo-list li:nth-child(" + x + ") label").dispatchEvent(new Event('dblclick',{
            'bubbles': true
        }));
        document.querySelector("ul.todo-list li:nth-child(" + x + ") .edit").value = todo;
        document.querySelector("ul.todo-list li:nth-child(" + x + ") .edit").dispatchEvent(new Event('blur'));
    }

    this.filterComplited = function() {
        location.hash = "/completed";
    }

    this.filterAll = function() {
        location.hash = "/";
    }

    this.filterActivel = function filterActivel() {
        location.hash = "/active";
    }
}

function createTodos(x) {
    for(let n=1; n<=x ; n++){
        autoTodo.addNewTodo("todo" + n);
    }
}

function createTodos(x) {
    for(let n=1; n<=x ; n++){
        setTimeout(autoTodo.addNewTodo, n*100, "todo " + n);
    }
}


//This is saying, "Create a setTimeout
// so that 1,000 milliseconds in the future
// we will call the createTodo function on autoTodo
// with this parameter."
function createTodos(x) {
    for(let n=1; n<=x ; n++){
        setTimeout(function (name){
            document.querySelector("input.new-todo").value = name;
            document.querySelector("input.new-todo").dispatchEvent(new Event('change',{'bubbles': true}));
        }, n*100, "todo " + n);
    }
}

//create x todo setInterval
var botTodoCount = 1;

var creatorBot = setInterval(function(){
    document.querySelector("input.new-todo").value = "todo "+ botTodoCount;
    document.querySelector("input.new-todo").dispatchEvent(new Event('change',{'bubbles': true}));

    botTodoCount++;

    if(botTodoCount>10){
        clearInterval(creatorBot);
    }

    }, 500);

