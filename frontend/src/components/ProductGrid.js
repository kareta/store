import React, {Component} from 'react';
import {fetchProductPage, setProductPage} from "../actions/productActions";
import {connect} from 'react-redux';
import PropTypes  from 'prop-types';
import * as qs from "qs";
import ProductCell from "./ProductCell";

class ProductGrid extends Component {

  componentDidMount() {
    const query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
    const page = query.page ? Number(query.page) : 1;
    this.props.fetchProductPage(page);
  }

  render() {
    const products = this.props.products.map(product =>
      <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
        <ProductCell product={product} />
      </div>
    );

    return (
      <div className="container">
        <div className="row">
          {products}
        </div>
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