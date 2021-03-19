import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SingleProduct from "../pages/Product";
import Explore from "../pages/Explore";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Explore} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/product/:VIN" component={SingleProduct} />
      <Route exact path="/howWorks" component={Explore} />
      <Route exact path="/tradeInEstimator" component={Explore} />
      <Route exact path="/contact" component={Explore} />
    </Switch>
  </Router>
);

export default Routes;
