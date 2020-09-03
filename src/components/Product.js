import React from "react";

function Product(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Price: {props.price}</h3>
      <h4>Description: {props.description}</h4>
    </div>
  );
}

export default Product;
