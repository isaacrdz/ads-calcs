import React, { Component } from "react";
import _ from "lodash";

export default class Zipcodes extends Component {
  state = {
    filterZip: [],
    searchTerm: "",
    result: []
  };

  onChangeZipcodeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { zipcodes } = this.props;
    const { searchTerm, result } = this.state;
    const newzip = _.find(zipcodes, zip => {
      return zip.zip === parseInt(searchTerm);
    });
    this.setState({ result: newzip });
  };

  render() {
    const { result } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 ">
            <h1>Find your service area</h1>
            <p>Please enter your zipcode to know if your area is covered</p>
            <form onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter a zipcode here"
                    name="searchTerm"
                    value={this.state.searchTerm}
                    onChange={this.onChangeZipcodeHandler}
                  />
                </div>
              </div>
              <button className="btn btn-primary btn-block btn-lg mt-3">
                Find a zipcode
              </button>
            </form>
          </div>
          <div className="col-md-4">
            <h2>Results</h2>
            <p>See your results</p>

            {result ? (
              <div>
                <ul class="list-group">
                  <li class="list-group-item">
                    <strong>Covered: </strong>
                    {result.covered ? "Tech Available" : ""}
                  </li>
                  <li class="list-group-item">
                    <strong>Zip: </strong>
                    {result.zip}
                  </li>
                  <li class="list-group-item">
                    <strong>State: </strong>
                    {result.state}
                  </li>
                  <li class="list-group-item">
                    <strong>County: </strong>
                    {result.county}
                  </li>
                  <li class="list-group-item">
                    <strong>City: </strong>
                    {result.city}
                  </li>
                </ul>
                {/* <button className=" btn btn-danger btn-lg btn-block">
                  Clean
                </button> */}
              </div>
            ) : (
              <div class="alert alert-danger" role="alert">
                No tech available
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
