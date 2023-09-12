import chooseImage from '../extra/chooseImage';

const HourlyWeather = ({ data }) => {
  return (
    <div>
      <p>
        {new Date(data.dt_txt).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
      <img src={chooseImage(data.weather[0].main)} alt="img" />
      <p>{`${parseInt(data.main.temp - 273.15)} C`}</p>
    </div>
  );
};

export default HourlyWeather;
