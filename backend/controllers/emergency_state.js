

var state = {};

module.exports.set = function set(city, val){
	if (typeof val === 'object'){
		val.city = city;
		val.image = "http://placehold.it/93"
		val.last_updated = new Date().toString()
	}
	state[city] = val;
}

module.exports.get_state = function get_state(city){
	return state[city];
};