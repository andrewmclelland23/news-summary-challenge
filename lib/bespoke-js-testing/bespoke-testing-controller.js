var results = {
  list: [],
  add: function(description, result) { this.list.push({'desc': description, 'result': result }) },
  render: function() { document.getElementById('tests').innerHTML = render.toHTML(this.list) }
};
