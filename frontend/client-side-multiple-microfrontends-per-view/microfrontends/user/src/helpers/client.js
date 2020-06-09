import axios from 'axios';

const requestDefaults = {
  method: 'get',
  withCredentials: true,
};

const getUserDetails = (customerId) => {
  return axios({
    ...requestDefaults,
    url: `http://localhost:8080/customers/${customerId}`,
  });
};

const loginUser = (username, password) => {
  return axios({
    ...requestDefaults,
    url: 'http://localhost:8080/login',
    auth: { username, password },
  });
};

const registerUser = (username, password) => {
  return axios({
    method: 'post',
    url: 'http://localhost:8080/register',
    data: { username, password },
    withCredentials: true,
  });
};

export { getUserDetails, loginUser, registerUser };
