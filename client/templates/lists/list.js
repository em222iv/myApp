Template.list.rendered = function() {
    var instance = EasySearch.getComponentInstance(
        { id: 'search', index: 'lists' }
    );
    instance.clear();

    var editableList1 = Sortable.create(allIngredients, {
        group: {
            name:"allIngredients",
            put: ['searchIngredients'],
            pull: 'pull'
        }
    });
    var editableList2 = Sortable.create(searchIngredients, {
        group:{
            name: 'searchIngredients',
            put: ['allIngredients'],
            pull: 'pull'
        }
    });
};

Template.list.helpers({
    ingredients: function(){
        return Ingredients.find({},{sort: {createdAt: -1}});
    },
    list: function(){
        return Lists.findOne();
    },
    listIngredients: function(){
        return Lists.findOne().listIngredients;
    }
});

Template.list.events ({
    'click .addToList': function (event) {
        // Prevent default browser form submit
        event.preventDefault();
        console.log(this,Lists.findOne()._id);
        Meteor.call("addIngredientToList",Lists.findOne()._id,this);

    }
});
