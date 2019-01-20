import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }
  render() {
    return(
      <div>
        <button onClick={() => this.onSubmit(this.state.term)}>Search</button>
        <input
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)}
        />
      </div>
    )
  }

  onSubmit(term) {
    this.props.onSubmit(term);
  }

  onInputChange(term) {
    this.setState({term});
  }
}

export default SearchBar;
