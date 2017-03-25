'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

class HelloWorldBox extends Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
      };

      this.setState = this.setState.bind(this);
    }

    render() {
      return (
        <div>
          <h1>Hello World</h1>
        </div>
      )
    }
}

ReactDOM.render (
  <HelloWorldBox />,
  document.getElementById('container')
);
