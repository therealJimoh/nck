import React from "react";
import './paymentcards.css'
import { visa, discover, paypal } from "./import";

const Cards = () => (
  <>
    <span>
      <img src={visa} alt="visa" />
    </span>
    <span>
      <img src={discover} alt="discover" />
    </span>
    <span>
      <img src={paypal} alt="paypal" />
    </span>
  </>
);

const PaymentCards = () => {
  return (
    <>
      <div className="nck__paymentcards">
        <div className="nck__paymentcards-text">
          <h2>Payment Information</h2>
          <p>Choose your method of payment</p>
        </div>
        <div className="nck__paymentcards-cards">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default PaymentCards;
