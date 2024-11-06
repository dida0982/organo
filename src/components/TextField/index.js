import "./TextField.css";

const TextField = (props) => {
  const placeholderModification = `${props.placeholder}...`;
  return (
    <div className="field-text">
      <label>{props.label}</label>
      <input required={props.mandatory} placeholder={placeholderModification} />
    </div>
  );
};

export default TextField;
