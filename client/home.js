import React, { Component } from 'react';
import request, { Request } from "superagent";
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import './style.css';
import AppBar from 'material-ui/AppBar';
export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar
    title="Quote"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
    )
  }
}