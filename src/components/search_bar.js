import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }
  render() {
    return(
      <div>
        <button>Search</button>
        <input
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)}
        />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
  }
}

export default SearchBar;
