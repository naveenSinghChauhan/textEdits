import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import FormText from './components/FormText';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
// import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode Enable", 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode Enable", 'success');
    }
  }
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtiles" aboutText="About" mode={mode} toggleMode={toggleMode} alert={alert} />
        <Alert alert={alert} />
        <div className="container my-2">
          <Routes>
            <Route exact path="/" element={<FormText headingText="Enter the text to analyze below" aboutText="About" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
