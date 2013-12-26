window.onload = function(){
    "use strict";

    var square = new Square({ 
        "x": 100,
        "y": 100,
        "size": 30,
    });

    var keymap = {
        "w": "y,-10",
        "s": "y,10",
        "a": "x,-10",
        "d": "x,10",
    };

    document.body.onkeypress = function(event){

        var key = String.fromCharCode(event.which);

        if (typeof keymap[key] === "undefined") {
            return undefined;
        }

        square.move( keymap[key] );

    };
}; 
