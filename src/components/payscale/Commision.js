import React, { Component, Fragment } from "react";

class Commision extends Component {
  render() {
    const { commision, selectedCommission } = this.props;
    return (
      <Fragment>
        <h2>Commision</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Install/Qtr</th>
              <th scope="col">0 Star</th>
              <th scope="col">1 Star</th>
              <th scope="col">2 Star</th>
              <th scope="col">3 Star</th>
              <th scope="col">4 Star</th>
              <th scope="col">5 Star</th>
            </tr>
          </thead>
          <tbody>
            {commision.map(cmmsn => (
              <tr key={cmmsn.id}>
                <td onClick={() => selectedCommission(cmmsn)}>
                  {cmmsn.qualityLevel}{" "}
                </td>
                <td onClick={() => selectedCommission(cmmsn)}>
                  ${cmmsn.zeroStars}
                </td>
                <td onClick={() => selectedCommission(cmmsn)}>
                  ${cmmsn.oneStars}
                </td>
                <td onClick={() => selectedCommission(cmmsn)}>
                  ${cmmsn.twoStars}
                </td>
                <td onClick={() => selectedCommission(cmmsn)}>
                  ${cmmsn.threeStars}
                </td>
                <td onClick={() => selectedCommission(cmmsn)}>
                  ${cmmsn.fourStars}
                </td>
                <td onClick={() => selectedCommission(cmmsn)}>
                  ${cmmsn.fiveStars}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}
export default Commision;
