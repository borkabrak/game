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

};
