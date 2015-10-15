Template.lists.rendered = function() {
  Waves.init();

  var editableList = Sortable.create(editable, {
    filter: '.js-remove',
    onFilter: function (evt) {
      //var el = editableList.closest(evt.item); // get dragged item
      //el && el.parentNode.removeChild(el);
    },
    onStart: function (/**Event*/evt) {
    },
    onEnd: function (/**Event*/evt) {
      console.log(evt);
    },
  });
};

Template.lists.helpers({
  lists: function(){
    return Lists.find({},{sort: {createdAt: -1}});
  },
});

Template.lists.events({
  "click #new-list": function (event) {
    // Prevent default browser form submit
    event.preventDefault();
    Meteor.call("insertList");
  },
  "click .remove-list-element": function (event) {
    // Prevent default browser form submit
    event.preventDefault();
    Meteor.call("removeList", this._id);
  },
  'input .list-title-update': function (event) {
    Meteor.call("updateListTitle", this._id,event.target.value);
  }
});




