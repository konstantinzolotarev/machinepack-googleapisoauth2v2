module.exports = {


  friendlyName: 'Get OAuth2 client',


  description: 'Get OAuth2 client',


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
    }
  },


  exits: {

    success: {
      variableName: 'result',
      description: 'Done.',
    }

  },


  fn: function(inputs, exits) {
    return exits.success(require('../lib/getOAuth2Client')(inputs));
  }

};
