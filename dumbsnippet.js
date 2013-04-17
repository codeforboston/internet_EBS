;(function(){
var script = document.createElement('script');
script.src = 'https://internet-ebs.demo.socrata.com/resource/emergency-reports/simcity.json?$jsonp=internet_ebs_jsonp_callback';
document.head.insertBefore(script, document.head.firstChild);

window.internet_ebs_jsonp_callback = function(result){
	console.log('here');
	console.log(result);
}
})();