Template.ingredients.rendered = function() {

  var instance = EasySearch.getComponentInstance(
      { id: 'search', index: 'ingredients' }
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


Template.ingredients.helpers({
  ingredients: function(){
    return Ingredients.find({},{sort: {createdAt: -1}});
  }
});

Template.ingredients.events({
  'click .addItem': function (event) {
    // Prevent default browser form submit
    event.preventDefault();
    console.log('d');
    Meteor.call("insertIngredient", $("#search").val());
    $("#search").val('');
    $('#allIngredients').show();
  }, /**
   * Created by erikmagnusson on 2015-10-17.
   */
  'input #search': function (event) {
    if(this._id,event.target.value.length > 0) {
      $('#allIngredients').hide();
    }
    else{

      $('#allIngredients').show();
    }
  },
  "click .remove-ingredient": function (event) {
    // Prevent default browser form submit
    event.preventDefault();
    Meteor.call("removeIngredient", this._id);
  },
  'input .ingredient-title-update': function (event) {
      Meteor.call("updateIngredientTitle", this._id,event.target.value);
  }
});


