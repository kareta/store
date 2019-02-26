import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <Menu width={200}>
        <Link to="/">
          <FontAwesomeIcon icon={faTshirt} />
          <span>Products</span>
        </Link>
      </Menu>
    );
  }
}

export default Sidebar;