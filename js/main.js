'use strict';

(function($){
	$(document).ready(function() {
		// Code


	});
})(jQuery);


function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    disableDefaultUI: true,
    center: {lat: 50.45466, lng: 30.5238}
  });
  directionsDisplay.setMap(map);

  function onChangeHandler() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };

  document.querySelector('.get-dir').addEventListener('click', onChangeHandler);
}


function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: document.getElementById('start').value,
    destination: document.getElementById('end').value,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}