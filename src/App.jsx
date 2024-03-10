import './App.css'
import Header from './Header.jsx'
import Welcome from './Welcome.jsx'
import Introduction from './Introduction.jsx'
import Filters from './Filters.jsx'
import WhyUs from './WhyUs.jsx'
import Calculator from './Calculator.jsx'
import React, { useState } from 'react'


function App() {
  const [area, setArea] = useState('');
  const [soilType, setSoilType] = useState('');
  const [fertilizerAmount, setFertilizerAmount] = useState('');
  const [lightExposure, setLightExposure] = useState('');
  const [waterConsumption, setWaterConsumption] = useState(null);
  const [predictedUrozhai, setPredictedUrozhai] = useState(null);

  const calculateWaterAndUrozhai = () => {
    const areaNum = parseFloat(area);
    const fertilizerNum = parseFloat(fertilizerAmount);
    const lightNum = parseFloat(lightExposure);
    const water = calculateWaterConsumption(areaNum, soilType);
    const urozhai = predictU(areaNum, soilType, fertilizerNum, lightNum);
    setWaterConsumption(water);
    setPredictedUrozhai(urozhai);
  };
  const calculateWaterConsumption = (area, soilType) => {
    if (soilType === "глинистая") {
      return area * 0.5;
    } else if (soilType === "песчаная") {
      return area * 0.3;
    } else {
      return area * 0.4;
    }
  };

  const predictU = (area, soilType, fertilizerAmount, lightExposure) => {
    let base;
    if (soilType === "глинистая") {
      base = 100;
    } else if (soilType === "песчаная") {
      base = 80;
    } else {
      base = 90;
    }
    const urozhaiWithFertilizer = base + (fertilizerAmount * 0.5);
    const urozhaiWithLight = urozhaiWithFertilizer + (lightExposure * 0.3);
    return urozhaiWithLight;
  };

  return (
    <>
    <img src="./public/Cloudy.svg" id="cloudy1"></img>
    <img src="./public/Cloudy22.svg" id="cloudy2"></img>
    <Header />
    <Welcome />
    <Introduction />
    <Filters />
    <WhyUs />
    <div className="App">
      <Calculator
        area={area}
        setArea={setArea}
        soilType={soilType}
        setSoilType={setSoilType}
        fertilizerAmount={fertilizerAmount}
        setFertilizerAmount={setFertilizerAmount}
        lightExposure={lightExposure}
        setLightExposure={setLightExposure}
        calculate={calculateWaterAndUrozhai}
      />
      {waterConsumption !== null && predictedUrozhai !== null && (
        <div className='results'>
          <p>Потребление воды (в день) : {waterConsumption} литров</p>
          <p>Предполагаемый урожай: {predictedUrozhai} тонн</p>
        </div>
      )}
    </div>
    <p id="footer">made with 💘 in Kazakhstan (2024)</p>
    </>
  )
}

export default App
