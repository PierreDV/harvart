import React from 'react';

import SearchBar from '../containers/search_bar';
import ImageGrid from '../containers/image_grid';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <div className="container">
            <div className="jumbotron-heading">
              <h1>Harv-Art</h1>
            </div>
          
            <p className="lead text-muted">Search the Harvard Art Gallery's collection of paintings, photos and documents!</p>
            <SearchBar />
          </div>
          
        </div>
        <ImageGrid />
      </div>


    )
  };
}

export default App;