module.exports = function(emergency_state) {
	return {
		get: get,
		post: post,
		clear: clear
	};


	function clear(request,response){
		var city = request.params.city;
		emergency_state.set(city, false);
		get(request, response);
	}

	function get(request, response) {
		var city = request.params.city;
		var status = emergency_state.get_state(city);
		response.render('admin', {city: city, status: status});
	}

	function post(request, response) {
		var city = request.params.city;
		var status = request.body;
		emergency_state.set(city, status);
		get(request, response);
	}
};