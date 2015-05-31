module.exports = {


  friendlyName: 'Get token info',


  description: 'Get information using given Access Token',


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
