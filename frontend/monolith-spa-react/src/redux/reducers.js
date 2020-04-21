import { LOGIN, LOGOUT, ADD_PRODUCT_TO_CART, RESET_CART } from './actionTypes';

const initialState = {
  isLoggedIn: false,
  productsInCart: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === LOGIN) {
    return Object.assign({}, state, {
      isLoggedIn: true,
    });
  }
  if (action.type === LOGOUT) {
    return Object.assign({}, state, {
      isLoggedIn: false,
    });
  }
  if (action.type === ADD_PRODUCT_TO_CART) {
    return Object.assign({}, state, {
      productsInCart: [...state.productsInCart, action.data],
    });
  }
  if (action.type === RESET_CART) {
    return Object.assign({}, state, {
      productsInCart: [],
    });
  }
  return state;
}

export default rootReducer;
