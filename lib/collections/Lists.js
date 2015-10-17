Lists = new Meteor.Collection('lists');

Lists.initEasySearch(['title', 'author', 'index'], {
    'limit' : 20,
    'use' : 'mongo-db'
});

Schema = {};
Schema.Lists = new SimpleSchema({
    index: {
        type: Number,
        label: "Index",
        optional: false
    },
    title: {
        type: String,
        label: "Title",
        max: 25,
        optional: false
    },
    author: {
        type: String,
        label: "Author",
        max: 100,
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

Lists.attachSchema(Schema.Lists);

