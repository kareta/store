import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="container text-center">
            <span className="copyright text-muted">
                &copy; {new Date().getFullYear()}, Обувь
            </span>
        </div>
      </footer>
    );
  }
}

export default Footer;