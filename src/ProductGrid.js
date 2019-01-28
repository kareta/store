import React from 'react';
import ProductGridTable from "./ProductGridTable";

class ProductGrid extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: 'Boots',
        price: 99.99,
      },
      {
        id: 2,
        name: 'Shoes',
        price: 79.99,
      },
      {
        id: 3,
        name: 'Loafers',
        price: 49.99,
      },
    ],
  };

  render() {
    const { products } = this.state;

    return (
      <div className="container">
        <ProductGridTable products={products}/>
      </div>
    );
  }
}

export default ProductGrid;