import { Fragment } from 'preact';
import { useState } from 'preact/hooks';
import { subscribeEntities } from "home-assistant-js-websocket";
import Auth from '../../components/auth';
import Dashboard from '../../components/dashboard';
// import AddCard from '../../components/addCard';

const Home = () => {
	const [connection, setConnection] = useState({});
	const [entities, setEntities] = useState({});
	if (Object.keys(connection).length === 0) {
		return <Auth setConnection={setConnection} />
	} else {
		subscribeEntities(connection, (ent) => setEntities(ent));
		return <Dashboard entities={entities} connection={connection} />
	}
};

export default Home;
