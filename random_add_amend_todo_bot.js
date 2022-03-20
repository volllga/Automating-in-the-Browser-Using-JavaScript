var rando = new function() {

    function getRandomInt(x) {

        return Math.floor(Math.random() * x);

    }

    function getRandomItemIndex() {

        max = document.querySelectorAll("ul.todo-list li").length;
        if (max === 0) {
            console.log("there no items to choose from");
            return 0;
        }
        x = getRandomInt(max) + 1;
        return x;
    }

    this.createRandomTodo = function() {
        console.log("create a todo");
        autoTodo.addNewTodo("random todo " + Date.now());
    }

    this.editRandomTodo = function() {
        x = getRandomItemIndex();
        y = Math.floor(Math.random()*50);
        if (x>0){
            console.log("edit a todo " + x);
            autoTodo.editTodo(x, "edited todo " + y);
        }

    }
}

