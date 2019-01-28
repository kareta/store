import React, { Component } from 'react';
import ProductGrid from './ProductGrid';
import {Switch} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import ProductEditor from "./ProductEditor";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ProductGrid}/>
        <Route path='/products/:id' component={ProductEditor}/>
      </Switch>
    );
  }
}

export default App;
