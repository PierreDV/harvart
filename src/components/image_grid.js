import React from 'react';
import ImageGridItem from './image_grid_item';

const ImageGrid = (props) => {
  const imageItems = props.records.map((record) => {
    if(record.images[0]) {
      return <ImageGridItem image_url={record.images[0].baseimageurl} key={record.id}/>
    }
  });
  return(
    <section className="image-grid">
      {imageItems}
    </section>
  )
}

export default ImageGrid;
