import { h } from 'preact';
import { useState } from 'preact/hooks';
import { route } from 'preact-router';
import style from './style.css';
import Weather from '../../components/cards/weather/Weather';
import Light from '../../components/cards/light';
import connect from '../../utils/websocketClient';

import { weatherDataOne, weatherDataTwo } from '../../utils/mocks/weatherEntity';
import { lightOne, lightTwo } from '../../utils/mocks/lightEntity';

const Home = () => {
	return(
		<div class={style.home}>
			<Weather data={JSON.parse(weatherDataOne)} />
			<Light data={JSON.parse(lightOne)} />
			<Light data={JSON.parse(lightTwo)} />
			<Weather data={JSON.parse(weatherDataTwo)} />
		</div>
	);
};

export default Home;
