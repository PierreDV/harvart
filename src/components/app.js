import React from 'react';

import SearchBar from '../containers/search_bar';
import ImageGrid from '../containers/image_grid';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Harv-Art</h1>
        <p>Search the Harvard Art Gallery's collection of paintings, photos and documents!</p>
        <SearchBar />
        <ImageGrid />
      </div>
    )
  };
}

export default App;