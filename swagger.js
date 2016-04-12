const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');
const path = require('path');

//Import all the routes for API endpoints
const routes = require(path.join(__dirname, 'routes/all'));

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 3001
});

const options = {
  info: {
    'title': 'Test API Documentation',
    'version': Pack.version,
  }
};

server.register([
  Inert,
  Vision,
  {
    'register': HapiSwagger,
    'options': options
}], (err) => {
  server.start( (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Server running at:', server.info.uri);
    }
  });
});

server.route(routes);