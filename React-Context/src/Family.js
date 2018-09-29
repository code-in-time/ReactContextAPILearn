import React from 'react';
import { Person } from './Person';

import { MyContext } from "./MyProvider";

 const Family = (props) => (
    <div className="family">
          <MyContext.Consumer>
            {(context) => (
                // console.log(context)
                <span>
                  {context.state.yo}
                </span>
            )}
          </MyContext.Consumer>
      <Person />
    </div>
  )

  export default Family;
