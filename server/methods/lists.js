Meteor.methods({
    insertList:function(listName) {
        // Insert a list into the collection
        console.log(Meteor.user().profile[0][Math.floor(Math.random()*Meteor.user().profile[0].length)]);
        Lists.insert({
            index: Lists.find().fetch().length,
            title: listName,
            author: Meteor.user().username,
            createdAt: new Date() ,
            color: Meteor.user().profile[0].colors[Math.floor((Meteor.user().profile[0].colors.length + 1) * Math.random())],
        });
    },
    removeList:function(id) {
        Lists.remove(id);
    },
    updateListTitle:function(id,title) {
        if(title.length <= 25) {
            Lists.update({_id: id}, {$set: {title: title}});
        }
    },
    addIngredientToList:function(listId,ingredient) {
        console.log(listId,ingredient._id);
        Lists.update({_id: listId},
            {$push: {listIngredients: ingredient._id}, $set: {checked: true}},
            {multi: true});
    },

});
