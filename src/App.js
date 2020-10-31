import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavbarPage from './components/NavbarPage';

function App() {
  return (

        <div>
          <Router>
              <Switch>
                <Route exact path="/" component={NavbarPage} />
                {/* <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} /> */}
              </Switch>
          </Router>
        </div>
  )
}

export default App;
