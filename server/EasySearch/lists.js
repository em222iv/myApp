EasySearch.createSearchIndex('lists', {
    'collection': Lists, // instanceof Meteor.Collection
    'field': ['title', 'index', 'author'], // array of fields to be searchable
    'limit': 20,
    'use' : 'mongo-db',
    'convertNumbers': true,
    'props': {
        'filteredCategory': 'All',
        'sortBy': 'title'
    },
    'sort': function() {
        if (this.props.sortBy === 'title') {
            return { 'title': 1 };
        }
        // default by highest score
        return { 'title': 1 };
    },
    'query': function(searchString, opts) {
        // Default query that will be used for the mongo-db selector
        var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

        //console.log(opts);

        // filter for categories if set
        if (this.props.filteredCategory.toLowerCase() !== 'all') {
            query.category = this.props.filteredCategory;
        }

        return query;
    }
});
