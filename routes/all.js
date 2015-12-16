'use strict';

var path = require('path');

var indexRoute = require(path.join(__dirname, 'index'));
var aboutRoute = require(path.join(__dirname, 'about'));
var userRoute = require(path.join(__dirname, 'user'));

var routes = [indexRoute, aboutRoute, userRoute];

module.exports = routes;
