Template.lists.rendered = function() {

  $("#search").attr("class","insertList");
  $("#search").attr("index","lists");

  var instance = EasySearch.getComponentInstance(
      { id: 'search', index: 'lists' }
  );
  instance.clear();

  var editableList1 = Sortable.create(allLists, {
    group: {
      name:"allLists",
      put: ['searchLists'],
      pull: 'pull'
  }
  });
  var editableList2 = Sortable.create(searchLists, {
    group:{
      name: 'searchLists',
      put: ['allLists'],
      pull: 'pull'
    }
  });
};

Template.lists.helpers({
  lists: function(){
    return Lists.find({},{sort: {createdAt: -1}});
  },
});

Template.lists.events({
  "click .remove-list-element": function (event) {
    // Prevent default browser form submit
    event.preventDefault();
    Meteor.call("removeList", this._id);
  },
  'input .list-title-update': function (event) {
    Meteor.call("updateListTitle", this._id,event.target.value);
  }
});
