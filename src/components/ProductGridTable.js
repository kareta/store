import React from 'react';
import ProductGridTableRow from "./ProductGridTableRow";

const ProductGridTable = ({ products }) => (
  <table className="table">
    <tr>
      <th>
        Name
      </th>
      <th>
        Price
      </th>
    </tr>
    {products.map(product => <ProductGridTableRow product={product}/>)}
  </table>
);

export default ProductGridTable;

