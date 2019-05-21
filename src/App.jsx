import React, { Component } from 'react';

// This is the primary component
class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: 'John',
    };
  }

  render() {
    const { firstName } = this.state;
    return (
      <div>
        <h3>
          Hello
          {firstName}
          , welcome to React App.
        </h3>
      </div>
    );
  }
}

export default App;
