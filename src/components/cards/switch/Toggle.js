import { Fragment, h } from 'preact';
import style from './style';

const Toggle = ({ state }) => (
  <Fragment>
    <rect rx={12} class={`${style.switch} ${state ? '' : style.switchInactive}`} />
    <circle class={`${style.switchCircle} ${state ? style.switchStateActive : ''}`} />
  </Fragment>
);

export default Toggle;
