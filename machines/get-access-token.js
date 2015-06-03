'use strict';

var _ = require('lodash');
var google = require('googleapis');

module.exports = {


  friendlyName: 'Get access token',


  description: 'Getting access token using authorization token that Google provided you with',


  cacheable: true,


  sync: false,


  idempotent: false,


  inputs: {

    clientId: {
      example: '284875887706-4gku5u85022s3cbsde5rpvps88ekcfql.apps.googleusercontent.com',
      description: 'OAuth2 Client ID',
      required: true,
      whereToGet: {
        url: 'https://console.developers.google.com',
        description: 'You can gengerate new Client ID and secret in Google Developer console'
      }
    },

    clientSecret: {
      example: 'SomeSuperSecretKey',
      description: 'OAuth2 Client Secret key',
      required: true,
      whereToGet: {
        url: 'https://console.developers.google.com',
        description: 'You can gengerate new Client ID and secret in Google Developer console'
      }
    },

    redirectUrl: {
      example: 'http://localhost:1337/user/google/login',
      description: 'The callback URL where the end user will be redirected after visiting the login URL returned by this machine',
      required: true
    },

    code: {
      example: 'someSuperCodeYouGotFromGoogle',
      description: 'With the code returned, you can ask for an access token',
      required: true
    }
  },


  exits: {

    success: {
      variableName: 'result',
      description: 'Done.',
    },

    invalidRequest: {
      variableName: 'err',
      description: 'Triggers if some of input variables are wrong.'
    },

    invalidToken: {
      variableName: 'err',
      description: 'Triggers if code is wrong.'
    }

  },


  fn: function(inputs, exits) {
    var oauth2Client = require('../lib/getOAuth2Client')(inputs);

    oauth2Client.getToken(inputs.code, function(err, tokens) {
      if (err) {
        if (!err.code) {
          return exits.error(err);
        }
        console.log(err);
        switch(err.code) {
          case 400:
            return exits.invalidRequest(err);
            break;
          case 401:
            return exits.invalidToken(err);
            break;
          default:
            return exits.error(err);
            break;
        }
        console.log(err);
      }
      return exits.success(tokens);
    });
  }

};
