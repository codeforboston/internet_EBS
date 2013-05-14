
var fs = require('fs');
var path = require('path');

var jade = require('jade');
var mustache = require('mustache');


var jade_templ_path = path.join(__dirname, '..','templates', 'widget.jade');
var jade_text = fs.readFileSync(jade_templ_path);
var jade_fn = jade.compile(jade_text);

var mustache_templ_path = path.join(__dirname, '..', 'templates','script.mustache');
var mustache_text = fs.readFileSync(mustache_templ_path, 'utf8');
var mustache_fn = mustache.compile(mustache_text);



module.exports = function(emergency_state){


	return function (request, response){
	var cities = request.query.cities;
	if(!cities) return response.send(204);

	cities = cities.split(',');
	var emergencity = get_first(cities, emergency_state.get_state.bind(emergency_state));
	var status = emergency_state.get_state(emergencity);

	if (! status) return response.send(204);

	var html = jade_fn({content: status});
	var snippet = mustache_fn({html: html});
	response.send(snippet);
}};

function get_first(array, predicate){
	var el, len = array.length;
	for (var i = 0; i < len; i++){
		el = array[i];
		if (predicate(el)) return el;
	}
}
