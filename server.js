var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./client/src/config')[env];

app.set('views', config.rootPath + '/client/src/apps');

/*app.use(bodyParser.json());*/ 

/*
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));
*/

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT


app.use(express.static(__dirname + '/client')); // set the static files location /public/img will be /img for users
app.use('/libs', express.static(__dirname + 'node_modules'));

// routes ==================================================
require('./client/src/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(config.port);

console.log('Server running on port : ' + config.port + ' ...');
