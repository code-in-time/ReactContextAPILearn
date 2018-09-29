import React, { Component } from 'react';
import { MyContext } from "./MyProvider";

export class Person extends Component {
    render() {
      return (
        <div className="person">
          <MyContext.Consumer>
            {(context) => (
              <React.Fragment>
                <p>Age: {context.state.age}</p>
                <p>Name: {context.state.name}</p>
                <button onClick={context.growAYearOlder}>test</button>
              </React.Fragment>
            )}
          </MyContext.Consumer>
        </div>
      )
    }
  }