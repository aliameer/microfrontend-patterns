import React from 'react';
import Cookies from 'js-cookie';

import { connect } from 'react-redux';
import { login, logout, resetCart } from '../redux/actions';

import { getUserDetails } from '../helpers/client';

import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };

    this.logout = this.logout.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onRegisterSuccess = this.onRegisterSuccess.bind(this);
  }

  componentDidMount() {
    this.getUserName();
  }

  getUserName() {
    const customerId = Cookies.get('logged_in');

    if (customerId) {
      getUserDetails(customerId).then((response) => {
        this.props.doLogin();
        this.setState({ username: response.data.username });
      });
    }
  }

  logout() {
    this.props.doLogout();
    this.props.doResetCart();
    Cookies.remove('logged_in');
  }

  onLoginSuccess() {
    this.getUserName();
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
          data-toggle="dropdown"
        >
          {!this.props.isLoggedIn ? (
            <svg
              id="user-i-signin"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="32"
              height="32"
              fill="none"
              stroke="currentcolor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M3 16 L23 16 M15 8 L23 16 15 24 M21 4 L29 4 29 28 21 28" />
            </svg>
          ) : (
            <svg
              id="user-i-user"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="32"
              height="32"
              fill="none"
              stroke="currentcolor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" />
            </svg>
          )}
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          {!this.props.isLoggedIn && (
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
          {this.props.isLoggedIn && (
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

const mapStateToProps = (state) => {
  return { isLoggedIn: state.isLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: () => dispatch(login()),
    doLogout: () => dispatch(logout()),
    doResetCart: () => dispatch(resetCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
