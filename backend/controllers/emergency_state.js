var boston_content = {
	city: 'Boston',
	title: "Title Of Disaster",
	text: "This is some content next to an image. This is what you need to know. This is some other stuff you need to know.",
	image: "http://placehold.it/93",
	link: "#"
};

var simcity_content = {
	city: 'SimCity',
	title: "Title Of Disaster",
	text: "This is some content next to an image. This is what you need to know. Sometimes you need to know some other things.",
	image: "http://placehold.it/93",
	link: "#"
};


var state = {};
module.exports.toggle = function toggle(city){
	if (city === 'boston'){
		 if (state.boston) return state.boston = false;
		 else return state.boston = boston_content;
	}
	if (city === 'simcity'){
		if (state.simcity) return state.simcity = false;
		else return state.simcity = simcity_content;
	}
	console.log('nope');
	state[city] = !state[city];
};

module.exports.set = function set(city, val){
	if (typeof val === 'object'){
		val.city = city;
		val.image = "http://placehold.it/93"
	}
	state[city] = val;
}

module.exports.get_state = function get_state(city){
	return state[city];
};