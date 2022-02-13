import React from "react";
import "./totalcard.css";

const TotalCard = ({ title, amount, promo }) => {
  return (
    <>
      <div className="nck__totalcard">
        <div className="nck__totalcard-container">
            <h6>
              {title} <span> {promo} </span>
            </h6>
            <h6> {amount} </h6>
        </div>
      </div>
    </>
  );
};


export default TotalCard;
