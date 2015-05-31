'use strict';

var _ = require('lodash');
var google = require('googleapis');
var oauth2 = google.auth.OAuth2;

module.exports = {


  friendlyName: 'Get cert for OpenId connect',


  description: 'Get Cert information for OpenId connect',


  cacheable: true,


  sync: false,


  idempotent: false,


  inputs: {
    fields: {
      example: 'keys(alg,e,kid,kty,use,n)',
      description: 'Selector specifying which fields to include in a partial response.'
    }
  },


  exits: {

    success: {
      variableName: 'result',
      description: 'Done.',
    },

  },


  fn: function(inputs, exits) {
    return exits.success();
  },



};
