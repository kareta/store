import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ProductCell.css';

class ProductCell extends Component {

  addToCart = () => console.log(`Add to cart ${this.props.product.name}`);

  render() {
    let sizes = [];
    if (this.props.product.sizes) {
      sizes = this.props.product.sizes.map(size =>
        <span key={size} className="size">{size}</span>
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

          <div className="product-card-info-price">{this.props.product.price} грн</div>
          <div className="product-card-info-buy-button btn" onClick={this.addToCart}>
            Купить
          </div>

          <div className="size-picker">
            Размеры:
            {sizes}
          </div>
        </div>
      </div>
    );
  }
}

ProductCell.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCell;
