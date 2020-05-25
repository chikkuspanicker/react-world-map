import React, { useEffect, useRef } from 'react'
import './App.css';
import Map from './Map';
import Modal from './Modal';

// window.$ = $;
function App() {
  let changeArea = (e) => {
    window.$('#exampleModal').modal({
      keyboard: false
    })
    document.querySelectorAll('.map-selected').forEach(area => {
      area.classList.remove('map-selected');
      area.classList.add('map-unselected');
    })
    switch (e.target.value) {
      case 'North America(NA)':
        document.getElementById("NA").classList.add('map-selected');
        break;
      case 'Africa(AF)':
        break;
      case 'South America(SA)':
        break;
      case 'Europe(EU)':
        break;
      case 'Asia Pacific(AP)':
        break;
      case 'Oceania(OC)':
        break;
      default:
        break;
    }

  }
  return (
    <div className="App">
      <section className="container">
        <h1 className="mt-5">Who Is Who ?</h1>
        <div className="row">
          <div className="col-md-6 offset-md-6">
            <select className="form-control mb-4" onChange={changeArea}>
              <option>--Select--</option>
              <option>North America(NA)</option>
              <option>Africa(AF)</option>
              <option>South America(SA)</option>
              <option>Europe(EU)</option>
              <option>Asia Pacific(AP)</option>
              <option>Oceania(OC)</option>
            </select>
          </div>
        </div>
        <div className="col">
          <Map />
        </div>
      </section>
      <Modal />
    </div>
  );
}

export default App;
