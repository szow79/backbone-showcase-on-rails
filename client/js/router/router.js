var Router = Backbone.Router.extend({
    initialize: function() {
        this.route("foo/:bar", "baz");
    },
    routes: {
        "/shows": "index"
    },

});
