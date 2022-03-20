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

    this.toggleAll = function () {
        console.log("toggle aii todo");
        autoTodo.toggleAll();
    }

    this.selectRandomItem = function() {

        x = getRandomItemIndex();
        if (x > 0) {
            console.log("select item " + x);
            autoTodo.selectItemX(x);
        }

    }

}
