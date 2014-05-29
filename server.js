const
    http = require( 'http' ),
    express = require( 'express' ),
    app = express(),
    morgan = require( 'morgan' );

morgan( 'dev' ); // Use express logger in 'dev' mode.

app.get( '/', function( req, res ) {
 	console.info( 'Serving request for ', req.method, req.url);
  res.send( 200, 'Hello from Travlster!' );
});

app.listen( 8888, function() {
  console.info( 'Travlster server started...' );
});
