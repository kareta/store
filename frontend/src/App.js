import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import Route from 'react-router-dom/es/Route';
import { Provider } from 'react-redux';
import store from './store';
import ProductGrid from './components/ProductGrid';
import Header from './components/Header';
import Footer from "./components/Footer";

//Bootstrap dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path='/' component={ProductGrid}/>
        </Switch>
        <Footer />
      </Provider>
    );
  }
}

export default App;
