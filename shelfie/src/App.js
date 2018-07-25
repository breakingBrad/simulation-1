import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="body-content">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/add" component={Form} />
              <Route path="/edit/:id" component={Form} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;