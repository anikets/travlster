define( function() {
  var Travlster = {};
  Travlster.init = function() {
    console.log( 'travlster.js loaded.' );
    Travlster.emberInit();
  };
  Travlster.emberInit = function() {
    console.log( 'emberInit' );
    EmberApp = Ember.Application.create();
    EmberApp.Router.map( function() {
      this.resource( 'home' );
      this.resource( 'about' );
      this.resource( 'contact-us' );
    });
  }
  return Travlster;
});
