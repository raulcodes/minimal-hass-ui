import { h } from 'preact';
import { useState } from 'preact/hooks';
import { route } from 'preact-router';
import { subscribeEntities } from "home-assistant-js-websocket";
import Dashboard from '../../components/dashboard';

const Home = ({ connection }) => {
	const [entities, setEntities] = useState({});
	if (Object.keys(connection).length === 0) {
		route('/auth');
	} else {
		subscribeEntities(connection, (ent) => setEntities(ent));
	}


	return(<Dashboard entities={entities} connection={connection} />);
};

export default Home;
