$('document').ready(function () {

	$.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
		if (status == 'OK') {
			$('#api_status').addClass('available');
		} else {
			$('#api_status').removeClass('available');
		}
	}

	$.ajax({
		url: 'http://0.0.0:5001/api/v1/places_search/',
		type: 'POST',
		data: '{}',
		contentType: 'application/json',
		dataType: 'json',
		success: loadPlaces
	});

	$('button').click(function () {
		$.ajax({
			url: 'http://0.0.0.0:5001/api/v1/places_search/',
			type: 'POST',
			data: JSON.stringify({ amenities: Object.keys(ameneties) }),
			contentType: 'application/json',
			dataType: 'json',
			success: loadPlaces
		});
	});
	

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

function loadPlaces (data) {
	$('section.places').empty();
	$('section.places').append(data.map(place => {
		return `<article>
		<div class="title">
			<h2>${place.name}</h2>
			<div class="price_by_night">
				${place.price_by_night}
			</div>
		</div>
		<div class="information">
			<div class="max_guest">
				<i class="fa fa-users fa-3x" aria-hidden="true"></i>
				<br />
				${place.max_guest} Guests
			</div>
			<div class="number_rooms">
				<i class="fa fa-bed fa-3x" aria-hidden="true"></i>
				<br />
				${place.number_rooms} Bedrooms
			</div>
			<div class="number_bathrooms">
				<i class="fa fa-bath fa-3x" aria-hidden="true"></i>
				<br />
				${place.number_bathrooms} Bathroom
			</div>
		</div>
		<div class="description">
			${place.description}
		</div>
		</article>`;
	}));
}
