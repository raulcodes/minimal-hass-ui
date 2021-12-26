import { h } from 'preact';
import style from './style.css';
import Weather from '../../components/cards/weather/Weather';
import Light from '../../components/cards/light';

import { weatherDataOne, weatherDataTwo } from '../../utils/mocks/weatherEntity';
import { lightOne, lightTwo } from '../../utils/mocks/lightEntity';
import { useEffect, useState } from 'preact/hooks';

const Dashboard = ({ entities, config }) => {
  console.log(config);
  const lightR = new RegExp('^light\.');
  const switchR = new RegExp('^switch\.');

  const [lights, setLights] = useState([]);
  useEffect(() => {
    setLights(Object.keys(entities).filter(e => lightR.test(e) || switchR.test(e)));
  }, [entities]);

	return(
		<div class={style.home}>
			<Weather data={entities['weather.home']} />
      {lights.map(l => <Light data={entities[l]} />)}
		</div>
	);
};

export default Dashboard;
