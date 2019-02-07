import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageGridItem from '../components/image_grid_item';

class ImageGrid extends Component {
  render() {
    const records = this.props.records;

    if(records.error){
      return <div>{records.error}</div>;
    } else if(records.isFetching) {
      return <div>Loading...</div>;
    };
    console.log(records.items)
    return(
      <div className='row image-grid'>
        {records.items.map(record => {
          if(record.images) {
            return(
              <ImageGridItem
                image_url={record.images[0].baseimageurl}
                description={record.title}
                key={record.id}
              />
            );
          }
        })}
      </div>
    )   
  }
}

function mapStateToProps({ records }) {
  return { records };
}

export default connect(mapStateToProps)(ImageGrid);
