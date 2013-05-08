
var state = {};
module.exports.toggle = function toggle(city){
	state[city] = !state[city];
};

module.exports.get_state = function get_state(city){
	return !!state[city];
};