import style from './iconStyle.css';

const ClearNight = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 3200 2800">
    <path class={style.icon} transform="scale(1,-1) translate(800,-2200)" d="M0 786q0 153 60 293t161.5 241.5t242 162t293.5 60.5h122q25 -7 25 -30l5 -94q6 -203 146 -346t340 -151l88 -7q26 0 26 -25v-104q1 -205 -99.5 -379.5t-274 -276t-378.5 -101.5q-156 0 -296.5 60t-241 161.5t-160 241.5t-59.5 294zM195 786q0 -122 48.5 -230t127 -181 t180 -115.5t206.5 -42.5q93 0 187.5 36.5t175.5 102t139.5 167.5t75.5 223q-261 54 -418.5 223.5t-181.5 398.5q-151 -8 -276.5 -93t-194.5 -215.5t-69 -273.5z" />
  </svg>
);

export default ClearNight;