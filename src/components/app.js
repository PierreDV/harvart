import React from 'react';

import SearchBar from '../containers/search_bar';
import ImageGrid from '../containers/image_grid';

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ImageGrid />
      </div>
    )
  };
}

export default App;