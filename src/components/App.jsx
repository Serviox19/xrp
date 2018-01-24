import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <h1>Root React Component</h1>
    );
  }
}

render(<App/>, document.getElementById('app'));
