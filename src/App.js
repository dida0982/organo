import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {

  const teams = [
    {
      name: 'Programmer',
      PrimaryColor: '#57C278',
      SecondaryColor: '#D9F7E9'   
    },
    {
      name: 'Front-End',
      PrimaryColor: '#82CFFA',
      SecondaryColor: '#E8F8FF'   
    },
    {
      name: 'Data Science',
      PrimaryColor: '#A6D157',
      SecondaryColor: '#E0F8E2'   
    },
    {
      name: 'Devops',
      PrimaryColor: '#E06B69',
      SecondaryColor: '#FDE7E8'   
    },
    {
      name: 'UX e Design',
      PrimaryColor: '#DB6EBF',
      SecondaryColor: '#FAE9F5'   
    },
    {
      name: 'Mobile',
      PrimaryColor: '#FFBA05',
      SecondaryColor: '#FFF5D9'   
    },
    {
      name: 'Innovation and management',
      PrimaryColor: '#FF8A29',
      SecondaryColor: '#FFEEDF'   
    },
  ]

  const [collaborators, setCollaborator] = useState([]);

  const toTheNewRegisteredCollaborator = (collaborator) => {
    console.log(collaborator);
    setCollaborator([...collaborators, collaborator]);
  };
  return (
    <div className="App">
      <Banner />
      <Form
        toTheRegisteredCollaborator={(collaborator) =>
          toTheNewRegisteredCollaborator(collaborator)
        }
      />

        {teams.map(team => <Team key={team.name} name = {team.name} PrimaryColor={team.PrimaryColor} SecondaryColor={team.SecondaryColor  }/>)}

      <Team name="Programmer"/>
    </div>
  );
}

export default App;
