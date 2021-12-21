import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style';

const Switch = ({ state }) => (
  <div class={`${style.switch} ${state ? '' : style.switchUnactive}`}>
    <div class={`${style.switchState} ${state ? style.switchStateActive : ''}`} />
  </div>
);

export default Switch;
