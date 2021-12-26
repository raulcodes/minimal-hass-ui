import { h } from 'preact';
import style from './iconStyle.css';

const Fog = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 3200 2800">
    <path class={style.icon} transform="scale(1,-1) translate(600,-2400)" d="M0 678q0 36 25 60t61 24h1289q35 0 58 -23.5t23 -60.5q0 -35 -23 -58t-58 -23h-1289q-36 0 -61 23t-25 58zM258 987q0 35 25 59q24 24 60 24h1290q34 0 57.5 -24t23.5 -59t-23.5 -59.5t-57.5 -24.5h-1290q-35 0 -60 24.5t-25 59.5zM430 375q0 34 26 58q23 23 58 23h1291 q36 0 60 -23t24 -58t-24.5 -60t-59.5 -25h-1291q-35 0 -59.5 25t-24.5 60zM1559 678q0 37 23.5 60.5t60.5 23.5h482q37 0 60.5 -24t23.5 -60q0 -35 -24 -58t-60 -23h-482q-37 0 -60.5 23t-23.5 58z" />
  </svg>
);

export default Fog;