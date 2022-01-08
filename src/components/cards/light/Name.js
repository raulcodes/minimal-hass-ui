import style from "./style";

const Name = (props) => {
  return (
    <foreignObject x="5" y="3" width="35" height="40">
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
