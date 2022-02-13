import React, { Component } from "react";
import "./paymentinfo.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

class PaymentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cvc: "",
      expiry: "",
      focus: "",
      name: "John Doe",
      number: "",
    };
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <div className="nck__paymentinfo">
          <div className="nck__paymentinfo-cards">
            <Cards
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focused={this.state.focus}
              name={this.state.name}
              number={this.state.number}
            />
          </div>
          <div className="nck__paymentinfo-form">
            <form>
              <div className="nck__paymentinfo-form-wrapper">
                <div className="nck__paymentinfo-form-inputs">
                  <div className="nck__paymentinfo-input-flex1">
                    <div className="nck__paymentinfo-form-container">
                      <label htmlFor="Credit Card Number">
                        Credit card number
                      </label>
                      <input
                        type="tel"
                        name="number"
                        maxLength="19"
                        placeholder="Card Number"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                      />
                    </div>
                    <div className="nck__paymentinfo-form-container">
                      <label htmlFor="Security code">Security code</label>
                      <input
                        type="tel"
                        name="cvc"
                        placeholder="Security code"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                      />
                    </div>
                  </div>
                  <div className="nck__paymentinfo-input-flex2">
                    <div className="nck__paymentinfo-form-container">
                      <label htmlFor="Expiration date">Expiration date</label>
                      <input
                        type="tel"
                        name="expiry"
                        placeholder="Expiry date"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                      />
                    </div>

                    <div className="nck__paymentinfo-form-container">
                      <label htmlFor="Postal Code">Postal code</label>
                      <input
                        type="tel"
                        name="postal code"
                        placeholder="Postal code"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                      />
                    </div>
                  </div>
                </div>
                <div className="nck__paymentinfo-checkbox">
                  <label className="nck__paymentinfo-checkbox-label">
                    <input type="radio" checked="checked" name="radio" />
                    <span className="nck__paymentinfo__checkbox-checkmark"></span>
                  </label>
                  <p> Use this card for next time purchase </p>
                </div>
                <input type="submit" value="Add Card" />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default PaymentInfo;
