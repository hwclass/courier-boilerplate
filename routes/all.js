const path = require('path');
const indexRoute = require(path.join(__dirname, 'index')),
      aboutRoute = require(path.join(__dirname, 'about')),
      userRoute = require(path.join(__dirname, 'user'));

module.exports = [indexRoute, aboutRoute, userRoute];
