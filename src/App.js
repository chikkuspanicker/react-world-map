import React, { useEffect, useRef, useState } from 'react'
import './App.css';
import Map from './Map';
import Modal from './Modal';

// window.$ = $;
function App() {
  const [clickedRegion, setClickedRegion] = useState('')
  let changeArea = (e) => {
    return false;
    window.$('#exampleModal').modal({
      keyboard: false
    })
    document.querySelectorAll('.map-selected').forEach(area => {
      area.classList.remove('map-selected');
      area.classList.add('map-unselected');
    })
    // setClickedRegion(e.target.value);
    switch (e.target.value) {
      case 'North America(NA)':
        document.getElementById("NA").classList.add('map-selected');
        break;
      case 'Africa(AF)':
        document.getElementById("AF").classList.add('map-selected');
        break;
      case 'South America(SA)':
        document.getElementById("SA").classList.add('map-selected');
        break;
      case 'Europe(EU)':
        document.getElementById("EU").classList.add('map-selected');
        break;
      case 'Asia Pacific(AP)':
        document.getElementById("AS").classList.add('map-selected');
        break;
      case 'Oceania(OC)':
        document.getElementById("OC").classList.add('map-selected');
        break;
      default:
        break;
    }

  }
  return (
    <div className="App">
      <section className="container">
        <h1 className="mt-5">Who Is Who in AXA XL?</h1>
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
      <Modal header={clickedRegion} />
    </div>
  );
}

export default App;
