import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Router } from 'preact-router';
import style from './dashboard/style.css';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Icons from '../routes/icons';
import Auth from '../routes/auth';
import MockDashboard from '../routes/mock-dashboard';

const App = () => {
	const [connection, setConnection] = useState({});

	return(
		<div class={style.app}>
			<Router>
				<Home  path="/" connection={connection} />
				<Icons path="/icons" />
				<Auth  path="/auth" setConnection={setConnection} />
				<MockDashboard path="/mock" />
			</Router>
		</div>
	);
};

export default App;
