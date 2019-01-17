import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import ImageGrid from './components/image_grid';

const API_KEY = '81c02e10-19a3-11e9-a436-ede6838aae81';
// https://github.com/harvardartmuseums/api-docs
const URL = `https://api.harvardartmuseums.org/image?apikey=${API_KEY}`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  imageSearch() {
    fetch(URL)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            result: result
          });
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
    this.imageSearch();
  }

  render() {
    const { error, isLoaded, result } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <ImageGrid images={result.records} />
        // <img src={result.records[0].baseimageurl} alt="First API request result" ></img>
    }
  };
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
