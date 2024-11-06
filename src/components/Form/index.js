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

  const whenSaving = (event) => {
    event.preventDefault();
    console.log("Form has been submitted");
  };

  return (
    <section className="form">
      <form onSubmit={whenSaving}>
        <h2>Fill in the data</h2>
        <TextField
          mandatory={true}
          label="Name"
          placeholder="Enter your name"
        />
        <TextField
          mandatory={true}
          label="Position"
          placeholder="Enter your position"
        />
        <TextField
          label="Image"
          placeholder="Enter the address of your image"
        />
        <DropDownList label="Teams" items={teams} />
        <Button>Create card</Button>
      </form>
    </section>
  );
};

export default Form;
