import React, { Component } from 'react';
import ProductGrid from './components/ProductGrid';
import {Switch} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import ProductEditor from "./components/ProductEditor";
import Sidebar from "./components/Sidebar";
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Sidebar />
        <Switch>
          <Route exact path='/' component={ProductGrid}/>
          <Route path='/products/:id' component={ProductEditor}/>
        </Switch>
      </Provider>
    );
  }
}

export default App;
