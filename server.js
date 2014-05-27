const
    http = require( 'http' );

http.createServer( function( req, res ) {
	console.log( 'Travlster server started...' );
	res.writeHead( 200 );
	res.end( "Hello from Travlster server!\n" );
}).listen( 8888 );