import React from 'react';

import { getCart, getProduct } from '../helpers/client';

import { connect } from 'react-redux';
import { addProductToCart } from '../redux/actions';

class Carts extends React.Component {
  componentDidMount() {
    getCart().then((response) => {
      response.data.forEach((prod) => {
        getProduct(prod.itemId).then((response) => {
          this.props.addProductToCart(response.data);
        });
      });
    });
  }

  render() {
    const productItems = this.props.products.map((prod, idx) => {
      return (
        <li className="list-group-item" key={idx}>
          <div className="media">
            <img
              alt={prod.name}
              className="mr-3"
              width="64"
              src={`${process.env.REACT_APP_BASE_URL}${prod.imageUrl[0]}`}
            />
            <div className="media-body">
              <h5 className="mt-0">
                {prod.name} - {prod.price}
              </h5>
            </div>
          </div>
        </li>
      );
    });

    const styles = {
      width: '400px',
    };

    return (
      <React.Fragment>
        <button
          className="btn btn-link nav-link dropdown-toggle"
          data-toggle="dropdown"
        >
          <svg
            id="i-cart"
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
            <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
            <circle cx="25" cy="27" r="2" />
            <circle cx="12" cy="27" r="2" />
          </svg>

          <span className="badge badge-light" id="carts-items-count">
            {this.props.products.length}
          </span>
        </button>

        <div className="dropdown-menu dropdown-menu-right" style={styles}>
          <ul className="list-group">
            {productItems.length > 0 ? (
              productItems
            ) : (
              <li className="list-group-item">Empty cart...</li>
            )}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    products: state.productsInCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) => dispatch(addProductToCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Carts);
