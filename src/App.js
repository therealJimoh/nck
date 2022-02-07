import "./App.css";
import { Navbar, PaymentCards } from "./components";


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
      <PaymentCards />
      
    </div>
  );
}

export default App;
