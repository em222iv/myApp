Template.ingredients.rendered = function() {
  $("#search").attr("class","insertIngredient");
  $("#search").attr("index","ingredients");;
  //console.log($("#search"));
  var instance = EasySearch.getComponentInstance(
      { id: 'search', index: 'lists' }
  );
  instance.clear();
};


Template.ingredients.helpers({
  ingredients: function(){
    return Ingredients.find({},{sort: {createdAt: -1}});
  }
});

Template.ingredients.events({
  "click .addItem": function (event) {
    // Prevent default browser form submit
    event.preventDefault();
    console.log($("#search").value);
    Meteor.call("insertIngredient",$("#search").value);
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


