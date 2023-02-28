import { ADD_ITEM, CLEAR_BASKET, REMOVE_ITEM } from '../actions/types';

const initialState = [
  /* { nanoid, item: { … }, quantity: 1 },
  { nanoid, item: { … }, quantity: 2 },
  { nanoid, item: { … }, quantity: 4 },
  { nanoid, item: { … }, quantity: 5 }, */
];

export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];

    case CLEAR_BASKET:
      return [];

    case REMOVE_ITEM:
      const newBasket = state.filter(({ id }) => id !== action.payload);
      return newBasket;

    default:
      return state;
  }
}
