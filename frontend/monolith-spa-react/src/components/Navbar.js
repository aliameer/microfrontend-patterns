import React from 'react';

import User from './../user/User';
import Carts from './../carts/Carts';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="navbar-brand">Socks Shop</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <User />
          </li>
          <li className="nav-item dropdown">
            <Carts />
          </li>
        </ul>
      </div>
    </nav>
  );
}
