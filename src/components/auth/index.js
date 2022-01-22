import { useState, useEffect } from "preact/hooks";
import { getAuth, createConnection } from "home-assistant-js-websocket";
import { getHassUrl, setHassUrl } from "../../utils/localStorage";
import style from "./style";

const Auth = ({ setConnection }) => {
  const saveTokens = (data) =>
    window.localStorage.setItem("hass-minimal-ui/auth", JSON.stringify(data));
  const loadTokens = () =>
    JSON.parse(window.localStorage.getItem("hass-minimal-ui/auth"));

  const [hostUrl, setHostUrl] = useState(getHassUrl());

  const submitInput = (e) => {
    e.preventDefault();
    getAuth({ hassUrl: hostUrl })
      .catch(err => console.log(err));
  };

  const checkConnection = () => {
    alert(window.location.search);
    getAuth({ saveTokens, loadTokens })
      .then((auth) => {
        setHassUrl(auth.data.hassUrl);
        createConnection({ auth })
          .then((connection) => {
            setConnection(connection);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div class={style.auth}>
      <div>
        <h2>Enter the host you would like to connect to</h2>
        <form class={style.input} onSubmit={submitInput}>
          <input
            autoComplete="off"
            type="url"
            class={style.hostInput}
            onInput={(e) => setHostUrl(e.target.value)}
            value={hostUrl}
          ></input>
          <button class={style.hostSubmit} type="submit">
            Submit
          </button>
        </form>
        <button onClick={checkConnection}>Check for connection</button>
        <p>hassUrl: {hostUrl}</p>
        {/* <p>tokens: {JSON.stringify(loadTokens())}</p> */}
      </div>
    </div>
  );
};

export default Auth;
