// <!-- toggle all todos >
document.querySelector("#toggle-all").click();


// <!-- toggle one(1) todo >
document.querySelector("ul.todo-list li:nth-child(1) input.toggle").click();


// <!-- delete todo (1)>
document.querySelector("ul.todo-list li:nth-child(1) button.destroy").click();


// <!-- clear completed>
document.querySelector("button.clear-completed").click();


// <!-- choose filter>
document.querySelector("ul.filters li:nth-child(1) a").click();


// <!-- where is hash? see Elements > right panel Event Liseners>
location.hash;


// <!-- change location hash >
location.hash = "/";


// <!-- add a new todo >
document.querySelector("input.new-todo").value = "here is a new todo";
document.querySelector("input.new-todo").dispatchEvent(new Event('change',{'bubbles': true}));


// <!-- edit a todo >
document.querySelector("ul.todo-list li:nth-child(4) label").dispatchEvent(new Event('dblclick',{'bubbles': true}));
document.querySelector("ul.todo-list li:nth-child(4) .edit").value="new value";
document.querySelector("ul.todo-list li:nth-child(4) .edit").dispatchEvent(new Event('blur'));
