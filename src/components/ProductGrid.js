import React from 'react';
import ProductGridTable from "./ProductGridTable";
import {connect} from 'react-redux';
import PropTypes  from 'prop-types';
import {Link} from "react-router-dom";

class ProductGrid extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <div className="container">
        <Link to="products/new">
          <button className="btn btn-success">Add</button>
        </Link>
        <ProductGridTable products={products}/>
      </div>
    );
  }
}

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  products: state.product.products,
});

export default connect(mapStateToProps)(ProductGrid);