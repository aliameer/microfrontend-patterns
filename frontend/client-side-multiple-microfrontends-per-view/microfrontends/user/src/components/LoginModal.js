import React from 'react';

import { loginUser } from '../helpers/client';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);

    this.closeModalRef = React.createRef();

    this.state = {
      _username: 'user',
      _password: 'password',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    loginUser(this.state._username, this.state._password)
      .then((response) => {
        // this.props.doLogin();
        this.props.onLoginSuccess();
        this.closeModalRef.current.click();
      })
      .catch((reason) => {
        this.setState({ loginFailure: true });
      });
  }

  render() {
    return (
      <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <form id="login-form" onSubmit={this.handleSubmit}>
                {this.state.loginFailure && (
                  <div className="alert alert-danger" role="alert">
                    Login failed, try again
                  </div>
                )}
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="_username"
                    value={this.state._username}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="_password"
                    value={this.state._password}
                    onChange={this.handleChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                ref={this.closeModalRef}
              >
                Close
              </button>
              <button
                type="submit"
                form="login-form"
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;
