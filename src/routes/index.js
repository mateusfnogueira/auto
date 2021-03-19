import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "../styles/global";

import Header from "../components/Header/index";
import HeaderMobile from "../components/Header/Mobile";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import SingleProduct from "../pages/Product/index";
import Explore from "../pages/Explore/index";

const Routes = () => (
  <Router>
    <Header />
    <HeaderMobile />
    <GlobalStyle />
    <Switch>
      <Route path="/" exact={true} component={Explore} />
    </Switch>
    <Switch>
      <Route
        path="/explore"
        exact={true}
        render={(props) => <Explore {...props} />}
      />
    </Switch>
    <Switch>
      <Route path="/product/:VIN" exact={true} component={SingleProduct} />
    </Switch>
    <Switch>
      <Route path="/howWorks" exact={true} component={Explore} />
    </Switch>
    <Switch>
      <Route path="/tradeInEstimator" exact={true} component={Explore} />
    </Switch>
    <Switch>
      <Route path="/contact" exact={true} component={Explore} />
    </Switch>
    <Newsletter />
    <Footer />
  </Router>
);

export default Routes;
