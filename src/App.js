import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom"
import NavbarPage from './components/NavbarPage';
import Footer from './components/Footer';
import Picture from "./components/Picture";

function App() {
  return (

    <>
      <NavbarPage />
      <div>
        <Picture />
      </div>
        <div>
          <Router>
              <Switch>
                <Footer />
              </Switch>
          </Router>
        </div>
    </>
  )
}

export default App;
