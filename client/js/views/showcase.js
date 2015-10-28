var app = app || {};

app.ShowcaseView = Backbone.View.extend({
  el: '#shows',

  events: {
    'click #add': 'addShow'
  },

  // fill in with your collection setup
  initialize: function() {
    console.log('in initialize function')
    this.collection = new app.Showcase();
    this.collection.fetch({reset: true})
    this.render()
    this.listenTo(this.collection, 'add', this.renderShow)
    this.listenTo(this.collection, 'reset', this.render)
  },

  // fill in
  render: function() {
    console.log('in render function')
    this.collection.each(function(show){
      this.renderShow(show)
    }, this)
  },

  // fill in
  renderShow: function(show) {
    var view = new app.ShowView({model: show})
    console.log('in renderShow function')

    $('#shows').append(view.render().el)
  },

  // fill in
  addShow: function(event) {
    event.preventDefault();
    console.log('in addshow function')
    var data = {}

    $('#addShow').children().each(function(index, input){
      var $input = $(input)
      var validInput = input.localName !== 'input' && input.localName !== 'textarea'
      if (validInput || input.localName === 'button') { return true }
      if ($input.val() !==''){
        data[input.id] = $input.val()
      }
    })
    this.collection.create(data)
  }
})
