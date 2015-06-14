var accountsSchema = new SimpleSchema({
  createdAt: {
    type: Date
  },
  name: {
    type: String,
    label: "Description",
    optional: true,
    max: 100
  }
});

AccountBalances = new Mongo.Collection('account_balances');
AccountBalances.attachSchema(categoriesSchema);

// if (Meteor.isServer) {
//   logEvent = function (event) {

//     // if event is supposed to be unique, check if it has already been logged
//     if (!!event.unique && !!Events.findOne({name: event.name})) {
//       return
//     }

//     event.createdAt = new Date();

//     Events.insert(event);

//   }
// }