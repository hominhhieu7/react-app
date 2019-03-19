import React, { Component } from 'react';
import LoginPage from './page/LoginPage'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    const Login = () => {
      return (
        <LoginPage />
      );
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
