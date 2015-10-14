Ingredients = new Meteor.Collection('ingredients');

Schema = {};
Schema.Ingredients = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 25,
        optional: false
    },
    amount: {
        type: Int32Array,
        label: "Amount",
        max: 1000,
        optional: true
    },
    measurement: {
        type: String,
        label: "Measurement",
        max: 10,
        optional: true
    },
    listIds: {
        type: Array,
        label: "listIds",
        optional: true,

    },
    'listIds.$': {
        type: Object,
    },
    'listIds.$.id': {
        type: String,
    }
});

Ingredients.attachSchema(Schema.Ingredients);

