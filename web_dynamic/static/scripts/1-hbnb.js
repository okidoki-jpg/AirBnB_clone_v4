$('document').ready(function () {
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
