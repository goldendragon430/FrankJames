function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 50.460103211831196, lng: -104.63051829025102};
    
    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}