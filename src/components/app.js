import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Router, route } from 'preact-router';
import style from './dashboard/style.css';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Icons from '../routes/icons';
import Auth from '../routes/auth';

const App = () => {
	const [connection, setConnection] = useState({});

	return(
		<div class={style.app}>
			<Router>
				<Home  path="/" connection={{}} />
				<Icons path="/icons" />
				<Auth  path="/auth" setConnection={setConnection} />
			</Router>
		</div>
	);
};

export default App;
