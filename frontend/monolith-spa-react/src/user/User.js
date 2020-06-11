import React from 'react';
import Cookies from 'js-cookie';

import { connect } from 'react-redux';
import { login, logout, resetCart } from '../redux/actions';

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
          {!this.props.isLoggedIn ? <UserSignInIcon /> : <UserUserIcon />}
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
