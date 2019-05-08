import React, {Component} from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class ImageInput extends Component {
  constructor(props) {
    super(props);
    this.id = 'image-' + uuid();
    this.placeholder = 'https://via.placeholder.com/200';
  }

  onChange = event => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    this.props.onUpload(url);
  };

  render() {
    const image = this.props.image || this.placeholder;

    return (
      <div>
        <div className="form-group">
          <label className="btn btn-success" htmlFor={this.id}>
            Upload image
          </label>
          <input id={this.id} type="file" className="d-none" onChange={this.onChange} />
          <div>
            <img src={image} alt="" className="img-thumbnail"/>
          </div>
        </div>
      </div>
    );
  }
}

ImageInput.propTypes = {
  image: PropTypes.string,
  onUpload: PropTypes.func.isRequired,
};

export default ImageInput;