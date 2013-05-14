
var emergency_state = require('../controllers').emergency_state;

exports.index = function (req, res) {
	res.render('index', { title: 'Express' });
};

exports.render_snippet = require('./render-snippet.js')(emergency_state);

var admin = require('./admin.js')(emergency_state);
exports.admin_get = admin.get;
exports.admin_post = admin.post;
exports.admin_clear = admin.clear;
