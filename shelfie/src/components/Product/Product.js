import React from 'react';

function Product(props) {
  const { name, price, image } = props;
  return (
    <div className="product">
      <img src={image} alt={name} />
      <div className="product-name-price">
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div >
  )
}
export default Product;