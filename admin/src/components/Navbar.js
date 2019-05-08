import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import PropTypes  from 'prop-types';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="btn" onClick={this.props.onBarsClick}>
            <FontAwesomeIcon icon={faBars} />
          </li>
        </ul>

        <div className="navbar-brand mr-auto">Store</div>

        <ul className="navbar-nav">
          <li>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Logout
          </li>
        </ul>
      </nav>
    );
  }
}

Navbar.propTypes = {
  onBarsClick: PropTypes.func.isRequired,
};

export default Navbar;