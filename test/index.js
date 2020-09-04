const mocha = require('mocha');
const should = require('should');
const CiscoSparkStrategy = require('../index').Strategy;

describe( 'passport-cisco-spark', function() {
    describe('module', function() {  
        it('should export class', function() {
            CiscoSparkStrategy.Strategy.should.be.an.instanceOf(Object);
        })
    })
  });

describe('CiscoSparkStrategy', function() {
    describe('strategy param tests', function () {
        it('should return false for passReqToCallback', function () {
            const strategy = new CiscoSparkStrategy({
                test: true,
                consumerKey: 'ABC123',
                consumerSecret: 'secret'
            }, function () { });

            strategy._passReqToCallback.should.equal(false);
        });

        it('should return true for passReqToCallback', function () {
            const strategy = new CiscoSparkStrategy({
                test: true,
                consumerKey: 'ABC123',
                consumerSecret: 'secret',
                passReqToCallback: true
            }, function () { });

            strategy._passReqToCallback.should.equal(true);
        });

        it('should return prod oauth urls', function () {
            const strategy = new CiscoSparkStrategy({
                test: true,
                consumerKey: 'ABC123',
                consumerSecret: 'secret'
            }, function () { });

            strategy.userAuthorizationURL.should.equal('https://api.ciscospark.com/v1/authorize');
            strategy.accessTokenURL.should.equal('https://api.ciscospark.com/v1/access_token');
        });

        it('should return options oauth urls', function () {
            const strategy = new CiscoSparkStrategy({
                test: true,
                consumerKey: 'ABC123',
                consumerSecret: 'secret',
                authorizationURL: 'https://api.ciscospark.com/v2/authorize',
                tokenURL: 'https://api.ciscospark.com/v2/access_token'
            }, function () { });

            strategy.userAuthorizationURL.should.equal('https://api.ciscospark.com/v2/authorize');
            strategy.accessTokenURL.should.equal('https://api.ciscospark.com/v2/access_token');
        });
    });
})