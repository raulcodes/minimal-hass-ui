import style from "./style";

const Brightness = (props) => {
  return (
    <foreignObject x="5" y="32" width="35" height="40">
      <p
        class={style.brightness}
        xmlns="http://www.w3.org/1999/xhtml"
      >
        {props.children}
      </p>
    </foreignObject>
  );
};

export default Brightness;
