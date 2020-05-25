
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
  switch (e.detail.clickedState) {
    case 'na':
      document.getElementById("NA").classList.add('map-selected');
      break;
  }
});