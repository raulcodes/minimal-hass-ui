import { h } from "preact";
import style from "./style";

const Name = ({ name, state }) => {
  return (
    <foreignObject x="5" y="0" width="35" height="40">
      <p
        class={`${style.name1} ${state ? style.nameActive : ""}`}
        xmlns="http://www.w3.org/1999/xhtml"
      >
        {name}
      </p>
    </foreignObject>
  );
};

export default Name;
