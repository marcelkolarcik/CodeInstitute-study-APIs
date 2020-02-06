 function initMap(){
            var map = new google.maps.Map(document.getElementById("map"),{
                zoom : 6,
                center: {
                   lat:  51.903614, lng:  -8.468399  // Cork
                }
            });

            var labels = 'ABCDEFGHIJKLMOPQRSXYZW';
            var locations = [
                { lat:  51.903614, lng:  -8.468399}, // Cork
                { lat: 53.350140, lng: -6.266155}, // Dublin
                { lat:52.668018, lng: -8.630498}, // Limerick
                 { lat: 53.270962, lng: -9.062691} //Galway
            ];

            var markers = locations.map(function(location,i){
                return new google.maps.Marker({
                    position:location,
                    label:labels[i % labels.lenght]
                });
            });

             // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    
        }