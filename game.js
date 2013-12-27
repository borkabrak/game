// Entities -- objects to track within the game world.
Game = function(init){
    "use strict";
    var my = this;

    // Player character
    my.player;

    // Movement quantum (implement in move())
    my.step = init.step || 10;

    my.keymap = {
        "w": function(){ my.player.move("y,-10") },
        "s": function(){ my.player.move("y,10") },
        "a": function(){ my.player.move("x,-10") },
        "d": function(){ my.player.move("x,10") },
    };

    // The list of all entities.
    var entities = [];

    // Add entity to those we track.
    my.register = function(entity){
        // entity gets id based on its index in the registry.
        entity.id = entities.length;
        if (entity.player === true) { my.player = entity };
        entity.draw();
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


    // PRIVATE
    // ==========
    
    // Check for collision between two entities
    function collision(alpha, beta){
        console.info("Checking for collision between %o and %o", alpha, beta);
        // Vertical
        if (alpha.y > beta.y && alpha.y < beta.y - beta.height ) {
            console.error("Collision between %o and %o", alpha, beta);
            return true
        };
        return false;
    };

};
