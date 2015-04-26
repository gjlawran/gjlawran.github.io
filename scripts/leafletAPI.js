//define a map and associate it with a div container in this case map-leaflet
var map = L.map('map-leaflet').setView([52.362183, -125.994644], 5);

L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    subdomains: ["otile1", "otile2", "otile3", "otile4"],
    maxZoom: 18
}).addTo(map);
