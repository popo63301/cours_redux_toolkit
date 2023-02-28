import React from 'react';
import Product from './Product';
import AddToBasketForm from './AddToBasketForm';

function ProductsList({ products }) {
  return (
    <div className="products-container">
      {products.map((product, index) => (
        <Product key={index} product={product}>
          <AddToBasketForm product={product} />
        </Product>
      ))}
    </div>
  );
}

export default ProductsList;
