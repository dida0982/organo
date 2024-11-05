import Banner from "./components/Banner/Banner";
import TextField from "./components/TextField";

function App() {
  return (
    <div className="App">
      <Banner />
      <TextField label="Name" placeholder="Enter your name" />
      <TextField label="Position" placeholder="Enter your position" />
      <TextField label="Image" placeholder="Enter the address of your image" />
    </div>
  );
}

export default App;
