module.exports = {
  method: 'GET',
  path: '/about',
  handler: (request, reply) => {
    var data = {
      title: 'About View'
    };
    return reply.view('about', data);
  },
  config : {
    state: {
      parse: false, // parse and store in request.state
      failAction: 'ignore' // may also be 'ignore' or 'log'
    }
  }
};