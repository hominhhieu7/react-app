import React, { Component } from 'react';
import {  BrowserRouter } from 'react-router-dom';
import Main from '../components/Main';
import { Provider } from 'react-redux';
import { ConfigureStore } from '../store/configureStore';

const store = ConfigureStore();


class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <BrowserRouter >
            <Main />
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
