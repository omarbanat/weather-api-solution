import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import HourlyWeatherList from './components/HourlyWeatherList';

function App() {
  const [city, setCity] = useState('beirut');
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=8b0085fe50c89792c823f75df807415e`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === '200') {
          setError(false);
          setData(data);
        } else {
          setError(true);
          setErrorMsg('Something wrong occured');
        }
      })
      .catch((error) => {
        setError(true);
        setErrorMsg(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <Header setCity={setCity} fetchData={fetchData} />
      {!error ? (
        data &&
        data.list && (
          <div>
            <CurrentWeather data={data.list[0]} />
            <HourlyWeatherList data={data.list} />
          </div>
        )
      ) : (
        <h1>{errorMsg}</h1>
      )}
    </div>
  );
}

export default App;
