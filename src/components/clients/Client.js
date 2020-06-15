import React, { Component } from "react";
import products from "./products.json";
import ProductList from "../commons/ProductList";
import Total from "./Total";

class Client extends Component {
  state = {
    products: products
  };
  onChange = (index, val) => {
    this.setState({
      products: this.state.products.map((product, i) =>
        i === index ? { ...product, count: val } : product
      )
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h2>
              <i className="fas fa-users" />
              Calculator
            </h2>
          </div>
          <div className="col-md-6"></div>
        </div>
        <table className="table table-bordered">
          <thead className="thead-inverse">
            <tr>
              <th>Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <ProductList
              products={this.state.products}
              onChange={this.onChange}
            />
          </tbody>
        </table>
        <Total products={this.state.products} />
      </div>
    );
  }
}
export default Client;
