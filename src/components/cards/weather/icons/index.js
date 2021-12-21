import ClearNight from "./clear-night";
import Cloudy from './cloudy';
import Fog from "./fog";
import Hail from './hail';
import LightningRainy from './lightning-rainy';
import Lightning from './lightning';
import PartlyCloudy from './partlycloudy';
import Pouring from './pouring';
import Rainy from './rainy';
import Sunny from './sunny';

const WeatherIcon = ({ type, size }) => {
  let icon;
  switch(type) {
    case 'clear-night':
      icon = <ClearNight size={size} />
      break;
    case 'cloudy':
      icon = <Cloudy size={size} />
      break;
    case 'fog':
      icon = <Fog size={size} />
      break;
    case 'hail':
      icon = <Hail size={size} />
      break;
    case 'lightning-rainy':
      icon = <LightningRainy size={size} />
      break;
    case 'lightning':
      icon = <Lightning size={size} />
      break;
    case 'partly-cloudy':
      icon = <PartlyCloudy size={size} />
      break;
    case 'pouring':
      icon = <Pouring size={size} />
      break;
    case 'rainy':
      icon = <Rainy size={size} />
      break;
    case 'sunny':
      icon = <Sunny size={size} />
      break;
    default:
      icon = <p>oops</p>
      break;
  }
  return(icon);
};

export default WeatherIcon;