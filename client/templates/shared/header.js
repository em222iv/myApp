

Template.lists.helpers({
    user: function(){
        return Meteor.user();
    }
});

Template.header.events({
    'click .logout': function(event) {
        event.preventDefault();
        Meteor.logout();
        BlazeLayout.render('layout', { header: 'header', main: 'login', footer:"footer" });
    }
});
