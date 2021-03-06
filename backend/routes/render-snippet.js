var fs = require('fs');
var path = require('path');

var jade = require('jade');
var mustache = require('mustache');


var jade_templ_path = path.join(__dirname, '..', 'templates', 'widget.jade');
var jade_text = fs.readFileSync(jade_templ_path);
var jade_fn = jade.compile(jade_text);

var mustache_templ_path = path.join(__dirname, '..', 'templates', 'script.mustache');
var mustache_text = fs.readFileSync(mustache_templ_path, 'utf8');
var mustache_fn = mustache.compile(mustache_text);

var css_path = path.join(__dirname, '..', 'templates','style.css');
var css_text = fs.readFileSync(css_path, 'utf8');


module.exports = function (emergency_state) {


	return function (request, response) {
		var cities = get_city_list(request);
		if (! cities) return send_null_response(response);
		if (! is_emergency(cities)) return send_null_response(response);

		var first_city_under_duress = get_first(cities, emergency_state.get_state.bind(emergency_state)); //If multiple cities are having an emergency (!!!) just send info about the first one
		return send_emergency_response(first_city_under_duress, response);

	};

	function get_city_list(request){
		var cities = request.query.cities;
		if (! cities) return null;
		return cities.split(',');
	}

	function is_emergency(cities){
		return cities.some(emergency_state.get_state.bind(emergency_state));
	}

	function send_null_response(response){
		response.send(204);
	}

	function send_emergency_response(city, response){
		var status = emergency_state.get_state(city);
		var html = jade_fn({content: status});
		var esc_html = escape(html);
		var css = escape(css_text);
		var snippet = mustache_fn({html: esc_html, css: css});
		response.send(snippet);
	}
};

function escape(str){
	return escape_newlines(escape_quotes(str));
}

function escape_newlines(str){
	var result = str.replace(/\n/g, '\\n');
	return result.replace(/\r/g, '');
}
function escape_quotes(str){
	var result = str.replace(/'/g, "\\'");
	return result.replace(/"/g, '\\"');
}


function get_first(array, predicate) {
	var el, len = array.length;
	for (var i = 0; i < len; i++) {
		el = array[i];
		if (predicate(el)) return el;
	}
}
