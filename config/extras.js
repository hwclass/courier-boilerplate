'use strict';

var state = state || {}; 
module.exports = state = {
	parse: false, // parse and store in request.state
	failAction: 'ignore' // may also be 'ignore' or 'log'
}