import "./App.css";
import { Navbar, PaymentCards } from "./components";
import { CompletePay, PaymentInfo, Total } from "./containers";


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
      <Hr />
      <Total />
      <Hr />
      <CompletePay />
    </div>
  );
}

export default App;
