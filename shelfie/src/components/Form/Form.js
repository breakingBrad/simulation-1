import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      name: '',
      price: '',
      id: this.props.match.params.id,
    }
    this.handleChange = this.handleChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.newProduct = this.newProduct.bind(this);
  }

  componentDidMount() {
    console.log('component did mount was called');
    let id = this.props.match.params.id;
    if (id) {
      axios.get(`/api/product/${id}`)
        .then(response => {
          console.log(response);
          this.setState({
            name: response.data[0].name,
            price: response.data[0].price,
            image: response.data[0].image,
            id: response.data[0].id,
          })
        })
    }
  }

  componentDidUpdate(props) {
    if(props.match.params.id !== this.props.match.params.id){
      this.setState({
        name: '',
        price: 0,
        img: '',
        id: '',
      })
    }
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

  editProduct(e, id) {
    let product = {
      image: this.state.image,
      price: this.state.price,
      name: this.state.name,
      id: this.state.id,
    };
    axios.patch(`/api/product/${this.state.id}`, product)
      .then(() => {
        this.props.fetchInventory();
      })
      .catch(err => {
        console.log(err)
      });
  }

  render() {
    const editingProduct = this.state.id ? (<button className="form-button" onClick={() => this.editProduct()}>Save Changes</button>) : (<button className="form-button" onClick={() => this.newProduct()}> Add To Inventory </button>)
    return (
      <div className="form">
        <div className="inputs">
          <span role="img">
            <img className="image-preview"
              src={this.state.image === '' ? ("http://www.theemailcompany.com/wp-content/uploads/2016/02/no-image-placeholder-big-300x200.jpg") : (this.state.image)}
              alt={this.state.name}/>
          </span>
          <p>Image URL:</p>
          <input
            className="input-line"
            type="text"
            onChange={this.handleChange}
            name="image"
            value={this.state.image}
            placeholder=""
          />
          <p>Product Name:</p>
          <input
            className="input-line"
            type="text"
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
            placeholder=""
          />
          <p>Price:</p>
          <input
            className="input-line"
            type="text"
            onChange={this.handleChange}
            name="price"
            value={this.state.price}
            placeholder="0"
          />
          <br />
          <div className="form-buttons-container">
            <Link to="/">
              <button>Cancel</button>
            </Link>
						<Link to="/">{editingProduct}
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Form;

