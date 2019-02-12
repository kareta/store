import React, {Component} from 'react';
import uuid from "uuid";
import {connect} from "react-redux";
import PropTypes  from 'prop-types';
import {addProduct} from "../actions/productActions";

class ProductEditor extends Component {
  state = {
    name: null,
    price: null,
  };

  onSubmit = event => {
    event.preventDefault();

    const { name, price } = this.state;

    const product = {
      id: uuid(),
      name,
      price
    };

    this.props.addProduct(product);

    this.props.history.push('/');
  };

  onChange = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        <h3>{ id === 'new' ? 'Create a new product' : 'Edit the product' }</h3>

        <form className="col-md-6" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              name="price"
              type="number"
              min="1"
              step="any"
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-success">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

ProductEditor.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default connect(null, { addProduct })(ProductEditor);