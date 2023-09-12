import Cloudy from '../weather-icons/cloudy.svg';
import Clear from '../weather-icons/clear.svg';
import Rainy from '../weather-icons/rain.svg';

const chooseImage = (title) => {
  switch (title) {
    case 'Clouds':
      return Cloudy;
    case 'Rain':
      return Rainy;
    default:
      return Clear;
  }
};

export default chooseImage;
