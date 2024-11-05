import TextField from "../TextField";
import "./Form.css";


const Form = () => {
  return (
    <section className="form">
      <from>
        <h2>Fill in the data</h2>
        <TextField label="Name" placeholder="Enter your name"/>
        <TextField label="Position" placeholder="Enter your position"/>
        <TextField label="Image" placeholder="Enter the address of your image"/>
      </from>
    </section>
  );
};

export default Form;
