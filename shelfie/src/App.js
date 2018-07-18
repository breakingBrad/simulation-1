import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    }
    this.fetchInventory = this.fetchInventory.bind(this);
  }

  fetchInventory() {
    axios.get(`/api/inventory`)
      .then((res) => {
        console.log(res);
        this.setState({
          inventory: res.data
        })
      })
  }

  componentDidMount() {
    this.fetchInventory();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="body">
          <Dashboard inventory={this.state.inventory} fetchInventory={this.fetchInventory} />
          <Form fetchInventory={this.fetchInventory} />
        </div>
      </div>
    );
  }
}

export default App;