import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <h1>Root React Component</h1>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
