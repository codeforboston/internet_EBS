var codes = {
	ATL: "Atlanta, GA", 
	ORD: "Chicago, IL",
	LAX: "Los Angeles, CA",
	DFW: "Dallas Fort Worth, TX",
	JFK: "New York, NY"
};

var add_codes = function(select) {
	var $select = $(select);
	$.each(codes, function(i, val) {
		$select.append('<option value="' + i + '">' + val + '</option>');
	});
}
