import "./TextField.css";

const TextField = (props) => {
  const placeholderModification = `${props.placeholder}...`;

  const whenTyped = (event) => {
    props.toTheChanged(event.target.value);
  };

  return (
    <div className="field-text">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={whenTyped}
        required={props.mandatory}
        placeholder={placeholderModification}
      />
    </div>
  );
};

export default TextField;
