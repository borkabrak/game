"use strict";

var Square = function(init){
    var my = this;
   
    my.attributes = {
        x: init.x,
        y: init.y,
        height: init.size,
        width: init.size
    }

    // This keymap may belong in the game logic (right now, in the index.html), instead of the square object
    my.keymap = {
        119: "y,-10",
        115: "y,10",
        97: "x,-10",
        100: "x,10",
    };


    var context = document.getElementById("display").getContext('2d');

    my.draw = function(){
        return context.fillRect( my.attributes.x, my.attributes.y, my.attributes.width, my.attributes.height );
    };

    my.clear = function(){
        return context.clearRect( my.attributes.x, my.attributes.y, my.attributes.width, my.attributes.height );
    }

    my.move = function(instruction){

        instruction = instruction.replace(/ /g,"").split(",");
        my.clear();
        my.attributes[instruction[0]] += parseInt(instruction[1], 10);
        return my.draw();

    };

    // initialize
    my.draw();
};
