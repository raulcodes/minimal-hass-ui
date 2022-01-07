import { h } from 'preact';
import { useMemo, useState } from 'preact/hooks';
import { randomIntFromInterval } from '../../../utils/utils';
import { callService } from 'home-assistant-js-websocket';

import Name from './Name';
import Toggle from './Toggle';

import cardStyle from '../cardStyles.css';

const Switch = ({ connection, data }) => {
  const borderRadius = useMemo(() => `cardB${randomIntFromInterval(1, 4)}`, []);
  const { entity_id, state, attributes: { friendly_name } } = data;

  const [currentState, setState] = useState(state === 'on' ? true : false);
  const toggleSwitch = () => {
    setState(s => !s);
    callService(connection, "homeassistant", "toggle", { entity_id });
  };

  return(
    <div
      onClick={toggleSwitch}
      class={`
        ${cardStyle.card11} 
        ${currentState ? cardStyle.on : cardStyle.off}
        ${cardStyle[borderRadius]}
      `}
    >
      <svg viewBox='0 0 50 50'>
        <Toggle state={currentState} />
        <Name name={friendly_name || entity_id} />
      </svg>
    </div>
  )
};

export default Switch;
