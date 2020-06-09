import React from 'react';

import { registerUser } from '../helpers/client';

export default class RegisterModal extends React.Component {
  constructor(props) {
    super(props);

    this.closeModalRef = React.createRef();

    this.state = {
      _username: 'user',
      _email: 'email@email.com',
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
    registerUser(this.state._username, this.state._password)
      .then((response) => {
        this.props.onRegisterSuccess();
        this.closeModalRef.current.click();
      })
      .catch((reason) => {
        this.setState({ registrationFailure: true });
      });
  }

  render() {
    return (
      <div
        className="modal fade"
        id="registerModal"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <form id="register-form" onSubmit={this.handleSubmit}>
                {this.state.registrationFailure && (
                  <div className="alert alert-danger" role="alert">
                    Registration failed, try again with a different username.
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
                form="register-form"
                className="btn btn-primary"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
