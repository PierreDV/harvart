import React from 'react';
import ReactDOM from 'react-dom';
import SC from 'node-soundcloud';

const API_KEY = '81c02e10-19a3-11e9-a436-ede6838aae81';

class App extends React.Component {
  render() {
    return(
      <button>Sign into Soundcloud</button>
    );
  };
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
