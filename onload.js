window.onload = function(){
    "use strict";

    var keymap = {
        "w": function(){ square.move("y,-10") },
        "s": function(){ square.move("y,10") },
        "a": function(){ square.move("x,-10") },
        "d": function(){ square.move("x,10") },
    };

    var square = new Square({ 
        "x": 100,
        "y": 100,
        "size": 30,
        "color": "#8a8",
    });

    var enemy = new Square({
        "x": 200,
        "y": 200,
        "size": 30,
        "color": "#a88",
    });

    document.body.onkeypress = function(event){

        var key = String.fromCharCode(event.which);

        if (typeof keymap[key] === "undefined") {
            return undefined;
        }

        keymap[key].call();

    };
}; 
