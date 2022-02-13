import React from "react";
import { TotalCards } from "../../components";

const Total = () => {
  return (
    <>
      <div className="nck__total">
          <TotalCards title="Subtotal" amount="₦2,497.00" />
          <TotalCards title="Estimation TAX" amount="₦119.64" />
          <TotalCards title="Promotional Code" promo=":Z4KXLM9A" amount="₦-60.00" />
      </div>
    </>
  );
};

export default Total;
