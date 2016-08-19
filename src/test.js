import React from 'react';
import ReactDOM from 'react-dom';

let App = React.createClass({
  render() {
      return(<h1>Hello, world!</h1>);
  }
});

ReactDOM.render(<App/>, document.getElementById('content'));