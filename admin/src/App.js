import React, { Component } from 'react';
import ProductGrid from './components/ProductGrid';
import {Switch} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import ProductEditor from "./components/ProductEditor";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Provider } from 'react-redux';
import store from './store';

//Bootstrap dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';

class App extends Component {

  state = {
    sidebarIsOpen: false,
  };

  onBarsClick = () => {
    this.setState({
      sidebarIsOpen: !this.state.sidebarIsOpen,
    });
  };

  onSidebarToggle = ({ isOpen }) => {
    this.setState({
      sidebarIsOpen: isOpen,
    });
  };

  render() {
    return (
      <Provider store={store}>
        <Sidebar isOpen={this.state.sidebarIsOpen} onToggle={this.onSidebarToggle}/>
        <Navbar onBarsClick={this.onBarsClick}/>
        <Switch>
          <Route exact path='/' component={ProductGrid}/>
          <Route path='/products/:id' component={ProductEditor}/>
        </Switch>
      </Provider>
    );
  }
}

export default App;
