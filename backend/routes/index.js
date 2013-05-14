
var emergency_state = require('../controllers').emergency_state;

exports.index = function (req, res) {
	res.render('index', { title: 'Express' });
};

exports.render_snippet = require('./render-snippet.js')(emergency_state);

exports.admin_get = function (request, response) {
	var city = request.params.city;
	var status = emergency_state.get_state(city);
	response.render('admin', {city: city, status: status});
}

exports.admin_post = function(request, response) {
	var city = request.params.city;
	var status = request.body;
	emergency_state.set(city, status);
	exports.admin_get(request, response);
}