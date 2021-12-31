import { h } from "preact";
import style from "./style";

const Name = (props) => {
  return (
    <foreignObject x="5" y="0" width="35" height="40">
      <p
        class={style.name}
        xmlns="http://www.w3.org/1999/xhtml"
      >
        {props.children}
      </p>
    </foreignObject>
  );
};

export default Name;