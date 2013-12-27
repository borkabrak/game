// Entities -- objects to track within the game world.
Entities = function(){
    "use strict";
    var my = this;

    // The list of all entities.
    var registry = [];


    // Add entity to those we track.
    my.register = function(entity){
        // entity gets id based on its index in the registry.
        entity.id = registry.length;
        return registry.push(entity);
    };

    // return an array containing a pairs (also arrays) of entities that overlap (collide).
    my.detect_collisions = function(entity){
        var collisions = [];

        // for each entity..
        registry.forEach(function(entity1){
            // check against all the others..
            registry.forEach(function(entity2){

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

    // Check for collision between two entities
    function collision(entity1, entity2){
        console.info("Checking for collision between %o and %o", entity1, entity2);
        // Vertical
        if (entity1.y + entity1.height > entity2.y) {
            console.error("Collision between %o and %o", entity1, entity2);
            return true
        };
        return false;
    };

};
