import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ProductCell.css';

class ProductCell extends Component {
  state = {
    selectedSize: null,
  };

  selectSize = selectedSize => this.setState({ selectedSize });

  addToCart = () => console.log(`Add to cart ${this.props.product.name}`);

  render() {
    let sizes = [];
    if (this.props.product.sizes) {
      sizes = this.props.product.sizes.map(size =>
        <div
          key={size}
          className={'size ' + (this.state.selectedSize === size ? 'selected' : '')}
          onClick={() => this.selectSize(size)}>
          {size}
        </div>
      );
    }

    return (
      <div className="ProductCell product-card">
        <div className="thumbnail-wrapper">
          <img src="/test-shoe-photo.jpeg" alt="Shoe" className="thumbnail-image"/>
        </div>

        <div className="product-card-info">
          <div className="product-card-info-name">
            { this.props.product.name }
          </div>
          <div className="size-picker">
            {sizes}
          </div>
        </div>
        <div className="product-card-info-price">{this.props.product.price} грн</div>
        <div className="product-card-info-buy-button btn" onClick={this.addToCart}>
          <i className="fa fa-shopping-cart"></i>
          Купить
        </div>
      </div>
    );
  }
}

ProductCell.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCell;
