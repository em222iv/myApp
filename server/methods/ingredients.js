Meteor.methods({
    insertIngredient:function(name) {
        // Insert a list into the collection
        console.log(name);
        Ingredients.insert({
            title: name,
            createdAt: new Date(),
        });
    },
    removeIngredient:function(id) {
        // Remove a list into the collection
        Ingredients.remove(id);
    },
    updateIngredientTitle:function(id,title) {
        // Update a list into the collection

            console.log(title);
            Ingredients.update({_id: id}, {$set: {title: title}});

    }
});
