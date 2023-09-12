import chooseImage from '../extra/chooseImage';

const CurrentWeather = ({ data }) => {
  return (
    <div>
      <img src={chooseImage(data.weather.main)} alt="" />
      <h3>{data.weather[0].description}</h3>
      <h5>{`${parseInt(data.main.temp - 273.15)} C`}</h5>
      <p>{`${data.main.humidity} %`}</p>
      <p>{`${data.main.pressure} ok`}</p>
    </div>
  );
};

export default CurrentWeather;
