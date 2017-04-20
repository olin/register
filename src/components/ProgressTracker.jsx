import React, { Component, PropTypes } from 'react';

export default class ProgressTracker extends Component {
  render() {
    const { gen, major } = this.props;

    return (
      <div>
        <ul>
          <li><a href="#">General Requirements</a><p>{gen}</p></li>
          <li><a href="#">Major Requirements</a><p>{major}</p></li>
          <li><a href="#">Math/Sci Requirements</a></li>
          <li><a href="#">AHS Requirements</a></li>
          <li><a href="#">Electives</a></li>
        </ul>
      </div>
    )
  }
}

ProgressTracker.PropTypes = {
  gen: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
};
