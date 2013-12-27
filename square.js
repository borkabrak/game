"use strict";

var Square = function(init){
    var my = this;
   
    my.attributes = {
        x: init.x,
        y: init.y,
        height: init.size,
        width: init.size,
        color: init.color,
    }

    var context = document.getElementById("display").getContext('2d');

    my.draw = function(){
        context.fillStyle = my.attributes.color;
        return context.fillRect( my.attributes.x, my.attributes.y, my.attributes.width, my.attributes.height );
    };

    my.clear = function(){
        return context.clearRect( my.attributes.x, my.attributes.y, my.attributes.width, my.attributes.height );
    }

    my.move = function(instruction){

        var attr = my.attributes;
        instruction = instruction.replace(/ /g,"").split(",");
        my.clear();

        attr[instruction[0]] += parseInt(instruction[1], 10);

        // Prevent movement outside the canvas
        if (attr.x < 0) {
            attr.x = 0
        };

        if (attr.y < 0) {
            attr.y = 0
        };

        if (attr.x + attr.width > context.canvas.width) {
            attr.x = context.canvas.width - attr.width;
        };

        if (attr.y + attr.height > context.canvas.height) {
            attr.y = context.canvas.height - attr.height;
        };

        return my.draw();

    };

    // initialize
    my.draw();
};
