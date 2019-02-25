import React from 'react';
import ProductGridTableRow from "./ProductGridTableRow";

const ProductGridTable = ({ products }) => (
  <table className="table">
    <thead>
    <tr>
      <th>
        Name
      </th>
      <th>
        Price
      </th>
    </tr>
    </thead>
    <tbody>
    {products.map(product => <ProductGridTableRow product={product} key={product.id}/>)}
    </tbody>
  </table>
);

export default ProductGridTable;

