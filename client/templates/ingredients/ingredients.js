
Template.ingredients.helpers({
  ingredients: function(){
    return Ingredients.find({},{sort: {createdAt: -1}});
  }
});

Template.ingredients.events({
  "click #ingredient-add": function (event) {
    // Prevent default browser form submit
    event.preventDefault();
    console.log(Meteor.call("insertIngredient",document.getElementById("name").value));

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


