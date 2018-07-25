import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Product(props) {
  return (
    <div className="product">
      <img className="product-image" src={props.currentProduct.image} alt={props.currentProduct.name} />
      <div className="product-name-price">
        <p>{props.currentProduct.name}</p>
        <p>{props.currentProduct.price}</p>
      </div>
      <div className="button-container">
        <button className="product-button" onClick={() => {
          axios.delete('/api/product/' + props.currentProduct.id)
            .then(() => { props.fetchInventory(); });
        }}>
          {' '} Delete 	</button>
        <Link to={"/edit/" + props.currentProduct.id}>
          <button className="product-button">Edit</button>
        </Link>
      </div>
    </div >
  )
}
export default Product;