import React from 'react';
import ProductGridTable from "./ProductGridTable";
import Pagination from './Pagination';
import { connect } from 'react-redux';
import PropTypes  from 'prop-types';
import { Link } from "react-router-dom";
import { setProductPage, fetchProductPage } from "../actions/productActions";
import * as qs from "qs";

class ProductGrid extends React.Component {

  componentDidMount() {
    const query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
    const page = query.page ? Number(query.page) : 1;
    this.props.fetchProductPage(page);
  }

  onPageClick = ({ selected }) => {
    const page = Number(selected) + 1;
    this.props.history.push({
      pathname: '',
      search: '?page=' + page
    });
    this.props.fetchProductPage(page);
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
  pageCount: state.product.pageCount,
});

export default connect(
  mapStateToProps,
  { setProductPage, fetchProductPage }
)(ProductGrid);