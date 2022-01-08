import style from './iconStyle.css';

const PartlyCloudy = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 3200 2800">
    <path class={style.icon} transform="scale(1,-1) translate(200,-2400)" d="M0 528q0 -144 70.5 -266t191.5 -192.5t264 -70.5h1155q143 0 265 70.5t193 192.5t71 266q0 106 -45 213q122 149 122 353q0 114 -44 217.5t-119 178.5t-178.5 119t-217.5 44q-237 0 -414 -186q-124 70 -288 70q-225 0 -398 -139.5t-222 -357.5q-179 -41 -292.5 -184 t-113.5 -328zM182 528q0 134 89.5 231t224.5 113l53 3q20 0 20 19l7 58q22 173 150 289.5t300 116.5q176 0 306.5 -117t146.5 -289l8 -62q4 -18 22 -18h172q141 0 243 -102t102 -242q0 -145 -101.5 -247.5t-243.5 -102.5h-1155q-140 0 -242 103.5t-102 246.5zM897 1837 q0 -39 26 -67l70 -68q40 -30 68 -27q33 0 59 27.5t26 66.5t-28 63l-63 70q-29 26 -65 26q-39 0 -66 -26.5t-27 -64.5zM1467 1365q111 107 261 107q158 0 268.5 -110t110.5 -268q0 -100 -54 -196q-155 153 -372 153h-34q-40 174 -180 314zM1640 1928q0 -41 25 -66t63 -25 q41 0 66 25t25 66v218q0 38 -25.5 63t-65.5 25q-38 0 -63 -25t-25 -63v-218zM2229 1683q0 -41 24 -66q34 -26 66 -26q29 0 63 26l153 153q26 29 26 68q0 38 -26 64t-63 26q-38 0 -62 -26l-157 -153q-24 -29 -24 -66zM2314 421q0 -38 27 -67l69 -67q24 -26 62 -26t63.5 26.5 t25.5 66.5q0 36 -26 62l-69 69q-26 26 -61 26q-38 0 -64.5 -26t-26.5 -64zM2470 1094q0 -37 28 -62q26 -26 65 -26h218q37 0 61.5 25t24.5 63t-24.5 64.5t-61.5 26.5h-218q-38 0 -65.5 -27t-27.5 -64z" />
  </svg>
);

export default PartlyCloudy;