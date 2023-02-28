import React, { createRef } from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../actions';
import { nanoid } from 'nanoid';

function AddToBasketForm({ product }) {
  const dispatch = useDispatch();
  const quantityRef = createRef();

  function addItem(event) {
    event.preventDefault();

    const quantity = Number(quantityRef.current.value);

    const payload = {
      item: product,
      quantity,
      id: nanoid(),
    };

    dispatch(addToBasket(payload));
  }

  return (
    <form onSubmit={addItem}>
      Quantity :{' '}
      <input ref={quantityRef} type="number" min="1" step="1" defaultValue="1" required style={{ width: '30px' }} />
      <br />
      <button type="submit">Add to basket</button>
    </form>
  );
}

export default AddToBasketForm;

// BUT = Construire un objet :
/* {
  item: {product},
  quantity: <input/>
} */
