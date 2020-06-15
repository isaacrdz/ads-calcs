import React, { Component } from "react";
import commision from "./commission.json";
import Commision from "./Commision.js";

class PayScale extends Component {
  state = {
    commision: commision,
    selectedCommission: null
  };

  handleSelectCommission = commission => {
    this.setState({
      selectedCommission: commission
    });
  };

  render() {
    const { commision, selectedCommission } = this.state;

    return (
      <Commision
        selectedCommission={this.handleSelectCommission}
        commision={commision}
      />
    );
  }
}
export default PayScale;
