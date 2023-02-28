import React from 'react';

function Product({ product, children }) {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ margin: '0 2rem 0' }}>
        <img src={product.image} alt={product.title} width="150" style={{ marginBottom: '1rem' }} />
      </div>
      <div>
        <h3 style={{ marginTop: '0.5rem' }}>
          {product.title} <small className="tag">{product.category}</small>
        </h3>
        <p>{product.description}</p>
        <p style={{ fontSize: '1.4rem' }}>
          <strong>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</strong>
        </p>
        {children}
      </div>
    </div>
  );
}

export default Product;
