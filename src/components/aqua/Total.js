import React, { Component } from "react";

class Total extends Component {
  render() {
    const { products } = this.props;

    const allProducts = products.reduce(
      (sum, i) => (sum += parseFloat(i.count) * parseFloat(i.price)),
      0
    );

    const aofinalTotal = (300 + 250 + allProducts) * 1.3;

    const aomonthlyFinance = aofinalTotal * 0.0145;

    return (
      <div className="p-3 mb-2 bg-dark text-white text-center mr-10">
        <h3>
          Aqua Outside Sales Total :${" "}
          {allProducts === 0
            ? "0"
            : aofinalTotal.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
        </h3>
        <h3>
          Aqua Outside Sales Monthly Finance :${" "}
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
