import { h } from 'preact';
import style from './style.css';
import Weather from '../../components/cards/weather/Weather';
import Light from '../../components/cards/light';

import { weatherDataOne, weatherDataTwo } from '../../utils/mocks/weatherEntity';
import { lightOne, lightTwo } from '../../utils/mocks/lightEntity';

const Dashboard = ({ entities }) => {
  const lightR = new RegExp('^light\.');
  const switchR = new RegExp('^switch\.');
  const lights = Object.keys(entities).filter(e => lightR.test(e) || switchR.test(e));
	return(
		<div class={style.home}>
			<Weather data={entities['weather.home']} />
      {lights.map(l => <Light data={entities[l]} />)}
		</div>
	);
};

export default Dashboard;
