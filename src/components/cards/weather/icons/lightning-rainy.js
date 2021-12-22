import { h } from 'preact';
import style from './iconStyle.css';

const LightningRainy = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 2400 2400">
    <path class={style.icon} transform="scale(1,-1) translate(0,-2000)" d="M0 527q0 -177 105.5 -317t273.5 -191l-69 -179q-5 -23 15 -23h227l-111 -403h30l423 557q6 7 2 14.5t-15 7.5h-232l264 495q10 22 -15 22h-314q-15 0 -24 -15l-115 -306q-114 29 -188.5 124t-74.5 214q0 133 90 230.5t224 113.5l56 8q21 0 21 18l8 55q16 173 145.5 290 t304.5 117q174 0 304.5 -117t149.5 -290l6 -62q0 -19 20 -19h172q145 0 247.5 -101t102.5 -243q0 -136 -95 -235.5t-234 -109.5q-21 0 -21 -20v-146q0 -18 21 -18q104 3 198.5 47t162.5 114.5t108 167t40 200.5q0 144 -71.5 265.5t-193.5 192t-265 70.5h-34 q-53 213 -225 348t-393 135q-226 0 -401 -140t-224 -358q-176 -41 -291 -184.5t-115 -328.5zM870 -525q0 -25 16.5 -49.5t49.5 -34.5q22 -5 27 -5q14 0 40 11q34 15 45 56l30 112q10 35 -8.5 67t-56.5 43q-35 10 -67.5 -8.5t-43.5 -56.5l-29 -107q-3 -27 -3 -28zM1013 -16 q0 -23 16.5 -46.5t48.5 -35.5q36 -12 68 5t43 56l32 111q10 35 -9 67.5t-57 43.5q-36 10 -69 -8.5t-44 -55.5l-26 -108q-3 -27 -3 -29zM1314 -192q0 -27 17.5 -54t50.5 -37q4 0 12.5 -2t12.5 -2q21 0 40 8q30 11 44 61l27 108q11 37 -6.5 70.5t-53.5 44.5q-40 10 -72.5 -9 t-39.5 -57l-29 -110q-3 -9 -3 -21zM1459 319q-1 -25 16 -50t52 -40q12 -6 28 -6q17 0 36 9q33 16 47 61l31 110q3 21 3 23q0 27 -17.5 52.5t-52.5 35.5q-4 0 -12 2t-12 2q-27 0 -52 -16.5t-35 -51.5l-29 -108q-3 -12 -3 -23z" />
  </svg>
);

export default LightningRainy;