import React,{useState, useEffect} from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');
  useEffect(() => { 
  if(!city) return;
 
  const fetchWeather = async () => {
  setLoading(true);
  setError(null);
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=08213145a0cc37a717e499ea96af8ba8&units=metric`);
const data = await response.json();
setWeather(data);
  } catch (err) {
    setError('City not found!');
  } finally {
    setLoading(false);
  }
};

fetchWeather();
},[city]);


return (
  <div className="app">
    <h1>Weather Dashboard</h1>
    <SearchBar onSearch={setCity} />
    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    <WeatherCard weather={weather} />
  </div>
);
}
export default App;
