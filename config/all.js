'use strict';

var Path = require('path');

var db = require(Path.join(__dirname, 'db'));
var views = require(Path.join(__dirname, 'views'));
var messages = require(Path.join(__dirname, 'messages'));

module.exports = {
	host : 'localhost',
	port : '8080',
	dbConnection : db.connectionStr,
	views : views,
	messages : messages
}