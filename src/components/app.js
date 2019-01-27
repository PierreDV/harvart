import React from 'react';

import SearchBar from './search_bar';
import ImageGrid from './image_grid';

const API_KEY = '81c02e10-19a3-11e9-a436-ede6838aae81';
const BASE_URL = 'https://api.harvardartmuseums.org/'
// https://github.com/harvardartmuseums/api-docs 

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
      this.imageSearch = this.imageSearch.bind(this);
    }
  
    imageSearch(term) {
      const PLACE_URL = `${BASE_URL}place?apikey=${API_KEY}&q=name:${term}&size=1`;
      fetch(PLACE_URL)
        .then(res => res.json())
        .then(
          (res) => {
            console.log(res);
            const OBJECT_URL =
              `${BASE_URL}object?apikey=${API_KEY}&place=${res.records[0].id}&q=people.role:Artist AND imagepermissionlevel:0`
            return fetch(OBJECT_URL)
              .then(res => res.json())
              .then(
                (res) => {
                  console.log(res)
                  this.setState({
                    isLoaded: true,
                    result: res
                  });
                },
                (error) => {
                  this.setState({
                    isLoaded: true,
                    error
                  });
                }
              )
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    componentDidMount() {
      this.imageSearch('Amsterdam');
    }
  
    render() {
      const { error, isLoaded, result } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
            <SearchBar onSubmit={this.imageSearch}/>
            <ImageGrid records={result.records} />
          </div>
        )
      }
    };
}

export default App;