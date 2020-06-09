import axios from 'axios';

const requestDefaults = {
  method: 'get',
  withCredentials: true,
};

const getUserDetails = (customerId) => {
  return axios({
    ...requestDefaults,
    url: `http://localhost:8081/customer/${customerId}`,
  });
};

const loginUser = (username, password) => {
  return axios({
    ...requestDefaults,
    url: 'http://localhost:8081/login',
    auth: { username, password },
  });
};

const registerUser = (username, password) => {
  return axios({
    method: 'post',
    url: 'http://localhost:8081/register',
    data: { username, password },
    withCredentials: true,
  });
};

export { getUserDetails, loginUser, registerUser };
