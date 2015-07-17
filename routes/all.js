'use strict';

var Path = require('path');

var indexRoute = require(Path.join(__dirname, 'index'));
var aboutRoute = require(Path.join(__dirname, 'about'));
var userRoute = require(Path.join(__dirname, 'user'));

var routes = [indexRoute, aboutRoute, userRoute];

module.exports = routes;