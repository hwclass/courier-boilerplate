'use strict';

module.exports = {
  method: 'GET',
  path: '/about',
  handler: function(request, reply) {
    var data = {
      title: 'About View'
    };
    return reply.view('about', data);
  }
};