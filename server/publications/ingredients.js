// ***************************************************************
// PUBLICATIONS (For Documents collection)
// ***************************************************************

// Ingredient
// -------------------------------------------------------
Meteor.publish('ingredient', function(id) {
  return Ingredients.find(id);
});

// ingredients
// -------------------------------------------------------
Meteor.publish('ingredients', function() {
  return Ingredients.find();
});

