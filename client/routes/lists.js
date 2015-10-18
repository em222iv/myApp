
var lists = FlowRouter.group({
  prefix: '/lists',
  triggersEnter: [AccountsTemplates.ensureSignedIn]
});
//index
lists.route('/', {
  subscriptions: function (params, queryParams) {
    this.register('lists',  Meteor.subscribe('lists'));
  },
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { header: 'header', main: 'lists', footer:"footer" });
  },
  name: 'lists'
});
//show
lists.route('/:_id', {
  subscriptions: function (params, queryParams) {
      this.register('list', Meteor.subscribe('list', params._id));
      this.register('ingredients', Meteor.subscribe('ingredients'));
      //this.register('lists',  Meteor.subscribe('lists'));
  },
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { header: 'header', main: 'list', footer:"footer" });
  },
  name: 'list'
});