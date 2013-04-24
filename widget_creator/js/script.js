var iebs =  {
        //Populate select options
        add_opts: function(select, opts) {
		$.each(opts, function(i, val) {
			$(select).append('<option value="' + i + '">' + val + '</option>');
		});
        },
        //Generate script
        get_script: function(codes, url) {
		return '&lt;script type="text/javascript" src="' + url + '?' + codes + '"&gt;&lt;/script&gt;';
        },
	update_script: function(select, text, url) {
		var codes = $(select).val();
		console.log(select, codes);
		if (codes) {
			$(text).html(this.get_script(codes.join('+'), url));
		} else {
			$(text).html('');
		}
	}
};

(function() {
	iebs.add_opts('#cities', config.cities);
        $('#cities').select2({
                placeholder: config.placeholder,
                closeOnSelect: false
        }).change(function() {
                iebs.update_script(this, '#code', config.url);
        });
})();
