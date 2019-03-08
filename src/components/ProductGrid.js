import React from 'react';
import ProductGridTable from "./ProductGridTable";
import Pagination from './Pagination';
import {connect} from 'react-redux';
import PropTypes  from 'prop-types';
import {Link} from "react-router-dom";

class ProductGrid extends React.Component {

  state = {
    pageCount: 15,
  };

  onPageClick = () => {

  };

  render() {
    const { products } = this.props;

    return (
      <div className="container">
        <h3>Products</h3>
        <div className="form-group">
          <Link to="products/new">
            <button className="btn btn-success">Add</button>
          </Link>
        </div>
        <ProductGridTable products={products}/>
        <Pagination
          pageCount={this.state.pageCount}
          onPageClick={this.onPageClick}
        />
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