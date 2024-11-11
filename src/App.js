import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form";

function App() {
  const [collaborators, setCollaborator] = useState([]);

  const toTheNewRegisteredCollaborator = (collaborator) => {
    console.log(collaborator);
    setCollaborator([...collaborators, collaborator])
  };
  return (
    <div className="App">
      <Banner />
      <Form
        toTheRegisteredCollaborator={(collaborator) =>
          toTheNewRegisteredCollaborator(collaborator)
        }
      />
    </div>
  );
}

export default App;
