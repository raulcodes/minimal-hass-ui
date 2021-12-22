import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { route } from 'preact-router';
import { subscribeEntities } from "home-assistant-js-websocket";
import Dashboard from '../../components/dashboard';

const Home = ({ connection }) => {
	const [entities, setEntities] = useState({});
	useEffect(() => (Object.keys(connection).length === 0) ? route('/auth') : (
		subscribeEntities(connection, (ent) => setEntities(ent))
	), []);
	return(<Dashboard entities={entities} />);
};

export default Home;
