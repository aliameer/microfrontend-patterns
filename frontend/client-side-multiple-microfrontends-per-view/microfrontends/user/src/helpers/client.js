const axios = require('axios').default;

const instance = axios.create({
  method: 'get',
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});

const getUserDetails = (customerId) => instance.get(`/customers/${customerId}`);

const loginUser = (username, password) => {
  return instance.get('/login', {
    auth: { username, password },
  });
};

const registerUser = (username, password) => {
  return instance.post('/register', {
    username,
    password,
  });
};

export { getUserDetails, loginUser, registerUser };
