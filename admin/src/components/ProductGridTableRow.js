import React from 'react';
import { Link } from 'react-router-dom';

const ProductGridTableRow = ({ product }) => (
  <tr>
    <td>
      <Link to={'products/' + product.id}>{product.name}</Link>
    </td>
    <td>
      {product.price}
    </td>
  </tr>
);

export default ProductGridTableRow;