import { h } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { randomIntFromInterval } from '../../../utils/utils';

import Name from './Name';
import Toggle from './Toggle';

import cardStyle from '../cardStyles.css';

const Switch = ({ data }) => {
  const borderRadius = useMemo(() => `cardB${randomIntFromInterval(1, 4)}`, [data]);

  const [state, setState] = useState(false);
  const [name, setName] = useState('');
  useEffect(() => {
    const { entity_id, state, attributes: { friendly_name } } = data;
    switch(state) {
      case 'off':
        setState(false);
        break;
      case 'on':
        setState(true);
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
    >
      <svg viewBox='0 0 50 50'>
        <Toggle state={state} />
        <Name name={name} state={state} />
      </svg>
    </div>
  )
};

export default Switch;
