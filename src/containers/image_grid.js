import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageGridItem from '../components/image_grid_item';

class ImageGrid extends Component {
  renderImage(imageRecords) {
    return(
      <ImageGridItem image_url={imageRecords[0]["images"][0]["baseimageurl"]} />
    )
  }
  render() {
    console.log(this.props.images)
    return(
      <div>{this.props.images.map(this.renderImage)}</div>
    )
  }
}

function mapStateToProps({ images }) {
  return { images };
}

export default connect(mapStateToProps)(ImageGrid);
