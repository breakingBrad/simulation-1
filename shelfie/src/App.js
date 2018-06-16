import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      inventory: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/api/inventory`)
      .then((res) => {
        console.log(res);
        this.setState({
          inventory: res.data
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="body">
          <Dashboard inventory={this.state.inventory} componentDidMountApp={this.componentDidMount} />
          <Form componentDidMountApp={this.componentDidMount} />
        </div>
      </div>
    );
  }
}

export default App;