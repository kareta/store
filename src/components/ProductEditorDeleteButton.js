import React from "react";

const ProductEditorDeleteButton = ({ onClick }) => (
  <button type="button" className="btn btn-danger" onClick={onClick}>
    Delete
  </button>
);

export default ProductEditorDeleteButton;