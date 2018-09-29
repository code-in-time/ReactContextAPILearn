
import React, { Component } from 'react';

// first we will make a new context
export const MyContext = React.createContext();

// Then create a provider Component
export class MyProvider extends Component {
    state = {
      name: 'Wes',
      age: 100,
      cool: true,
      yo: 'cool',
    }
    render() {
      return (
        <MyContext.Provider value={{
          state: this.state,
          growAYearOlder: () => this.setState({
            age: this.state.age + 1
          })
        }}>
          {this.props.children}
        </MyContext.Provider>
      )
    }
  }