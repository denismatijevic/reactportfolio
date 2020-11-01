import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom"
import NavbarPage from './components/NavbarPage';
import Contact from './components/Contact';
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (

    <>
      <NavbarPage />
      <div>
        <About />
      </div>
        <div>
          <div>
            <Projects />
          </div>
          <Router>
              <Switch>
                <Contact />
              </Switch>
          </Router>
        </div>
    </>
  )
}

export default App;
