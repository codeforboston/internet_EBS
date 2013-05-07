
var fs = require('fs');
var path = require('path');
var jade = require('jade');

exports.index = function (req, res) {
	res.render('index', { title: 'Express' });
};

exports.render_snippet = require('./render-snippet.js');

var statuses = {
	simcity: false,
	othercity: false
};

exports.admin = function (request, response) {
	var city = request.params.city;
	statuses[city] = !statuses[city];
	response.render('admin', {city: city, status: statuses[city]});
}
