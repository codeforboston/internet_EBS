
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
var i = 0;
exports.cities = function(request, response){
	i++;
  if (i% 2) response.sendfile('public/cities/city.js');
  else response.send(200);
};