import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

export default class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>About</h3>
        <Link to="/">Home</Link><br />
      </div>
    )
  }
}