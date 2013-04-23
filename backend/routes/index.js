/*
 * GET home page.
 */

exports.index = function (req, res) {
	res.render('index', { title: 'Express' });
};

var statuses = {
	simcity: false,
	othercity: false
};

exports.banner = function (request, response) {
	var requested_cities = parse_comma_list(request.query.cities);
	console.log('reqcit'+requested_cities);
	for (var city in requested_cities) {
		city = requested_cities[city];
		console.log('city'+city);
		console.log('stat'+statuses[city])
		if (statuses[city]) {
			return response.sendfile('public/cities/city.js');
		}
	}

	response.send(200);
};


exports.admin = function (request, response) {
	var city = request.params.city;
	statuses[city] = !statuses[city];
	response.render('admin', {city: city, status: statuses[city]});
}

function parse_comma_list(comma_list) {
	return comma_list.split(',');
}

