
var ingredients = FlowRouter.group({
  prefix: '/ingredients',
  triggersEnter: [AccountsTemplates.ensureSignedIn]
});
//index
ingredients.route('/', {
  subscriptions: function (params, queryParams) {
    this.register('ingredients',  Meteor.subscribe('ingredients'));
  },
  action: function (params, queryParams) {
    BlazeLayout.render('layout', { header: 'header', main: 'ingredients', footer:"footer" });
  },
  name: 'ingredients'
});
