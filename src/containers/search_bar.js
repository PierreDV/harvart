import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchImagesAsync } from '../actions/index';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchImagesAsync(this.state.term);
    this.setState({term: '' });
  }

  onInputChange(event) {
    this.setState({term: event.target.value });
  }

  componentDidMount() {
    this.props.fetchImagesAsync('Amsterdam');
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit}>
        <button type="submit">Search</button>
        <input
          placeholder="Enter a place i.e. Amsterdam, Canada"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchImagesAsync }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
