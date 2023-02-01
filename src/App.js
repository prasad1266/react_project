import { useState } from 'react';

import './App.css';
// import About from './components/About';

import Navbar from './components/Navbar';
import Textform from './components/TextForm';


function App() {
  const[mode,setMode]=useState('light');
  // const[]
  const toggleMode= () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
    }
  }

  return (
    
    <>
  
<Navbar title="textutil" mode={mode} toggleMode={toggleMode}/>

{/* <Navbar /> */}

<div className="container my-3">
  <Textform heading="Enter The text to Anlyze:"/>
  {/* <About/> */}
  </div>

    </>
  );  
}

export default App;
