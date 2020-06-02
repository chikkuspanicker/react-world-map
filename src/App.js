import React, { useEffect, useRef, useState } from 'react'
import './App.css';
import Map from './Map';
import Modal from './Modal';
let data = require('./api/leaders.json')

function App() {
  const [clickedRegionData, setClickedRegionData] = useState([])
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

  let handleMapClick = () => {

    window.addEventListener('WorldMapClicked', (e) => {
      let mactched = false;
      document.querySelectorAll('.map-selected').forEach(area => {
        area.classList.remove('map-selected');
        area.classList.add('map-unselected');
      })
      window.$('#exampleModal').modal({
        keyboard: false
      })
      data.map(region => {
        if (region.area === e.detail.clickedState) {
          mactched = true;
          setClickedRegionData(region.leaders)
        }
      });
      
      switch (e.detail.clickedState) {
        case 'na':
          window.selectedRegion = "NA"
          document.getElementById("NA").classList.add('map-selected');
          document.getElementById('leadership-header').innerText = 'Leadership in North America(NA)'
          break;
        case 'as':
          window.selectedRegion = "AP"
          document.getElementById("AS").classList.add('map-selected');
          document.getElementById('leadership-header').innerText = 'Leadership in Asia Pacific(AP)'
          break;
        case 'af':
          document.getElementById("AF").classList.add('map-selected');
          document.getElementById('leadership-header').innerText = 'Leadership in Africa(AF)'
          break;
        case 'sa':
          window.selectedRegion = "SA"
          document.getElementById("SA").classList.add('map-selected');
          document.getElementById('leadership-header').innerText = 'Leadership in South America(SA)'
          break;
        case 'eu':
          window.selectedRegion = "EU"
          document.getElementById("EU").classList.add('map-selected');
          document.getElementById('leadership-header').innerText = 'Leadership in Europe(EU)'
          break;
        case 'oc':
          document.getElementById("OC").classList.add('map-selected');
          document.getElementById('leadership-header').innerText = 'Leadership in Oceania'
          break;
        default:
          break;
      }
    });
  }
  useEffect(() => {
    handleMapClick();
  }, [])
  return (
    <div className="App">
      <section className="container">
        <h1 className="mt-5">Who Is Who in AXA XL?</h1>
        <div className="row mb-4">
          <div className="col-md-6 offset-md-6">
            {/* <select className="form-control mb-4" onChange={changeArea}>
              <option>--Select--</option>
              <option>North America(NA)</option>
              <option>Africa(AF)</option>
              <option>South America(SA)</option>
              <option>Europe(EU)</option>
              <option>Asia Pacific(AP)</option>
              <option>Oceania(OC)</option>
            </select> */}
          </div>
        </div>
        <div className="col">
          <Map />
        </div>
      </section>
      <Modal data={clickedRegionData} header={''}/>
    </div>
  );
}

export default App;
