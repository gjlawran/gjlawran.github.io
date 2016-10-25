//define a map and associate it with a div container in this case map-leaflet
var map = L.map('map-leaflet').setView([52.362183, -125.994644], 5);

L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ["otile1", "otile2", "otile3", "otile4"],
    maxZoom: 18
}).addTo(map);


