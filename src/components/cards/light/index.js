import { h } from 'preact';
import { useMemo, useState } from 'preact/hooks';
import { randomIntFromInterval } from '../../../utils/utils';
import { callService } from 'home-assistant-js-websocket';

import Brightness from './Brightness';
import LightIcon from './LightIcon';
import Name from './Name';

import cardStyle from '../cardStyles.css';

const Light = ({ data, connection }) => {
  const borderRadius = useMemo(() => `cardB${randomIntFromInterval(1, 4)}`, []);
  const { entity_id, state, attributes: { brightness, friendly_name } } = data;

  const [currentBrightness, setBrightness] = useState(brightness || 0);
  const [currentState, setState] = useState(state === 'on' ? true : false);
  const handleSlider = e => {
    setBrightness(e.target.value);
    if (e.target.value == 0) {
      setState(false);
    } else if (currentState === false && e.target.value !== 0) {
      setState(true);
    }
  }
  const sendBrightness = e => callService(connection, "light", "turn_on", { "brightness": e.target.value }, { entity_id })
  return(
    <div
      class={`
        ${cardStyle.card11} 
        ${cardStyle[borderRadius]}
      `}
      style={currentBrightness && currentState ? { background: `linear-gradient(0deg, #14151a ${(currentBrightness / 255) * 100}%, #5c7985 1%)` } : null}
    >
      <input type="range" min={0} max={255} value={currentBrightness} onInput={handleSlider} onMouseUp={sendBrightness}/>
      <svg viewBox='0 0 50 50'>
        <Name>{friendly_name || entity_id}</Name>
        {currentState ? <Brightness>{Math.floor((currentBrightness / 255) * 100)}%</Brightness> : null }
        <LightIcon state={currentState} />
      </svg>
    </div>
  )
};

export default Light;
