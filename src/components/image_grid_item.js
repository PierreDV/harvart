import React from 'react';

const ImageGridItem = (props) => {
  return (
    <div className="col">
      <div className="thumbnail">
        <img src={props.image_url} alt="First API request result" ></img>
      </div>
      
    </div>
    
  );
};

export default ImageGridItem;
