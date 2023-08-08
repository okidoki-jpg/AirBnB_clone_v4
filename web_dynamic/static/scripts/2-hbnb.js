$('document').ready(function () {

	$.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
		if (status == 'OK') {
			$('#api_status').addClass('available');
		} else {
			$('#api_status').removeClass('available');
		}
	}
	let ameneties = {};
	$('input[type=checkbox]').change(function () {
		if ($(this).is(':checked')) {
			ameneties[$(this).attr('data-id')] = $(this).attr('data-name');
		} else {
			delete ameneties[$(this).attr('data-id')];
		}
		$('.amenities h4').text(Object.values(ameneties).join(', '));
	});
});

