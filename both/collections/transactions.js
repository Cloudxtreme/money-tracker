var transactionSchema = new SimpleSchema({
	description: {
		type: String,
		label: "Description",
		optional: true,
		max: 100
	},
	account: {
		type: Object,
		label: "Account",
		optional: true
	},
	amount: {
		type: Number,
		label: "Amount",
	},
	category: {
		type: Object,
		optional: true
	},
	type: {
		type: String,
		blackbox: true
	},
	createdAt: {
		type: Date,
		optional: true
	}
});


Transactions = new Mongo.Collection('transactions');
Transactions.attachSchema(transactionSchema);

Transactions.before.insert(function (userId, doc) {
	doc.createdAt = moment().toDate();
});

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