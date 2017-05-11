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
    this.state = {
      Name: '',
      quote: ''
    }
  }
  onHandleSubmit(e) {
    e.preventDefault();
    if (this.state.Name === '' && this.state.quote === '') {
      alert('Please Provide Field');
    } else {
      return request.post('/create-quote')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('X-Requested-With', 'XMLHttpRequest')
        .send({
          Name: this.state.Name,
          quote: this.state.quote
        }).then((res) => {
          this.setState({ Name: '' });
          this.setState({ quote: '' });
          this.loadQuote();
        }, err => {
          console.log("login error", err);
        });
    }
  }
  render() {
    return (
      <div>
        {this.props.children}
        <div style={{ padding: 10, display: 'flex', justifyContent: 'center' }}>
          <Paper style={{ padding: 10, display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            <div>
              <label>Name:</label>
              <TextField
                hintText="Enter Your Name"
                ref="Name"
                value={this.state.Name}
                onChange={(e) => this.setState({ Name: e.target.value })}
              />
            </div>
            <div>
              <label>Quote: </label>
              <TextField
                hintText="Enter Your Quote"
                ref="qoute"
                value={this.state.quote}
                onChange={(e) => this.setState({ quote: e.target.value })}
              />
            </div>
            <div>
              <FlatButton label="submit" style={{ marginTop: 10 }} secondary={true} onClick={(e) => this.onHandleSubmit(e)} />
            </div>
          </Paper>
        </div>
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