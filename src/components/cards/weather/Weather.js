import { h } from 'preact';
import cardStyle from '../cardStyles.css';
import style from './style.css';

import WeatherIcon from './icons';

const weatherFriendlyNames = {
  'clear-night': 'Clear Night',
  'cloudy': 'Cloudy',
  'fog': 'Fog',
  'hail': 'Hail',
  'lightning-rainy': 'Lightning Rainy',
  'lightning': 'Lightning',
  'partlycloudy': 'Partly Cloudy',
  'pouring': 'Pouring',
  'rainy': 'Raining',
  'sunny': 'Sunny',
};

const Weather = ({ data }) => {
  const state = data?.state;
  const temp = data?.attributes?.temperature;

  return(
    <div class={`${cardStyle.card11} ${cardStyle.on}`}>
      <svg viewBox='0 0 50 50'>
        <svg x="5" y="5">
          <WeatherIcon type={state} size="40%" />
        </svg>
        <text x="5" y="28" class={style.weatherState}>{weatherFriendlyNames[state]}</text>
        <text x="30" y="43" class={style.currentTemp}>{Math.round(temp)}°</text>
      </svg>
    </div>
  );
}

export default Weather;
