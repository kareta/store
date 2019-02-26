import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <Menu width={200}>
        <Link to="/">Products</Link>
      </Menu>
    );
  }
}

export default Sidebar;