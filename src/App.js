import React from "react";
import "./App.css";
import Navibar from "./components/Navibar";
import CarouselFront from "./components/CarouselFront";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp4 from "./components/Comp4";
import Comp3 from "./components/Comp3";
import Comp5 from "./components/Comp5";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import { useAuth0 } from "@auth0/auth0-react";
import $ from "jquery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
require("dotenv").config();

$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Router>
      <Navibar />
      <Switch>
        <PrivateRoute exact path="/comp1">
          <Comp1 />
        </PrivateRoute>
        <Route exact path="/comp2">
          <Comp2 />
        </Route>
        <Route exact path="/comp4">
          <Comp4 />
        </Route>
        <Route exact path="/comp3">
          <Comp3 />
        </Route>
        <Route exact path="/comp5">
          <Comp5 />
        </Route>
        <Route exact path="/">
          <CarouselFront />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
