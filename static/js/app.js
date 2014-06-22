requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: '/jquery/dist/jquery.min',
    bootstrap: '/bootstrap/dist/js/bootstrap.min',
    typeahead: '/typeahead.js/dist/typeahead.jquery.min',
    handlebars: '/handlebars/handlebars',
    ember: '/ember/ember',
    app: 'app'
  },
  shim: {
    'ember': [ 'jquery', 'handlebars' ],
    'travlster': [ 'ember' ]
  }
});
require(['travlster'], function(Travlster) {
  Travlster.init();
});
