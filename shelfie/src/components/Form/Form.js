import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      image: '',
      name: '',
      price: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.newProduct = this.newProduct.bind(this);

  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  clearInput(e) {
    this.setState({
      image: '',
      name: '',
      price: '',
    })
  }

  newProduct() {
    axios.post(`/api/product`, this.state)
      .then(response => {
        this.props.fetchInventory();
        this.clearInput();
      })
      .catch(err => {
        console.log(err)
      });
  }

  render() {
    return (
      <div className="form">
        <div className="inputs">
          <span role="img">
            <img
              src="http://www.theemailcompany.com/wp-content/uploads/2016/02/no-image-placeholder-big-300x200.jpg"
              alt="img input" />
          </span>
          <br />
          Image URL:
        <br />
          <input
            className="input-line"
            type="text"
            onChange={this.handleChange}
            name="image"
            value={this.state.image}
            placeholder=""
          />
          <br />
          Product Name:
        <br />
          <input
            className="input-line"
            type="text"
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
            placeholder=""
          />
          <br />
          Price:
        <br />
          <input
            className="input-line"
            type="text"
            onChange={this.handleChange}
            name="price"
            value={this.state.price}
            placeholder="0"
          />
          <br />
          <button className="form-button" onClick={e => this.clearInput()}>Cancel</button>
          <button className="form-button" onClick={e => this.newProduct()}>Add to Inventory</button>
        </div>
      </div>
    )
  }
}
export default Form;