function initialize() {
	var mapOptions = {
		center: {
			lat: 51.540115,
			lng: -0.9042651
		},
		mapTypeId: google.maps.MapTypeId.TERRAIN,
		zoom: 12
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var marker;
	var infowindow = new google.maps.InfoWindow();
	$.get("/api/schools", function (schools) {
		$.each(schools, function (index, school) {
			var icon;
			if (school.type === 'Other Independent School') {
				icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
			} else {
				icon = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
			}
			marker = new google.maps.Marker({
				icon: icon,
				position: {
					lat: school.lat,
					lng: school.lng
				},
				title: school.name
			});
			google.maps.event.addListener(marker, 'click', (function (marker, index) {
				return function () {
					var content = '<h1>' + school.name + '</h1><p>0' + school.telStd + school.telNum + '</p>';
					if (school.website) {
						content = content + '<p><a href="' + school.website + '">' + school.website + '</a></p>';
					}
					infowindow.setContent(content);
					infowindow.open(map, marker);
				}
			})(marker, index));
			marker.setMap(map);
		});
	});
}
google.maps.event.addDomListener(window, 'load', initialize);
