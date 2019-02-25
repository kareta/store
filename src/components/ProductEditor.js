import React, {Component} from 'react';
import uuid from "uuid";
import {connect} from "react-redux";
import PropTypes  from 'prop-types';
import {addProduct, deleteProduct, updateProduct} from "../actions/productActions";
import ProductEditorDeleteButton from "./ProductEditorDeleteButton";
import ImageInput from "./ImageInput";

class ProductEditor extends Component {
  state = {
    name: '',
    price: '',
    image: '',
  };

  onSubmit = event => {
    event.preventDefault();

    const id = this.props.match.params.id;

    const product = {
      id: id === 'new' ? uuid() : this.props.product.id,
      name: this.state.name,
      price: this.state.price,
      image: this.state.image,
    };

    if (id === 'new') {
      this.props.addProduct(product);
    } else {
      this.props.updateProduct(product);
    }

    this.props.history.push('/');
  };

  onDelete = () => {
    this.props.deleteProduct(this.props.match.params.id);
    this.props.history.push('/');
  };

  onChange = event => this.setState({ [event.target.name]: event.target.value });

  onImageUpload = image => this.setState({ image });

  initializeForm() {
    if (!this.props.product) {
      return;
    }

    this.setState({
      name: this.props.product.name,
      price: this.props.product.price,
      image: this.props.product.image,
    });
  }

  componentDidMount() {
    this.initializeForm();
  }

  render() {
    const id = this.props.match.params.id;

    let deleteButton = null;
    if (this.props.match.params.id !== 'new') {
      deleteButton = <ProductEditorDeleteButton onClick={this.onDelete} />;
    }

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
              value={this.state.name}
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
              value={this.state.price}
              onChange={this.onChange}
            />
          </div>
          <ImageInput image={this.state.image} onUpload={this.onImageUpload}/>
          <button type="submit" className="btn btn-success">
            Save
          </button>
          {deleteButton}
        </form>
      </div>
    );
  }
}

ProductEditor.propTypes = {
  addProduct: PropTypes.func.isRequired,
  product: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
  let product = null;
  if (ownProps.match.params.id !== 'new') {
    const products = state.product.products;
    const id = ownProps.match.params.id;
    product = products.find(product => product.id === id);
  }
  return { product };
};

export default connect(
  mapStateToProps,
  { addProduct, updateProduct, deleteProduct }
)(ProductEditor);