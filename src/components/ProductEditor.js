import React, {Component} from 'react';

class ProductEditor extends Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        id is {id}
      </div>
    );
  }
}

export default ProductEditor;