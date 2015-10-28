var app = app || {};

app.ShowView = Backbone.View.extend({
  tagName: 'div',
  className: 'showContainer',
  // fill in the template property for the #showTemplate
  initialize: function() {
    this.template = _.template($('#showTemplate').html())
    this.render();
  },

  // fill in the click events for delete and update buttons
  events: {
    'click #delete': 'deleteShow',
    'click #edit': 'showForm',
    'click #update': 'updateShow'
  },

  render: function() {
    // fill in the render function
    this.$el.html(this.template(this.model.attributes))
    return this;
  },

  // fill in
  deleteShow: function() {
    this.model.destroy();
    this.remove();
  },

  showForm: function(event) {
    event.preventDefault()
    // **************THEY BOTH WORK!!!! *********************
    this.$(editShow).removeClass('hidden')
    this.$('#edit').addClass('hidden')
    // **********************YAYAY!!!!!!!!!!!!!!*************
  },

  updateShow: function(event) {
    event.preventDefault()

    var data = $('#editShow')
    // debugger
      this.$('#editShow').children().each(function(index, input){
      var $input = $(input)
      var validInput = input.localName !== 'input' && input.localName !== 'textarea'
      if (validInput || input.localName === 'button') { return true }
      if ($input.val() !==''){
        data[input.id] = $input.val()
      }
    })
    // this.model.set(data)
    this.model.save(data)
    this.$(editShow).addClass('hidden')
    this.$('#edit').removeClass('hidden')
    this.render()
  }
  // EDITING A SHOW: IMPLEMENTATION CONSIDERATIONS
  // - The view needs a way to know whether it's in editing mode or not
  // - Based on this information, the template should show a form or text content
  // - The buttons on the series should be different based on whether the form is showing
  // - You can use <% if(statement) %> in Underscore. You need to close with <% } %>
  // - Write a function to serialize the update form
  // - In that function, save your updated data using the set function on models
  // - Don't forget to save and render the view again with the updated info
})
