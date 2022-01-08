import style from "./style";

const Name = ({ name }) => {
  return (
    <foreignObject x="5" y="3" width="35" height="40">
      <p
        class={style.name}
        xmlns="http://www.w3.org/1999/xhtml"
      >
        {name}
      </p>
    </foreignObject>
  );
};

export default Name;
