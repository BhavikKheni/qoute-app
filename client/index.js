import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import request from "superagent";
import About from './about';
import Home from './home';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <MuiThemeProvider >
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute name="index" component={Home} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root-container")
);