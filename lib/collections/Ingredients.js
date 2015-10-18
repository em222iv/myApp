Ingredients = new Meteor.Collection('ingredients');

Ingredients.initEasySearch(['title'], {
    'limit' : 20,
    'use' : 'mongo-db'
});

Schema = {};
Schema.Ingredients = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 25,
        optional: false
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
    },
    color: {
        type: String,
        label: "Color",
        max: 25,
        optional: true
    },
    createdAt: {
        type: Date,
        optional: true,
        denyUpdate: true,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            }
        }
    },
    updatedAt: {
        type: Date,
        optional: true,
        denyInsert: true,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        }
    }
});

Ingredients.attachSchema(Schema.Ingredients);

