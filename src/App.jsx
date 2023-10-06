
import { useState } from 'react';
import './App.css'

const App = () => {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [apod, setApod] = useState({});
  const [date, setDate] = useState(today);
  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = "";

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
    <div className="App">
      <h2 className="title">
      NASA API <img src={logo} className="logo" alt="NASA LOGO" />
      </h2>
      <h1>Foto Astronómica del día</h1>
      <input type="date" id="photo-date" onChange={handleInput} />
      {date > today ? (
      <h2>Porfavor, elige una fecha anterior</h2>
      ) : (
      <Figure data={apod} />
      )}
      <div className="standard-dialog center">
        <h1 className="dialog-text">&JDalmedo - 2023 - 
          <a href="https://api.nasa.gov/">https://api.nasa.gov/</a>
        </h1>
      </div>
    </div>
);
};

export default App
