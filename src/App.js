import './App.css';
import React from "react";
import MyForm from './components/DetailsForm1.js';
import { Navbar } from 'react-bootstrap';
import Footer from './components/Footer';
import DetailsForm2 from './components/DetailsForm2';
import lanecontentform from './components/lanecontentform';

function App() {
  return (
    <div className="App">
    <MyForm />
    <DetailsForm2/>

    <lanecontentform>
        
    </lanecontentform>
    {/* <Footer /> */}
    </div>
  );
}

export default App;
