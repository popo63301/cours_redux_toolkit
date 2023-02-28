import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { clearBasket, removeItem } from '../actions';

function Basket() {
  const user = useSelector((state) => state.user);
  const basket = useSelector((state) => state.basket);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Hi {user.firstname}!</h2>
      <h3>There are {basket.length} items in your basket</h3>
      <button onClick={() => dispatch(clearBasket())}>Clear basket</button>
      <hr />

      <div className="basket-container">
        {basket.length > 0 &&
          basket.map(({ id, item, quantity }) => (
            <Product key={id} product={item}>
              <div>
                <p>
                  <strong>Quantity : {quantity}</strong>
                </p>
                <button type="button" onClick={() => dispatch(removeItem(id))}>
                  Remove
                </button>
              </div>
            </Product>
          ))}
      </div>
    </div>
  );
}

export default Basket;
