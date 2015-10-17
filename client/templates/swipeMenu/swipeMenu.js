Template.swipeMenu.events({
    'click .logout': function(event) {
        event.preventDefault();
        Meteor.logout();
        BlazeLayout.render('layout', { header: 'header', main: 'login', footer:"footer" });
    }
});
