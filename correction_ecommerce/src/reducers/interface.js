/* 
  {
    mode: 'dark' | 'light'
  }
*/

import { SWITCH_THEME } from '../actions/types';

const initialState = {
  mode: 'light',
};

export default function interfaceReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_THEME:
      return { ...state, mode: action.payload };

    default:
      return state;
  }
}
