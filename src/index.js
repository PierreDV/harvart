import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import ImageGrid from './components/image_grid';
import './styles/style.scss'

const API_KEY = '81c02e10-19a3-11e9-a436-ede6838aae81';
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
    const PERSON_URL = `https://api.harvardartmuseums.org/person?apikey=${API_KEY}&q=displayname:${term}&size=1`;
    fetch(PERSON_URL)
      .then(res => res.json())
      .then(
        (result) => {
          const OBJECT_URL = `https://api.harvardartmuseums.org/object?apikey=${API_KEY}&person=${result.records[0].id}`;
          console.log(result);
          return fetch(OBJECT_URL)
            .then(res => res.json())
            .then(
              (result) => {
                console.log(result);
                this.setState({
                  isLoaded: true,
                  result: result
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

  // serialize(obj) {
  //   const str = [];
  //   for (var p in obj) {
  //     if (obj.hasOwnProperty(p)) {
  //       str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
  //     }
  //     return str.join("&");
  //   }
  // }

  componentDidMount() {
    this.imageSearch('Titian');
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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
