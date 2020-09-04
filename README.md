![CI](https://github.com/docket-hq/passport-cisco-spark-auth/workflows/CI/badge.svg?branch=master)

# Passport - Cisco Spark

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Cisco Spark](https://www.ciscospark.com/) using the OAuth 2.0 API.

This module lets you authenticate using Cisco Spark in your Node.js applications.
By plugging into Passport, Cisco Spark authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-cisco-spark

## Usage

#### Configure Strategy

The Cisco Spark authentication strategy authenticates users using a Cisco Spark
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

    passport.use(new CiscoSparkStrategy({
        clientID: CISCO_SPARK_CLIENT_ID,
        clientSecret: CISCO_SPARK_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/spark/callback",
        passReqToCallback: true
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ sparkId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'cisco-spark'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/spark',
      passport.authenticate('cisco-spark'));

    app.get('/auth/spark/callback',
      passport.authenticate('cisco-spark', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

**Optional Parameters:**
- **passReqToCallback** (default false) - directs passport to send the request object to the verfication callback

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)
