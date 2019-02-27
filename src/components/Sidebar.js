import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';
import PropTypes  from 'prop-types';

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <Menu
        width={200}
        isOpen={this.props.isOpen}
        customBurgerIcon={false}
        onStateChange={this.props.onToggle}
      >
        <Link to="/">
          <FontAwesomeIcon icon={faTshirt} />
          <span>Products</span>
        </Link>
      </Menu>
    );
  }
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default Sidebar;