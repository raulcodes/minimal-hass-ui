import { useState, useEffect } from "preact/hooks";
import { route } from "preact-router";
import { getAuth, createConnection } from "home-assistant-js-websocket";
import { getHassUrl, setHassUrl } from "../../utils/localStorage";
import style from "./style";

const Auth = ({ setConnection }) => {
  const saveTokens = (data) =>
    window.localStorage.setItem("hass-minimal-ui/auth", JSON.stringify(data));
  const loadTokens = () =>
    JSON.parse(window.localStorage.getItem("hass-minimal-ui/auth"));

  const [hostUrl, setHostUrl] = useState(getHassUrl() || "");

  const estConnection = () => {
    try {
      getAuth({ saveTokens, loadTokens })
        .then((auth) => {
          setHassUrl(auth.data.hassUrl);
          createConnection({ auth })
            .then((connection) => {
              setConnection(connection);
            })
            .catch((err) => alert(err));
          route('/');
        })
        .catch((err) => alert(err));
    } catch (err) {
      alert(err);
    }
  }

  useEffect(() => estConnection(), []);

  const submitInput = (e) => {
    e.preventDefault();
    try {
      getAuth({ hassUrl: hostUrl, saveTokens, loadTokens })
        .then((auth) => {
          setHassUrl(auth.data.hassUrl);
          createConnection({ auth })
            .then((connection) => {
              setConnection(connection);
            })
            .catch((err) => alert(err));
          route('/');
        })
        .catch((err) => alert(err));
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div class={style.auth}>
      <div>
        <h2>Enter the host you would like to connect to</h2>
        <form class={style.input} onSubmit={submitInput}>
          <input
            autoComplete="url"
            class={style.hostInput}
            onChange={(e) => setHostUrl(e.target.value)}
            value={hostUrl}
          ></input>
          <button class={style.hostSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
