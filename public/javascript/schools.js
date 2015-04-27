function initialize() {
	var mapOptions = {
		center: {
			lat: 51.540115,
			lng: -0.9042651
		},
		zoom: 11
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var marker;
	var infowindow = new google.maps.InfoWindow();
	$.get("/api/schools", function (schools) {
		$.each(schools, function (index, school) {
			marker = new google.maps.Marker({
				icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
				position: {
					lat: school.lat,
					lng: school.lng
				},
				title: school.name
			});
			google.maps.event.addListener(marker, 'click', (function (marker, index) {
				return function () {
					infowindow.setContent('<h1>' + school.name + '</h1><p>0' + school.telStd + school.telNum + '</p><p>' + school.website + '</p>');
					infowindow.open(map, marker);
				}
			})(marker, index));
			marker.setMap(map);
		});
	});
}
google.maps.event.addDomListener(window, 'load', initialize);
