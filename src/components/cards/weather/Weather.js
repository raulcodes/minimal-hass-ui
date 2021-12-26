import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import cardStyle from '../cardStyles.css';
import style from './style.css';

import WeatherIcon from './icons';

const Weather = ({ data }) => {
  const state = data?.state;
  const capitalizedState = `${state?.slice(0, 1).toUpperCase()}${state?.slice(1)}`;
  const temp = data?.attributes?.temperature;

  return(
    <div class={`${cardStyle.card11} ${cardStyle.on}`}>
      <div class={style.weatherIcon}>
        <WeatherIcon type={data?.state} size={80} />
        <span class={style.weatherState}>{capitalizedState}</span>
      </div>
      <span class={style.currentTemp}>{Math.round(temp)}°</span>
    </div>
  );
}

export default Weather;
