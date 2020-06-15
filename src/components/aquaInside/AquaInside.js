import React, { Component } from "react";
import products from "./products.json";
import ProductList from "../commons/ProductList";
import Total from "./Total";

class AquaInside extends Component {
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
        <div className="row mb-3">
          <div className="col-md-6">
            <h2>
              <i className="fas fa-users" /> Aqua Inside
            </h2>
          </div>
          <div className="col-md-6">
            <button className="btn btn-success btn-block">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScByVxq1PS8dpjURT5-ojn4uKZ5-oaT_cbg23pRvjk-6YORXQ/viewform"
                lassName="btn btn-success btn-block"
                style={{ color: "white" }}
              >
                Finance Form
              </a>
            </button>
          </div>
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
export default AquaInside;
