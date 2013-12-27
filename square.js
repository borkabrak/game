// Squares -- players in the game

var Square = function(init, entities){
    "use strict";
    var my = this;
   
    my.x = init.x || 0;
    my.y = init.y || 0;
    my.height = init.size || 30;
    my.width = init.size || 30;
    my.color = init.color || "#000";
    my.player = init.player || false;

    var context = document.getElementById("display").getContext('2d');

    my.draw = function(){
        context.fillStyle = my.color;
        return context.fillRect( my.x, my.y, my.width, my.height );
    };

    my.clear = function(){
        return context.clearRect( my.x, my.y, my.width, my.height );
    }

    my.move = function(instruction){

        instruction = instruction.replace(/ /g,"").split(",");
        my.clear();

        my[instruction[0]] += parseInt(instruction[1], 10);

        // Prevent movement outside the canvas
        if (my.x < 0) {
            my.x = 0;
        };

        if (my.y < 0) {
            my.y = 0;
        };

        if (my.x + my.width > context.canvas.width) {
            my.x = context.canvas.width - my.width;
        };

        if (my.y + my.height > context.canvas.height) {
            my.y = context.canvas.height - my.height;
        };

        return my.draw();

    };

};
