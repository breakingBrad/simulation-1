import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [],
    }
    this.fetchInventory = this.fetchInventory.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }
  componentDidMount() {
    this.fetchInventory();
  }

  deleteProduct = (e, id) => {
    console.log(`Removing Product Id: ${id}`)
    axios.delete(`/api/product/${id}`)
      .then(response => {
        this.fetchInventory();
      })
      .catch(err => {
        console.log(err)
      });
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

  render() {
    const displayInventory = this.state.inventory.map((item, i) => {
      return (
        <div key={i}>
          <Product
            name={item.name}
            price={item.price}
            image={item.image}
            currentProduct={item}
            fetchInventory={() => this.fetchInventory()}
          />
        </div>
      )
    })
    return (
      <div className="dashboard">
        {displayInventory}
      </div>
    )
  }
}

export default Dashboard;