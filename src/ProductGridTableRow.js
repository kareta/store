import React from 'react';

const ProductGridTableRow = ({ product }) => (
  <tr>
    <td>
      {product.name}
    </td>
    <td>
      {product.price}
    </td>
  </tr>
);

export default ProductGridTableRow;