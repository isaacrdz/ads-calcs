import React, { Component } from "react";
import zipcodes from "./zipcodes.json";
import Zipcodes from "./Zipcodes";

class ZipcodesPage extends Component {
  state = {
    zipcodes: zipcodes
  };

  render() {
    const { zipcodes } = this.state;
    return (
      <div>
        <Zipcodes zipcodes={zipcodes} />
      </div>
    );
  }
}

export default ZipcodesPage;
