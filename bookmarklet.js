https://www.eviltester.com/2017/04/a-quick-intro-to-bookmarklets.html
javascript: (function() {

        max = prompt("how many?");

        if (max) {
            for (let n = 1; n <= max; n++) {
                setTimeout(function(name) {
                    document.querySelector("input.new-todo").value = name;
                    document.querySelector("input.new-todo").dispatchEvent(new Event('change',{
                        'bubbles': true
                    }));
                }, n * 100, "todo " + n);
            }
        }
    }
)()


javascript: (function() {

 //some cod
    }
)()

javascript: (function() {
        document.title = window.prompt("", "hello");
    }
)()

//create the cod for new bookmarklet
//The simplest tool for creating a bookmarklet I could find was typing the following into the console:
"javascript:(function(){" + encodeURI(window.prompt("")) + "})()"