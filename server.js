'use strict';

const
  http = require( 'http' ),
  express = require( 'express' ),
  serveFavicon = require( 'serve-favicon' ),
  cookieParser = require( 'cookie-parser' ),
  session = require( 'express-session' ),
  passport = require( 'passport' ),
  app = express(),
  redisClient = require( 'redis' ).createClient(),
  RedisStore = require( 'connect-redis' )( session ),
  GoogleStrategy = require( 'passport-google' ).Strategy,
  morgan = require( 'morgan' ),
  log = require( 'npmlog' ),
  fs = require( 'fs' );

// Use this: https://www.npmjs.org/package/html-minifier

morgan( 'dev' ); // Use express logger in 'dev' mode.

app.use( cookieParser());
app.use( session({
  store: new RedisStore({ client: redisClient }),
  secret: 'Travlster super secret'
}));
app.use( express.static( __dirname + '/static' ));
app.use( express.static( __dirname + '/bower_components' ));
app.use( passport.initialize());
app.use( passport.session());
app.use( serveFavicon( __dirname + '/static/favicon.ico' ));
app.use( morgan( 'dev' ));

app.set('views', __dirname);

redisClient
  .on( 'ready', function() { log.info( 'Redis', 'ready' );})
  .on( 'error', function( err ) { log.error( 'Redis', err.message );});

passport.serializeUser( function( user, done ) {
  done( null, user.identifier);
});
passport.deserializeUser( function( id, done ) {
  done( null, { identifier: id });
});
passport.use( new GoogleStrategy({
  returnURL: 'http://localhost:8888/auth/google/return',
  realm: 'http://localhost:8888/'
},
function( identifier, profile, done ) {
  profile.identifier = identifier;
  log.info( profile.name.givenName );
  return done(null, profile);
}));

app.get('/auth/google/:return?', passport.authenticate('google', { successRedirect: '/authed' }));
app.get('/auth/logout', function( req, res ){
  req.logout();
  res.redirect('/');
});

app.get( '/api/:name', function( req, res ) {
  res.json( 200, { "hello": req.params.name });
});
app.get( '/', function( req, res ) {
  log.info( 'Serving request for ', req.method, req.url);
  res.send( 200, 'Hello from Travlster!' );
});
app.get( '/authed', function( req, res ) {
  fs.readFile( './static/authed.html', function( err, data ) {
    if ( err ) log.error( err )
    else {
      res.send( 200, data.toString());
    }
  });
});

app.listen( 8888, function() {
  log.info( 'Travlster server started...' );
});
