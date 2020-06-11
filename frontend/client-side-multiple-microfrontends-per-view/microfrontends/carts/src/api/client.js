import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  method: 'get',
  withCredentials: true,
});

const getCart = () => {
  return instance.get('/cart');
};

const getProduct = (productId) => {
  return instance.get(`/catalogue/${productId}`);
};

export { getCart, getProduct };
