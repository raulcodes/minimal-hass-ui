import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { route } from 'preact-router';
import {
  getAuth,
  createConnection,
} from "home-assistant-js-websocket";
import {
  getHassUrl,
  setHassUrl,
} from '../../utils/localStorage';
import style from './style';

const Auth = ({ setConnection }) => {
  const saveTokens = (data) => window.localStorage.setItem('hass-minimal-ui/auth', JSON.stringify(data));
  const loadTokens = () => JSON.parse(window.localStorage.getItem('hass-minimal-ui/auth'));

  const [hostUrl, setHostUrl] = useState(() => (
      getHassUrl()
    ) ?
      getHassUrl()
    : '');

  useEffect(() => {
    const estConnection = async () => {
      try {
        const auth = await getAuth({ saveTokens, loadTokens });
        const connection = await createConnection({ auth });

        const { data: { hassUrl }} = auth;
        setHassUrl(hassUrl);
        setConnection(connection);
        route('/');
      } catch (err) {
        console.error(err);
      }
    };

    estConnection();
  }, []);

  const submitInput = () => getAuth({ hassUrl: hostUrl, saveTokens, loadTokens });
	return(
		<div class={style.auth}>
      <div>
        <h2>Enter the host you would like to connect to</h2>
        <div class={style.input}>
			    <input class={style.hostInput} onChange={e => setHostUrl(e.target.value)} value={hostUrl}></input>
          <button class={style.hostSubmit} onClick={submitInput}>Submit</button>
        </div>
      </div>
		</div>
	);
};

export default Auth;
