window.onload = function(){
    "use strict";

    var game = new Game();
    window.game = game;

    game.register(new Square({ 
        "player": true,
        "x": 100,
        "y": 100,
        "size": 30,
        "color": "#8a8",
    }));

    game.register(new Square({
        "x": 200,
        "y": 200,
        "size": 30,
        "color": "#a88",
    }));

    document.body.onkeypress = function(event){

        var key = String.fromCharCode(event.which);

        if (typeof game.keymap[key] === "undefined") {
            return undefined;
        }

        game.keymap[key].call();

    };
}; 
