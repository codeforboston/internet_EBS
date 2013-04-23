
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
var sim_emergency = false;
exports.cities = function(request, response){
  if (sim_emergency) response.sendfile('public/cities/city.js');
  else response.jsonp(null);
};
exports.admin = function(request, response){
	sim_emergency = !sim_emergency;
	response.render('admin', {emergency: sim_emergency});
}


