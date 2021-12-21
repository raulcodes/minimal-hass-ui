import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import Switch from './switch';

import cardStyle from '../cardStyles.css';
import style from './style';

const Light = ({ data }) => {
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
      class={`${cardStyle.card11} ${state ? cardStyle.on : cardStyle.off}`}
    >
      <span class={style.name}>{name}</span>
      <Switch state={state} />
    </div>
  )
};

export default Light;
