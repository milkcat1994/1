function initMap() {
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 37.5, lng: 127.05}
  });
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('right-panel'));

  var control = document.getElementById('floating-panel');
  control.style.display = 'block';
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

  var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  document.getElementById('start').addEventListener('change', onChangeHandler);
  document.getElementById('end').addEventListener('change', onChangeHandler);
  document.getElementById('tmode').addEventListener('change', onChangeHandler);
  document.getElementById('seek').addEventListener('click', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var tmode = document.getElementById('tmode').value;
  directionsService.route({
    origin: start,
    destination: end,
    travelMode: tmode
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    //} else {
    //  window.alert('Directions request failed due to ' + status);
    }
  });
}