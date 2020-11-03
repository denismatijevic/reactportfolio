import React, { useRef, } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom"
import NavbarPage from './components/NavbarPage';
import Contact from './components/Contact';
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  const linkTo = useRef (null)
  const moveToAbout = () => { linkTo.current.scrollIntoView({ behavior:"smooth" })}
  const linkTo2 = useRef (null)
  const moveToProjects = () => { linkTo2.current.scrollIntoView({ behavior:"smooth" })}
  const linkTo3 = useRef (null)
  const moveToContact = () => { linkTo3.current.scrollIntoView({ behavior:"smooth" })}
  return (

    <>
      <NavbarPage moveToAbout={moveToAbout} moveToProjects={moveToProjects} moveToContact={moveToContact} />
      <div ref={linkTo}>
        <About />
      </div>
      <div ref={linkTo2}>
        <Projects />
      </div>
      <div ref={linkTo3}>
        <Router>
          <Switch >
            <Contact />
          </Switch>
        </Router>
      </div>
    </>
  )
}

export default App;
