'use strict';

var _ = require('lodash');
var google = require('googleapis');
var oauth2Client;

/**
 * Creates a new OAuth2Client or returning existing one.
 *
 * @param  {Object}  inputs
 * @param  {Boolean=} [isNewClient]
 * @return {google.auth.OAuth2}
 */
module.exports = function(inputs, isNewClient) {
  if (_.isBoolean(isNewClient) && isNewClient) {
    return new google.auth.OAuth2(inputs.clientId, inputs.clientSecret, inputs.redirectUrl);
  }
  if (!oauth2Client) {
    oauth2Client = new google.auth.OAuth2(inputs.clientId, inputs.clientSecret, inputs.redirectUrl);
  }
  return oauth2Client;
};
