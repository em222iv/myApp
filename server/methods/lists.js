Meteor.methods({
    insertList:function(listName) {
        // Insert a list into the collection
        Lists.insert({
            index: Lists.find().fetch().length,
            title: listName,
            author: Meteor.user().username,
            createdAt: new Date() // current time
        });
    },
    removeList:function(id) {
        // Remove a list into the collection
        Lists.remove(id);
    },
    updateListTitle:function(id,title) {
        // Update a list into the collection
        if(title.length <= 25) {
            Lists.update({_id: id}, {$set: {title: title}});
        }
    }
});
