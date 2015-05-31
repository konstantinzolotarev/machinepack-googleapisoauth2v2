module.exports = {


  friendlyName: 'Get cert for OpenId connect',


  description: 'Get Cert information for OpenId connect',


  cacheable: false,


  sync: false,


  idempotent: false,


  inputs: {

  },


  exits: {

    success: {
      variableName: 'result',
      description: 'Done.',
    },

  },


  fn: function (inputs,exits
  /**/) {
    return exits.success();
  },



};
