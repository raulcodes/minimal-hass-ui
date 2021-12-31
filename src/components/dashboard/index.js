import { h } from 'preact';
import style from './style.css';

import Light from '../cards/light';
import Switch from '../cards/switch';
import Weather from '../cards/weather/Weather';

import { useEffect, useState } from 'preact/hooks';

const Dashboard = ({ entities, config }) => {
  const switchR = new RegExp('^switch\.');
  const lightR = new RegExp('^light\.');
  
  const [lights, setLights] = useState([]);
  const [switches, setSwitches] = useState([]);
  useEffect(() => {
    setSwitches(Object.keys(entities).filter(e => switchR.test(e)));
    setLights(Object.keys(entities).filter(e => lightR.test(e)));
  }, [entities]);

	return(
		<div class={style.home}>
			<Weather data={entities['weather.home']} />
      {switches.map(s => <Switch data={entities[s]} />)}
      {lights.map(l => <Light data={entities[l]} />)}
		</div>
	);
};

export default Dashboard;
