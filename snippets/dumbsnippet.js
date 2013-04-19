;(function(){
	var global = this;
	global.onload = thing;

	function thing(){
		var script = document.createElement('script');
		script.src = 'https://internet-ebs.demo.socrata.com/resource/emergency-reports/simcity.json';
		document.body.appendChild(script);
	}

	window.internet_ebs_jsonp_callback = function(result){
		console.log(result);
	}
})();