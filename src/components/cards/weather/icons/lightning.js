import { h } from 'preact';
import style from './iconStyle.css';

const Lightning = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 2400 2400">
    <path class={style.icon} transform="scale(1,-1) translate(0,-2000)" d="M0 -283h42l734 1086q15 29 -16 29h-303l319 581q14 29 -21 29h-406q-17 0 -31 -19l-296 -789q-4 -29 20 -29h293zM907 392h29l557 818q8 13 4 21t-18 8h-224l233 430q19 32 -19 32h-292q-21 0 -32 -20l-222 -585q-5 -14 1 -22t20 -8h218z" />
  </svg>
);

export default Lightning;