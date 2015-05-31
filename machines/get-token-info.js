module.exports = {


  friendlyName: 'Get token info',


  description: 'Get information using given Access Token',


  cacheable: true,


  sync: false,


  idempotent: false,


  inputs: {
    access_token: {
      example: '',
      description: ''
    },

    id_token: {
      example: '',
      description: ''
    },

    token_handle: {
      example: '',
      description: ''
    },

    fields: {
      example: 'access_type,audience,expires_in,issued_to,scope,token_handle,user_id,verified_email,email',
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
