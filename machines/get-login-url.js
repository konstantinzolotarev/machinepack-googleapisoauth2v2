'use strict';

var _ = require('lodash');
var google = require('googleapis');

module.exports = {


  friendlyName: 'Get login URL',


  description: 'Generating an authentication URL',


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

    scope: {
      example: ['https://www.googleapis.com/auth/plus.me'],
      description: 'List of urls that you need to asks permissions for',
      typeclass: 'array'
    },

    accessType: {
      example: 'offline',
      description: "'online' (default) or 'offline' (gets refresh_token)"
    }
  },


  exits: {

    success: {
      example: 'https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=123&redirect_uri=123',
      variableName: 'result',
      description: 'Returns URL to ask for permissions from a user to retrieve an access token, you redirect them to a consent page. ',
    }

  },


  fn: function(inputs, exits) {
    var params = {};
    if (inputs.scope && _.isArray(inputs.scope)) {
      params.scope = inputs.scope;
    };
    if (inputs.accessType && _.isString(inputs.accessType)) {
      params.scope = inputs.accessType;
    }

    try {
      var oauth2Client = require('../lib/getOAuth2Client')(inputs);
      return exits.success(oauth2Client.generateAuthUrl(params || {}));
    } catch(err) {
      return exits.error(err);
    }
  }

};
