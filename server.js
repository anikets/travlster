'use strict';

const
  http = require( 'http' ),
  express = require( 'express' ),
  serveFavicon = require( 'serve-favicon' ),
  app = express(),
  morgan = require( 'morgan' );

morgan( 'dev' ); // Use express logger in 'dev' mode.

app.use( express.static( __dirname + '/static' ));
app.use( express.static( __dirname + '/bower_components' ));
app.use( serveFavicon( __dirname + '/static/favicon.ico' ));
app.use( morgan( 'dev' ));

app.get( '/', function( req, res ) {
 	console.info( 'Serving request for ', req.method, req.url);
  res.send( 200, 'Hello from Travlster!' );
});

app.listen( 8888, function() {
  console.info( 'Travlster server started...' );
});
