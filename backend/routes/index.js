
var emergency_state = require('../controllers').emergency_state;

exports.index = function (req, res) {
	res.render('index', { title: 'Express' });
};

exports.render_snippet = require('./render-snippet.js')(emergency_state);

exports.admin = function (request, response) {
	var city = request.params.city;
	emergency_state.toggle(city);
	var status = emergency_state.get_state(city);
	response.render('admin', {city: city, status: status});
}
