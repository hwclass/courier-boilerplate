'use strict';

module.exports = {
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    var data = {
      title: 'Index View'
    };
    return reply.view('index', data);
  },
  config : {
  	state: {
        parse: false, // parse and store in request.state
		failAction: 'ignore' // may also be 'ignore' or 'log'
	}
  }
};