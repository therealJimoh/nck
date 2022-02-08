import "./App.css";
import { Navbar, PaymentCards } from "./components";
import { PaymentInfo } from "./containers";


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
      <PaymentInfo />
    </div>
  );
}

export default App;
