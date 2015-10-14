// ***************************************************************
// STATIC PAGES
// ***************************************************************

//FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn]);

FlowRouter.route('/', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    subscriptions: function (params, queryParams) {
         //this.register('posts', Meteor.subscribe('allPosts'));
    },
    action: function (params, queryParams) {
        BlazeLayout.render('layout', { header: 'header', main: 'home', footer:"footer" });
    },
    name: 'home'
});
FlowRouter.route('/about', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    subscriptions: function (params, queryParams) {
        //this.register('posts', Meteor.subscribe('allPosts'));
    },
    action: function (params, queryParams) {
        BlazeLayout.render('layout', { header: 'header', main: 'about', footer:"footer" });
    },
    name: 'about'
});
