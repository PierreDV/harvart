import React from 'react';
import ImageGridItem from './image_grid_item';

const ImageGrid = (props) => {
  const imageItems = props.images.map((image) => {
    return <ImageGridItem image_url={image.baseimageurl} key={image.id}/>
  });
  return(
    <ul>
      {imageItems}
    </ul>
  )
}

export default ImageGrid;
