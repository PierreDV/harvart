import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageGridItem from '../components/image_grid_item';

class ImageGrid extends Component {
  render() {
    if(this.props.images.error){
      return <div>{this.props.images.error}</div>
    } else if(this.props.images.isFetching){
      return <div>Loading...</div>
    }

    return(
      <div className='image-grid'>
        {this.props.images.items.map(image => {
          return(
            <ImageGridItem
              image_url={image.images[0].baseimageurl}
              key={image.id}
            />)
        })}
      </div>
    )   
  }
}

function mapStateToProps({ images }) {
  return { images };
}

export default connect(mapStateToProps)(ImageGrid);
