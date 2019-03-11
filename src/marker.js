const mapboxgl = require('mapbox-gl');

const createNewMarker = function(type, coord) {
  if (type === 'activity') {
    const markerDomEl = document.createElement('div');
    markerDomEl.style.width = '32px';
    markerDomEl.style.height = '39px';
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
    new mapboxgl.Marker(markerDomEl).setLngLat(coord).addTo(map);
  }
  if (type === 'hotel') {
    const markerDomEl = document.createElement('div');
    markerDomEl.style.width = '32px';
    markerDomEl.style.height = '39px';
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
    new mapboxgl.Marker(markerDomEl).setLngLat(coord).addTo(map);
  }
  if (type === 'restaurant') {
    const markerDomEl = document.createElement('div');
    markerDomEl.style.width = '32px';
    markerDomEl.style.height = '39px';
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
    new mapboxgl.Marker(markerDomEl).setLngLat(coord).addTo(map);
  }
};

module.exports = createNewMarker;
