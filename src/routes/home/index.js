import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { route } from 'preact-router';
import { subscribeEntities, subscribeConfig } from "home-assistant-js-websocket";
import Dashboard from '../../components/dashboard';

const Home = ({ connection }) => {
	if (Object.keys(connection).length === 0) {
		route('/auth');
	}

	const [entities, setEntities] = useState({});
	subscribeEntities(connection, (ent) => {
		console.log(ent);
		return setEntities(ent);
	});
	const [config, setConfig] = useState({});
	subscribeConfig(connection, (config) => setConfig(config));

	return(<Dashboard entities={{}} config={{}} />);
};

export default Home;
