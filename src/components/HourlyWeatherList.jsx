import HourlyWeather from './HourlyWeather';

const HourlyWeatherList = ({ data }) => {
  return data.map((obj, index) => {
    if (index > 0 && index < 8) {
      return <HourlyWeather key={index} data={obj} />;
    }
  });
};

export default HourlyWeatherList;
