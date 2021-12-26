import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style';

import WeatherIcon from '../../components/cards/weather/icons';

const Icons = () => (
  <div class={style.icons}>
    <WeatherIcon type="clear-night" size={80} />
    <WeatherIcon type="cloudy" size={80} />
    <WeatherIcon type="fog" size={80} />
    <WeatherIcon type="hail" size={80} />
    <WeatherIcon type="lightning-rainy" size={80} />
    <WeatherIcon type="lightning" size={80} />
    <WeatherIcon type="partlycloudy" size={80} />
    <WeatherIcon type="pouring" size={80} />
    <WeatherIcon type="rainy" size={80} />
    <WeatherIcon type="sunny" size={80} />
  </div>
);

export default Icons;
