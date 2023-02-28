import { useEffect, useState } from 'react';

const API_ENDPOINT = 'https://fakestoreapi.com/products';

export function useProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(`Cannot fetch products`, err));
  }, []);

  return products;
}
