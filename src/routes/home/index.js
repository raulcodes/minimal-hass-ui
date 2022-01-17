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
		return (
			<Fragment>
				<p>{JSON.stringify(connection)}</p>
				<Auth setConnection={setConnection} />
			</Fragment>);
	} else {
		subscribeEntities(connection, (ent) => setEntities(ent));
		return (
			<Fragment>
				<p>{JSON.stringify(entities)}</p>
				<Dashboard entities={entities} connection={connection} />
			</Fragment>
		);
	}
};

export default Home;
