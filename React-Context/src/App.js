import React, { Component } from 'react';
import { MyProvider } from './MyProvider';
import Family from './Family';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I am the app</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}


export default App;
