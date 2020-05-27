import React, { useEffect, useRef, useState } from 'react'
import './App.css';
import Map from './Map';
let data = require('./api/leaders.json')

function App() {
  
  return (
    <div className="App">
      <section className="container">
        <h1 className="mt-5">World Map</h1>
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
    </div>
  );
}

export default App;
