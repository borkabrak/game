window.onload = function(){
    "use strict";

    var square = new Square({ 
        "x": 100,
        "y": 100,
        "size": 30,
    });

    var keymap = {
        119: "y,-10",
        115: "y,10",
        97: "x,-10",
        100: "x,10",
    };

    document.body.onkeypress = function(event){

        if (typeof keymap[event.which] === "undefined") {
            return undefined;
        }

        square.move( keymap[event.which] );

    };
}; 
