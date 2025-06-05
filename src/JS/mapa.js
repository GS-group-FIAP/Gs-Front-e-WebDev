var map = L.map('mapid').setView([-23.5505, -46.6333], 10); // marco zero

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

var marker1 = L.marker([-23.571529, -46.588745]).addTo(map)
    .bindPopup('Ponto de abrigo.');

var marker2 = L.marker([-23.590040, -46.637688]).addTo(map)
    .bindPopup('Ponto de abrigo.');

var marker3 = L.marker([-23.706735, -46.617050]).addTo(map)
    .bindPopup('Ponto de abrigo.');


var locationInfoDiv = document.getElementById('location-info');

function onMapClick(e) {
    var lat = e.latlng.lat.toFixed(6);
    var lng = e.latlng.lng.toFixed(6);
    if (locationInfoDiv) { 
        locationInfoDiv.textContent = `Localização clicada: Latitude ${lat}, Longitude ${lng}`;
    }
    L.marker(e.latlng).addTo(map)
        .bindPopup(`Latitude: ${lat}<br>Longitude: ${lng}`).openPopup();
}

map.on('click', onMapClick);