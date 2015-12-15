'use strict';

module.exports = {
  method: 'GET',
  path: '/user/{userId}',
  handler: function(request, reply) {
    var data = {
      title : 'User View',
      user : request.params.userId
    };
    return reply.view('user', data);
  },
  config : {
  	state: {
        parse: false, // parse and store in request.state
		failAction: 'ignore' // may also be 'ignore' or 'log'
	}
  }
};