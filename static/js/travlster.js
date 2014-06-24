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
      this.resource( 'dashboard' );
      this.resource( 'buses' );
      this.resource( 'trains' );
    });
  }
  return Travlster;
});

var TravlsterModel = {};

TravlsterModel.busStops = [
  {
    "name": "Bus Stop 1",
    "coords": "",
    "distanceFromCurrentPosition": "100",  // Distance in meter.
    "waypoints": [
      {"name": "Origin", "coords": ""},
      {"name": "Waypoint 1", "coords": ""},
      {"name": "Waypoint 2", "coords": ""},
      {"name": "Waypoint 3", "coords": ""},
      {"name": "Destination", "coords": ""}],
    "route": ""  // Google directions array.
  },
  {
    "name": "Bus Stop 2",
    "coords": "",
    "distanceFromCurrentPosition": "200",  // Distance in meter.
    "waypoints": [
      {"name": "Origin", "coords": ""},
      {"name": "Waypoint 1", "coords": ""},
      {"name": "Waypoint 2", "coords": ""},
      {"name": "Destination", "coords": ""}],
    "route": ""  // Google directions array.
  }
];

TravlsterModel.rlyStations = [
  {
    "name": "Railway Station 1",
    "coords": "",
    "distanceFromCurrentPosition": "1000",  // Distance in meter.
    "waypoints": [
      {"name": "Origin", "coords": ""},
      {"name": "Waypoint 1", "coords": ""},
      {"name": "Waypoint 2", "coords": ""},
      {"name": "Waypoint 3", "coords": ""},
      {"name": "Destination", "coords": ""}],
    "route": ""  // Google directions array.
  },
  {
    "name": "Railway Station 2",
    "coords": "",
    "distanceFromCurrentPosition": "1200",  // Distance in meter.
    "waypoints": [
      {"name": "Origin", "coords": ""},
      {"name": "Waypoint 1", "coords": ""},
      {"name": "Waypoint 2", "coords": ""},
      {"name": "Destination", "coords": ""}],
    "route": ""  // Google directions array.
  }
];
