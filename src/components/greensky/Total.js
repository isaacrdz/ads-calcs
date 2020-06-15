import React, { Component } from "react";

class Total extends Component {
  render() {
    const { products } = this.props;

    const allProducts = products.reduce(
      (sum, i) => (sum += parseFloat(i.count) * parseFloat(i.price)),
      0
    );

    const aofinalTotal = (300 + 250 + allProducts) * 1.3;

    const aomonthlyFinance = aofinalTotal / 60;

    return (
      <div className="p-3 mb-2 bg-success text-white text-center mr-10">
        <h3>
          GreenSky Loan Amount:${" "}
          {allProducts === 0
            ? "0"
            : aofinalTotal.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
        </h3>
        <hr />
        <h3>
          GreenSky Monthly Finance :$
          {allProducts === 0
            ? "0"
            : aomonthlyFinance.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
        </h3>
      </div>
    );
  }
}
export default Total;
