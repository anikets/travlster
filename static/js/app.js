requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: '/jquery/dist/jquery.min',
    bootstrap: '/bootstrap/dist/js/bootstrap.min',
    typeahead: '/typeahead.js/dist/typeahead.jquery.min',
    handlebars: '/handlebars/handlebars',
    app: 'app'
  },
  shim: {
    'travlster': [ 'jquery' ]
  }
});
require(['travlster'], function(Travlster) {
  Travlster.init();
});
