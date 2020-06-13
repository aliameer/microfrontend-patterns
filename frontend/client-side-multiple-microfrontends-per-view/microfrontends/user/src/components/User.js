import React from 'react';
import Cookies from 'js-cookie';

import { getUserDetails } from '../helpers/client';

import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

import UserSignInIcon from './UserSignInIcon';
import UserUserIcon from './UserUserIcon';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      isLoggedIn: false,
    };

    this.logout = this.logout.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onRegisterSuccess = this.onRegisterSuccess.bind(this);
  }

  componentDidMount() {
    this.getUserName();

    document
      .getElementById('carts')
      .dispatchEvent(new CustomEvent('initialize-cart'));
  }

  getUserName() {
    const customerId = Cookies.get('logged_in');

    if (customerId) {
      getUserDetails(customerId).then((response) => {
        this.setState({
          username: response.data.username,
          isLoggedIn: true,
        });
      });
    }
  }

  logout() {
    this.setState({ username: '', isLoggedIn: false });
    Cookies.remove('logged_in');

    document
      .getElementById('carts')
      .dispatchEvent(new CustomEvent('reset-cart'));
  }

  onLoginSuccess() {
    this.getUserName();

    document
      .getElementById('carts')
      .dispatchEvent(new CustomEvent('initialize-cart'));
  }

  onRegisterSuccess() {
    this.getUserName();
  }

  render() {
    return (
      <React.Fragment>
        <LoginModal onLoginSuccess={this.onLoginSuccess} />
        <RegisterModal onRegisterSuccess={this.onRegisterSuccess} />

        <button
          className="btn btn-link nav-link dropdown-toggle"
          type="button"
          data-toggle="dropdown"
        >
          {!this.state.isLoggedIn ? <UserSignInIcon /> : <UserUserIcon />}
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          {!this.state.isLoggedIn && (
            <React.Fragment>
              <span
                className="dropdown-item"
                data-toggle="modal"
                data-target="#loginModal"
              >
                Login
              </span>
              <span
                className="dropdown-item"
                data-toggle="modal"
                data-target="#registerModal"
              >
                Register
              </span>
            </React.Fragment>
          )}
          {this.state.isLoggedIn && (
            <React.Fragment>
              <span className="dropdown-item-text">
                Logged in as: {this.state.username}
              </span>
              <div className="dropdown-divider"></div>
              <span className="dropdown-item" onClick={this.logout}>
                Logout
              </span>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default User;
