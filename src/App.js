import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppNavBar from "./components/layout/AppNavbar";
import Dashboard from "./components/layout/Dashboard";
import Aqua from "./components/aqua/Aqua";
import Greensky from "./components/greensky/Greensky";
import AquaInside from "./components/aquaInside/AquaInside";
import Newcalc from "./components/newcalc/Newcalc";
import PayScale from "./components/payscale/PayScale";
import ZipcodesPage from "./components/zipcodes/ZipcodesPage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/aqua" component={Aqua} />
            <Route exact path="/greensky" component={Greensky} />
            <Route exact path="/aquaInside" component={AquaInside} />
            <Route exact path="/newcalc" component={Newcalc} />
            <Route exact path="/zipcodes" component={ZipcodesPage} />
            <Route exact path="/payscale" component={PayScale} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
