module.exports = {


  friendlyName: 'Get user info',


  description: '',


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