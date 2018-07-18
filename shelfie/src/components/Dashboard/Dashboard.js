import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component {

  deleteProduct = (e, id) => {
    console.log(`Removing Product Id: ${id}`)
    axios.delete(`/api/product/${id}`)
      .then(response => {
        this.props.fetchInventory();
      })
      .catch(err => {
        console.log(err)
      });
  }

  render() {
    const { inventory } = this.props;
    let displayInventory = inventory.map((item, i) => {
      return (
        <div key={i}>
          <Product
            name={item.name}
            price={item.price}
            image={item.image}
          />
          <button className="dashboard-button" onClick={e => this.deleteProduct(e, item.id)}>Delete</button>
          <button className="dashboard-button" onClick={e => this.EditProduct(e, item.id)}>Edit</button>
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