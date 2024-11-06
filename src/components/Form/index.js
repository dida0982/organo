import Button from "../Button";
import DropDownList from "../DropDownList";
import TextField from "../TextField";
import "./Form.css";

const Form = () => {
  const teams = [
    "Programmer",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Innovation and management"
  ];

  return (
    <section className="form">
      <from>
        <h2>Fill in the data</h2>
        <TextField label="Name" placeholder="Enter your name" />
        <TextField label="Position" placeholder="Enter your position" />
        <TextField
          label="Image"
          placeholder="Enter the address of your image"
        />
        <DropDownList label="Teams" items={teams} />
        <Button>Create card</Button>
      </from>
    </section>
  );
};

export default Form;
