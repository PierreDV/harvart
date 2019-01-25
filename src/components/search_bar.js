import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }
  render() {
    return(
      <form>
        <button onClick={(e) => this.onSubmit(e,this.state.term)}>Search</button>
        <input
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)}
          onSubmit={(e) => this.onSubmit(e,this.state.term)}
        />
      </form>
    )
  }

  onSubmit(e, term) {
    e.preventDefault();
    this.props.onSubmit(term);
  }

  onInputChange(term) {
    this.setState({term});
  }
}

export default SearchBar;
