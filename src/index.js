import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";

ReactDOM.render(
  <Router>
    <Switch>
      <div className="fill-window">
        <Route exact path="/" component={App} />
        <Route exact path="/about-us" component={AboutMe} />
        <Route path="/home" component={App} />
        <Route path="/products" component={App} />
        <Route path="/demos" component={App} />
        <Route path="/contact-us" component={App} />
      </div>
    </Switch>
  </Router>,
  document.getElementById("root")
);
