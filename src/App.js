import { useState } from 'react';

import './App.css';
import Alert from './components/Alert';
import About from './components/About';

import Navbar from './components/Navbar';
import Textform from './components/TextForm'; 
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAltert] = useState('null');

  const showAlert = (message, type) => {
    setAltert({
      msg:message,
      type:type
})
  setTimeout(() => {
    setAltert("null");
  }, 2000);

  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#283447';
      showAlert("Dark mode Enabled", "success");
      document.title='Textutils-DarkMode';
    }
    
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enabled", "success")
      document.title='Textutils-LightMode';
    }
  }

  return (

    <>

      {/* <Navbar title="textutil" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} /> */}
     
<Router>
  <Navbar title="textutil" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About />}/>cd
          <Route path="/" element={<Textform  showAlert={showAlert} heading="Enter The text to Anlyze below" mode={mode} />}/>
        </Routes >
      </div>
      </Router>
    </>
  );
}

export default App;
