import './App.css';
import React from "react";
import MyForm from './components/DetailsForm1.js';
import { Navbar } from 'react-bootstrap';
import Footer from './components/Footer';
import DetailsForm2 from './components/DetailsForm2';
import LaneContent from './components/LaneContent';
import LaneIndicator from './components/LaneIndicator';
import RawData from './components/RawData';
import MassCorrection from './components/MassCorrection';
import NormalisedDialution from './components/NormalisedDialution';

function App() {
  return (
    <div className="App">
    <MyForm />
    {/* <DetailsForm2/> */}

    {/* <LaneContent /> */}
    {/* <LaneIndicator /> */}
    {/* <RawData /> */}
    {/* <MassCorrection /> */}
    {/* <NormalisedDialution /> */}
    </div>
  );
}

export default App;
