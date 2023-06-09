import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import "./App.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Information from "./pages/Information.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/information" component={Information} />
        </div>
      </Router>
    );
  }
}

export default App;
