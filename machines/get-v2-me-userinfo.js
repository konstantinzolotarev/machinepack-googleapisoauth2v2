module.exports = {


  friendlyName: 'Get v2 me userinfo',


  description: 'Get details for authorized user',


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
