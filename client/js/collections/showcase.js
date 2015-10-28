var app = app || {};

app.Showcase = Backbone.Collection.extend({
  // fill in the model property
  model: app.Show,
  // use localStorage for testing. Be sure to delete this line when your API is ready.
  // localStorage: new Backbone.LocalStorage('showcase')
  // fill in the url property
  url: 'http://localhost:3000/shows'
});

