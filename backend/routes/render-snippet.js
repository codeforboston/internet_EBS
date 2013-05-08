
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

var content = {
	title: "Title Of Disaster",
	text: "This is some content next to an image. This is what you need to know. This is some other stuff you need to know.",
	image: "http://placehold.it/93",
	link: "#"
}

module.exports = function(emergency_state){
	return function (request, response){
	var emergency = emergency_state.get_state('simcity');

	if (! emergency) return response.send(204);

	var html = jade_fn({content: content});
	var snippet = mustache_fn({html: html});
	response.send(snippet);
}};


