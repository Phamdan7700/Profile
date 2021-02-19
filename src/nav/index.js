import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../pages/home";
import Loading from "../pages/loading";

export default function Nav() {
  return (
    <Router>
     <Switch>
        <Route exact path="/" component={Loading} />
        <Route path="/home" component={Home} />        
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
}