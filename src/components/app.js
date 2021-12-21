import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Router, route } from 'preact-router';
import style from '../routes/home/style.css';
import Header from '../components/header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Icons from '../routes/icons';
import Auth from '../routes/auth';

const App = () => {
	// const [authed, setAuthed] = useState(false);
	// const handleRoute = async e => {
	// 	switch (e.url) {
  //     case '/':
  //       if (!authed) route('/auth', true);
  //       break;
  //   }
	// }

	return(
		<div class={style.app}>
			<Header />
			<Router onChange={() => {}}>
				<Home  path="/" />
				<Icons path="/icons" />
				<Auth  path="/auth" />
			</Router>
		</div>
	);
};

export default App;
