'use strict';

//Import the dependencies to struct the server-side
var Hapi = require('hapi');
var Path = require('path');
var Logging = require('good');
var Handlebars = require('handlebars');

//Import all config constants
var config = require(Path.join(__dirname, 'config/all'));

console.dir(config);

//Import all the routes for API endpoints
var routes = require(Path.join(__dirname, 'routes/all'));

//Put the current view declerations into server instance
var server = new Hapi.Server({
	app : {
		views : config.views
	}
});

//Connection alias for the Hapi server instance
server.connection({
	host : config.host,
	port : config.port,
	app : config
});

//Initialize routes for the endpoints
server.route(routes);

//Set the variables for view instances
server.views({
  engines: {
    html: require('handlebars')
  },
  path: Path.join(__dirname, server.settings.app.views.path),
  layoutPath: Path.join(__dirname, server.settings.app.views.layoutPath),
  layout: server.settings.app.views.layoutFile,
  helpersPath : Path.join(__dirname, server.settings.app.views.helpersPath),
  partialsPath: Path.join(__dirname, server.settings.app.views.partialsPath)
});

server.route({
  method: 'GET',
  path: '/cdn/{fileName}',
  handler: function (request, reply) {
  	console.log(request.params.fileName);
    reply.file('./cdn/' + request.params.fileName);
  },
  config : {
    state: {
      parse: false, // parse and store in request.state
      failAction: 'ignore' // may also be 'ignore' or 'log'
    }
  }
});

//Register some logging
server.register({
  register: Logging,
  options: {
    reporters: [{
      reporter: require('good-console'),
      events: {
        response: '*',
        log: '*'
      }
    }]
  }
}, function (err) {
  if (err) {
    throw server.settings.app.messages.error.DEFAULT + '' + err;
	}
	//Begin starting the server instance
	server.start(function () {
	  server.log('info', 'Server running at: ' + server.info.uri);
  });
});