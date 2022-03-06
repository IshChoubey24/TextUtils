import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
/*import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";*/

function App() {
  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert=(type,message)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000);
  }

  const toggleMode= ()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='rgb(2 19 71)';
    showAlert("success","Dark mode has been abled",);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("success","Light mode has been abled",);
   }
  }
   return (
    <>
    {/* <Router> */}
      <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
     <div className="container my-3">

     {/* <Routes>
          < Route exact path="/about" element={ <About />}/>*/}
         <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
            
        {/* </Routes>  */}

     </div>
  
     {/* </Router> */}
    </>
  );
}
export default App;
