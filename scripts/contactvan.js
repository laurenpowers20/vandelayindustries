$(document).ready(function() {

	$(".col2").validate( {

		rules: {
			name: {
				required: true;
				minlength: 3;
			};
			email: {
				required: true;
				email: true;
			};
		};
		messages: {
			name: {
				minlength: jQuery.format("At least {0} characters required.")
			}
		}

	});


});