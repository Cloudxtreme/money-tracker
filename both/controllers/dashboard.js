DashboardController = AppController.extend({
  waitOn: function() {
    return this.subscribe('items');
  },
  data: {
    items: Categories.find({})
    //categories: Categories.find({}) 
  },
  onBeforeAction: function (pause) {
    AccountsTemplates.ensureSignedIn.call(this, pause);
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
