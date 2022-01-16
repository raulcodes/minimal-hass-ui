import { useState } from 'preact/hooks';
import { Router } from 'preact-router';
import style from './dashboard/style.css';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Icons from '../routes/icons';
import MockDashboard from '../routes/mock-dashboard';

const App = () => {
	return(
		<div class={style.garden}>
			<div class={style.app}>
				<Router>
					<Home  path="/" />
					<Icons path="/icons" />
					<MockDashboard path="/mock" />
				</Router>
			</div>
		</div>
	);
};

export default App;
