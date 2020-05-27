
import React from 'react';
import WorldMap from 'react-world-map'

export default function Map() {
  return (
    <WorldMap />
  )
}

window.addEventListener('WorldMapClicked', (e) => {
  document.querySelectorAll('.map-selected').forEach(area => {
    area.classList.remove('map-selected');
    area.classList.add('map-unselected');
  })
  window.$('#exampleModal').modal({
    keyboard: false
  })
  switch (e.detail.clickedState) {
    case 'na':
      document.getElementById("NA").classList.add('map-selected');
      document.getElementById('leadership-header').innerText = 'Leadership in North America(NA)'
      break;
    case 'as':
      document.getElementById("AS").classList.add('map-selected');
      document.getElementById('leadership-header').innerText = 'Leadership in Asia Pacific(AP)'
      break;
    case 'af':
      document.getElementById("AF").classList.add('map-selected');
      document.getElementById('leadership-header').innerText = 'Leadership in Africa(AF)'
      break;
    case 'sa':
      document.getElementById("SA").classList.add('map-selected');
      document.getElementById('leadership-header').innerText = 'Leadership in South America(SA)'
      break;
    case 'eu':
      document.getElementById("EU").classList.add('map-selected');
      document.getElementById('leadership-header').innerText = 'Leadership in Europe(EU)'
      break;
    case 'oc':
      document.getElementById("OC").classList.add('map-selected');
      document.getElementById('leadership-header').innerText = 'Leadership in Asia Pacific(AP)'
      break;
    default:
      break;
  }
});