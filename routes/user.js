'use strict';

module.exports = {
  method: 'GET',
  path: '/{user}',
  handler: function(request, reply) {
    var data = {
      title : 'User View',
      user : request.params.user
    };
    return reply.view('user', data);
  }
};