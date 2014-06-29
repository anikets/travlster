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
      this.resource( 'logs', function() {
        this.resource( 'log', { path: ':log_id' });
      });
    });
    EmberApp.LogsRoute = Ember.Route.extend({
      model: function() {
        return TravlsterModel.pastLogs;
      }
    });

    EmberApp.BusesRoute = Ember.Route.extend({
      model: function() {
        return TravlsterModel.busStops;
      }
    });
  }
  return Travlster;
});




/* Fixtures */
var TravlsterModel = {};

TravlsterModel.pastLogs = [
  {
    "id": "1",
    "startDateTime": "1403638302644",
    "endDateTime": "1403638303644",
    "waypoints": ["1","2","3"],
    "type": "car"
  },
  {
    "id": "2",
    "startDateTime": "1403638312644",
    "endDateTime": "1403638314644",
    "waypoints": ["1,1","2,2","3,3"], 
    "type": "walk"
  }
];

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
