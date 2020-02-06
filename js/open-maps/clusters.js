var tiles = L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="//openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
});
//   { lat:  51.903614, lng:  -8.468399}, // Cork
//                 { lat: 53.350140, lng: -6.266155}, // Dublin
//                 { lat:52.668018, lng: -8.630498}, // Limerick
//                  { lat: 53.270962, lng: -9.062691} //Galway
var map = L.map('map', {
  center: L.latLng( 53.270962, -9.062691),
  zoom: 6,
  layers: [tiles]
});

var mcg = L.markerClusterGroup({
  chunkedLoading: true,
  //singleMarkerMode: true,
  spiderfyOnMaxZoom: false
});

for (var i = 0; i < DB_data.length; i++) {
  var a = DB_data[i];
  var title = a[2];
  var marker = L.marker(new L.LatLng(a[0], a[1]), { title: title });
  marker.bindPopup("<img src='../img/avatar3.png' alt = 'img'  style='width:30px;height:30px;'><b>Hello Cor666k!</b><br>I am a popup. <a href='swapi.html' >click me</a>");
  mcg.addLayer(marker);
}

map.addLayer(mcg);