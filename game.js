Game = function(init){
    "use strict";
    var my = this;

    // Context of the canvas
    var context = document.getElementById("display").getContext('2d');

    // Player character
    my.player;

    // Movement quantum (implement in move())
    my.step = init && init.step || 10;

    my.keymap = {
        "w": function(){ my.move(my.player, "y,-10") },
        "s": function(){ my.move(my.player, "y,10") },
        "a": function(){ my.move(my.player, "x,-10") },
        "d": function(){ my.move(my.player, "x,10") },
        "k": function(){ my.move(my.player, "up") },
        "j": function(){ my.move(my.player, "down") },
        "h": function(){ my.move(my.player, "left") },
        "l": function(){ my.move(my.player, "right") },
    };

    // Entities -- objects to track within the game world.
    var entities = [];

    // Add entity to those we track.
    my.register = function(entity){
        // entity gets id based on its index in the registry.
        entity.id = entities.length;
        if (entity.player === true) { my.player = entity };
        my.draw(entity);
        return entities.push(entity);
    };

    // return an array containing a pairs (also arrays) of entities that overlap (collide).
    my.detect_collisions = function(entity){
        var collisions = [];

        // for each entity..
        entities.forEach(function(entity1){
            // check against all the others..
            entities.forEach(function(entity2){

                // skip if it's the same entity
                if (entity1.id !== entity2.id){

                    if (collision(entity1, entity2)){
                        collisions.push([entity1, entity2]);
                    }
                }
            });
        });

        // return undefined if no collisions
        return collisions.length == 0 ? undefined : collisions;
    };

    my.draw = function(entity){
        context.fillStyle = entity.color;
        return context.fillRect( entity.x, entity.y, entity.width, entity.height );
    };

    my.clear = function(entity){
        return context.clearRect( entity.x, entity.y, entity.width, entity.height );
    }

    my.move = function(entity, movement){
    
        // english shortcuts for common movements
        var shortcuts = {
            "up":   "y, -10",
            "down": "y, 10",
            "left": "x, -10",
            "right": "x, 10"
        };

        if (shortcuts[movement] !== undefined ){
            movement = shortcuts[movement];
        };

        movement = movement.replace(/ /g,"").split(",");
        my.clear(entity);

        entity[movement[0]] += parseInt(movement[1], 10);

        // Prevent movement outside the canvas
        if (entity.x < 0) {
            entity.x = 0;
        };

        if (entity.y < 0) {
            entity.y = 0;
        };

        if (entity.x + entity.width > context.canvas.width) {
            entity.x = context.canvas.width - entity.width;
        };

        if (entity.y + entity.height > context.canvas.height) {
            entity.y = context.canvas.height - entity.height;
        };

        my.detect_collisions();

        return my.draw(entity);

    };

    // PRIVATE
    // ==========
    
    // Check for collision between two entities
    function collision(alpha, beta){
        return ( 
                // Vertical
                (alpha.y > beta.y && alpha.y < beta.y + beta.height)
                &&
                // Horizontal
                (alpha.x > beta.x && alpha.x < beta.x + beta.width)
            ) ?  true : false;
    };

};
