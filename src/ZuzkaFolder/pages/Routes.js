import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Events from "./Events";
import Header from "./Header";
import Footer from "./Footer";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={Events} />
        {/* <Route exact path="/events/:id" component={EventDetail} /> */}
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
