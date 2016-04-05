'use strict';

const Path = require('path');

const db = require(Path.join(__dirname, 'db'));
const views = require(Path.join(__dirname, 'views'));
const messages = require(Path.join(__dirname, 'messages'));
const extras = require(Path.join(__dirname, 'extras'));

module.exports = {
  host : 'localhost',
  port : '3000',
  dbConnection : db.connectionStr,
  views : views,
  messages : messages
}