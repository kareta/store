import React, {Component} from 'react';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="/">
              Обувь
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="?gender=man">
                    <span>Мужская</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="?gender=woman">
                    <span>Женская</span>
                  </a>
                </li>
              </ul>

              <div className="nav-item cursor-pointer">
                <FontAwesomeIcon icon={faShoppingCart} /> Мой заказ
              </div>

            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;