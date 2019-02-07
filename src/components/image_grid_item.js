import React from 'react';

const ImageGridItem = (props) => {
  return (
    <div className="card">
      <img src={props.image_url} alt="First API request result" ></img>
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
      </div>
    </div>
    
  );
};

export default ImageGridItem;
