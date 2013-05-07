/*
 * GET home page.
 */

exports.index = function (req, res) {
	res.render('index', { title: 'Express' });
};

exports.direct = function(request, response){
	var content = {
		title: "Title Of Disaster",
		text: "This is some content next to an image. This is what you need to know. This is some other stuff you need to know.",
		image: "http://placehold.it/93",
		link: "#"
	}
	response.render('banner/page', {content: content});
}

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

