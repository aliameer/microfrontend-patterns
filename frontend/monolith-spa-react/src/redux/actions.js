import { LOGIN, LOGOUT, ADD_PRODUCT_TO_CART, RESET_CART } from './actionTypes';

export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });
export const resetCart = () => ({ type: RESET_CART });

export const addProductToCart = (product) => {
  return { type: ADD_PRODUCT_TO_CART, data: product };
};
