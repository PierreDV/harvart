import React from 'react';
import ImageGridItem from './image_grid_item';

const ImageGrid = (props) => {
  if(props.records.length > 0) {
    const imageItems = props.records.map(record => {
      if(record.images && record.images[0]) {
        return(
         <ImageGridItem
           image_url={record.images[0].baseimageurl}
           key={record.id}/>
        )
      }
    });
    return(
      <section className="image-grid">
        {imageItems}
      </section>
    )
  } else {
    return <section>No results found</section>
  }
}

export default ImageGrid;
