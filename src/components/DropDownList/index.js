import "./DropDownList.css";

const DropDownList = (props) => {
  console.log(props.items);

  return (
    <div className="drop-down-list">
      <label>{props.label}</label>
      <select>
        {props.items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropDownList;
