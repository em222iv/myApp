
// LISTS INDEX
// -------------------------------------------------------
Meteor.publish('lists', function() {
  return Lists.find();
});

// LISTS SHOW
// -------------------------------------------------------
Meteor.publish("list", function(id){
  return Lists.find({ _id:id});
});


