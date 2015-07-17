'use strict';

module.exports = {
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    var data = {
      title: 'Index View'
    };
    return reply.view('index', data);
  }
};