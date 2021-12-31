import { h } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { randomIntFromInterval } from '../../../utils/utils';

import Name from '../switch/Name';
// import SwitchUI from './SwitchUI';

import cardStyle from '../cardStyles.css';

const Light = ({ data }) => {
  const borderRadius = useMemo(() => `cardB${randomIntFromInterval(1, 4)}`, [data]);

  const [brightness, setBrightness] = useState(0);
  const [state, setState] = useState(false);
  const [name, setName] = useState('');
  useEffect(() => {
    const { entity_id, state, attributes: { brightness, friendly_name } } = data;
    switch(state) {
      case 'off':
        setState(false);
        break;
      case 'on':
        setState(true);
        const brightnessPercent = Math.floor((brightness / 255) * 100);
        setBrightness(brightnessPercent);
        break;
    }
    if (friendly_name) {
      setName(friendly_name);
    } else {
      setName(entity_id);
    }
  }, []);

  return(
    <div
      onClick={() => setState(s => !s)}
      class={`
        ${cardStyle.card11} 
        ${state ? cardStyle.on : cardStyle.off}
        ${cardStyle[borderRadius]}
      `}
      style={brightness ? { background: `linear-gradient(0deg, #14151a ${brightness}%, #5c7985 ${100 - brightness}%)` } : null}
    >
      <svg viewBox='0 0 50 50'>
        {/* <SwitchUI state={state} /> */}
        <Name name={name} state={state} />
      </svg>
    </div>
  )
};

export default Light;
