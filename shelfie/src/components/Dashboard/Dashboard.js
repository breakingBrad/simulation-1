import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
  render() {
    const { inventory } = this.props;
    let displayInventory = inventory.map((item, i) => {
      return (
        <Product key={i}
          name={item.name}
          price={item.price}
          image={item.image}
        />
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