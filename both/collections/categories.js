var categoriesSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  type: {
    type: String,
    label: "Type",
    allowedValues: ['Variable Expense', 'Fixed Expense', 'Income']
  },
  amount: {
    type: Number,
    label: "Amount"
  },
  description: {
    type: String,
    label: "Description",
    optional: true,
    max: 100
  },
  slug: {
    type: Object,
    regEx: /^[A-Z]{2,25}$/,
    optional: true
  },
  createdAt: {
    type: Date,
    optional: true // automatically filled
  }
});

// meteor add aldeed:collection2
Categories = new Mongo.Collection('categories');
Categories.attachSchema(categoriesSchema);

// meteor add matb33:collection-hooks
Categories.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
