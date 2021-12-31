import { lightOne, lightThree, lightTwo } from "./lightEntity";
import { switchOne, switchTwo } from "./switchEntity";
import { weatherDataOne } from './weatherEntity';

const mockEntities = `{
  "light.side_table": ${lightOne},
  "light.rauls_lamp": ${lightTwo},
  "weather.home": ${weatherDataOne},
  "light.very_long_name_for_a_lamp": ${lightThree},
  "switch.rauls_lamp": ${switchTwo},
  "switch.turntable_lamp": ${switchOne}
}`;

export default mockEntities;