import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Project from "./components/Project";
import Footer from "./components/Footer";
import info from "./info.json";
import "./App.css";

function App() {
  const [state] = useState(info);

  return (
    <Router>
      <Header />
      <div>
        <Route exact path="/">
          <div className="project-container">
            {state.map((item) => (
              <Project item={item} />
            ))}
          </div>
        </Route>
        <Route exact path="/about-me">
          <Aboutme />
        </Route>
      </div>
      <Footer />
    </Router>

  );
}

export default App;
