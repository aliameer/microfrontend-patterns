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

const pushProductToCart = (productId) => {
  return instance.post('/cart', { id: productId });
};

export { getCart, getProduct, pushProductToCart };
