import React from 'react';
import ProductGridTable from "./ProductGridTable";
import Pagination from './Pagination';
import { connect } from 'react-redux';
import PropTypes  from 'prop-types';
import { Link } from "react-router-dom";
import { setProductPage } from "../actions/productActions";

class ProductGrid extends React.Component {

  componentDidMount() {
    this.props.setProductPage(0);
  }

  onPageClick = ({ selected }) => {
    this.props.setProductPage(selected);
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
          pageCount={this.props.pageCount}
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
  products: state.product.page.map(
    id => state.product.products.find(product => product.id === id)
  ),
  pageCount: state.product.products.length / state.product.perPage,
});

export default connect(
  mapStateToProps,
  { setProductPage }
)(ProductGrid);