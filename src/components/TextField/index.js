import "./TextField.css";

const TextField = (props) => {
  const placeholderModification = `${props.placeholder}...`;

  let value = "";

  const whenTyped = (event) => {
    value = event.target.value;
    console.log(value);
  };

  return (
    <div className="field-text">
      <label>{props.label}</label>
      <input
        value={value}
        onChange={whenTyped}
        required={props.mandatory}
        placeholder={placeholderModification}
      />
    </div>
  );
};

export default TextField;
