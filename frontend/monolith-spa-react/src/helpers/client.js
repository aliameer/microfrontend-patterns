import axios from 'axios';

const requestDefaults = {
  method: 'get',
  withCredentials: true,
};

const getCart = () => {
  return axios({
    ...requestDefaults,
    url: process.env.REACT_APP_CART_URL,
  });
};

const getProduct = (productId) => {
  return axios({
    ...requestDefaults,
    url: `${process.env.REACT_APP_CATALOGUE_URL}/${productId}`,
  });
};

const pushProductToCart = (productId) => {
  return axios({
    method: 'post',
    url: process.env.REACT_APP_CART_URL,
    data: {
      id: productId,
    },
    withCredentials: true,
  });
};

const getUserDetails = (customerId) => {
  return axios({
    ...requestDefaults,
    url: `${process.env.REACT_APP_USER_DETAILS_URL}/${customerId}`,
  });
};

const loginUser = (username, password) => {
  return axios({
    ...requestDefaults,
    url: process.env.REACT_APP_LOGIN_URL,
    auth: { username, password },
  });
};

const getCatalogueProducts = () => {
  return axios({
    ...requestDefaults,
    url: process.env.REACT_APP_CATALOGUE_URL,
  });
};

const registerUser = (username, password) => {
  return axios({
    method: 'post',
    url: process.env.REACT_APP_REGISTER_URL,
    data: { username, password },
    withCredentials: true,
  });
};

export {
  getCart,
  getProduct,
  getUserDetails,
  getCatalogueProducts,
  pushProductToCart,
  loginUser,
  registerUser,
};
