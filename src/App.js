import "./App.css";
import { Navbar } from "./components";


const Hr = () => (
    <div className="hr"></div>
);

function App() {
  return (
    <div className="App">
      <div className="navbar__container">
        <Navbar />
      </div>
      <Hr />
    </div>
  );
}

export default App;
