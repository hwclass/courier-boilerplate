'use strict';

//Import the dependencies to struct the server-side
const hapi = require('hapi'),
      path = require('path'),
      logging = require('good'),
      handlebars = require('handlebars');

const clientDir = path.join(__dirname, './client');

//Import all config constants
const config = require(path.join(__dirname, 'config/all'));

//Import all the routes for API endpoints
const routes = require(path.join(__dirname, 'routes/all'));

path.join(__dirname, '../client/src');

//Put the current view declerations into server instance
const server = new hapi.Server({
	app : {
		views : config.views
	}
});

//Connection alias for the hapi server instance
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
  path: path.join(__dirname, server.settings.app.views.path),
  layoutPath: path.join(__dirname, server.settings.app.views.layoutPath),
  layout: server.settings.app.views.layoutFile,
  helpersPath : path.join(__dirname, server.settings.app.views.helpersPath),
  partialsPath: path.join(__dirname, server.settings.app.views.partialsPath)
});

server.route({
  method: 'GET',
  path: '/cdn/{fileName}',
  handler: (request, reply) => {
    reply.file('./cdn/' + request.params.fileName);
  },
  config : {
    state: {
      parse: false, // parse and store in request.state
      failAction: 'ignore' // may also be 'ignore' or 'log'
    }
  }
});

server.route({
  method: 'GET',
  path: '/{params*}',
  handler: {
      directory: { path: clientDir }
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
  register: logging,
  options: {
    reporters: [{
      reporter: require('good-console'),
      events: {
        response: '*',
        log: '*'
      }
    }]
  }
}, (err) => {
  if (err) {
    throw server.settings.app.messages.error.DEFAULT + '' + err;
	}
	//Begin starting the server instance
	server.start(() => {
	  server.log('info', 'Server running at: ' + server.info.uri);
  });
});
