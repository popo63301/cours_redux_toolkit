import { ADD_ITEM, CLEAR_BASKET, REMOVE_ITEM, SET_USER, SWITCH_THEME } from './types';

export function setMode(payload) {
  return {
    type: SWITCH_THEME,
    payload,
  };
}

export function setUser(payload) {
  return {
    type: SET_USER,
    payload,
  };
}

export function addToBasket(payload) {
  return {
    type: ADD_ITEM,
    payload,
  };
}

export function clearBasket() {
  return {
    type: CLEAR_BASKET,
  };
}

export function removeItem(payload) {
  return {
    type: REMOVE_ITEM,
    payload,
  };
}
