import React, { Component } from "react";

class Total extends Component {
  render() {
    const { products } = this.props;

    const allProducts = products.reduce(
      (sum, i) => (sum += parseFloat(i.count) * parseFloat(i.price)),
      0
    );

    const aifinalTotal = 600 + 250 + 500 + allProducts;

    const aimonthlyFinance = aifinalTotal * 0.0145;

    return (
      <div className="p-3 mb-2 bg-info text-white text-center mr-10">
        <h3>
          Aqua Inside SalesTotal Price :${" "}
          {allProducts === 0
            ? "0"
            : aifinalTotal.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
        </h3>
        <h3>
          Aqua Inside Sales Monthly Financ :${" "}
          {allProducts === 0
            ? "0"
            : aimonthlyFinance.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
        </h3>
      </div>
    );
  }
}
export default Total;
