import React, { Component } from "react";
import products from "./products.json";
import ProductList from "../commons/ProductList";
import Total from "./Total";

class NewCalc extends Component {
  state = {
    productName: "",
    price: "",
    products: products
  };
  onChange = (index, val) => {
    this.setState({
      products: this.state.products.map((product, i) =>
        i === index ? { ...product, count: val } : product
      )
    });
  };

  onChangeInputHandler = e =>
    this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    const { products } = this.state;
    e.preventDefault();

    const loginData = {
      id: 35,
      productName: this.state.productName,
      price: this.state.price,
      count: "0"
    };
    this.setState(prevState => ({
      products: [...prevState.products, loginData]
    }));

    this.setState({ productName: "", price: "" });
  };

  render() {
    return (
      <div>
        <div className="row mb-3">
          <div className="col-md-6 ">
            <h2 className="">
              <i className="fas fa-users" /> NewCalc Calculator
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
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="product"
                name="productName"
                value={this.state.productName}
                onChange={this.onChangeInputHandler}
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                name="price"
                value={this.state.price}
                onChange={this.onChangeInputHandler}
              />
            </div>
          </div>
          <button className="btn btn-primary btn-block btn-lg mt-3">
            Add Equipment
          </button>
        </form>
      </div>
    );
  }
}
export default NewCalc;
