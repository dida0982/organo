import { useState } from "react";
import Button from "../Button";
import DropDownList from "../DropDownList";
import TextField from "../TextField";
import "./Form.css";

const Form = (props) => {
  const teams = [
    "Programmer",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Innovation and management"
  ];

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const whenSaving = (event) => {
    event.preventDefault();
    props.toTheRegisteredCollaborator({
      name,
      position,
      image,
      team
    })
  };

  return (
    <section className="form">
      <form onSubmit={whenSaving}>
        <h2>Fill in the data</h2>
        <TextField
          mandatory={true}
          label="Name"
          placeholder="Enter your name"
          value={name}
          toTheChanged={(value) => setName(value)}
        />
        <TextField
          mandatory={true}
          label="Position"
          placeholder="Enter your position"
          value={position}
          toTheChanged={(value) => setPosition(value)}
        />
        <TextField
          label="Image"
          placeholder="Enter the address of your image"
          value={image}
          toTheChanged={(value) => setImage(value)}
        />
        <DropDownList
          mandatory={true}
          label="Teams"
          items={teams}
          value={team}
          toTheChanged={(value) => setTeam(value)}
        />
        <Button>Create card</Button>
      </form>
    </section>
  );
};

export default Form;
