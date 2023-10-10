import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import logo from "./assets/logo.png";
import Figure from './components/Figure';
import './App.css';

const App = () => {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [apod, setApod] = useState({});
  const [date, setDate] = useState(today);
  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = "QWMQMNmkNRMaqAsuMXDXaUzpnQf5HUFe3K1O0kCs";

  useEffect(() => {

    const getApod = async () => {
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
      );
      setApod(data.data);
    };
    getApod();
  }, [date]);

  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };
  return (
    <>
      <img src={logo} className="logo" alt="NASA LOGO" />
      <div className="App">
        <h2 className="title">NASA API</h2>
        <h1>Foto del Día</h1>
        <input type="date" id="photo-date" onChange={handleInput} />
        {date > today ? (
        <h2>Elige una fecha anterior, porfavor</h2>
        ) : (
        <Figure data={apod} />
        )}
        
        <div className="standard-dialog center">
          <h1 className="dialog-text">JDalmedo - Fundación ONCE - 2023 <a href="https://api.nasa.gov/">https://api.nasa.gov/</a></h1>
        </div>
      </div>
      
    </>
  );
};

export default App
