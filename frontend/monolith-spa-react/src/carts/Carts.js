import React from 'react';

import { getCart, getProduct } from '../helpers/client';

import { connect } from 'react-redux';
import { addProductToCart } from '../redux/actions';
import ProductListItem from './ProductListItem';
import CartsCartIcon from './CartsCartIcon';

class Carts extends React.Component {
  componentDidMount() {
    getCart().then((response) => {
      response.data.forEach((prod) => {
        getProduct(prod.itemId).then((response) => {
          this.props.addProductToCart(response.data, prod.quantity);
        });
      });
    });
  }

  render() {
    const productItems = this.props.products.map((prod, idx) => {
      return <ProductListItem product={prod} key={idx} />;
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
          <CartsCartIcon />

          <span className="badge badge-light" id="carts-items-count">
            {this.props.products.reduce((total, prod) => {
              return total + (prod.quantity || 0);
            }, 0)}
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
    addProductToCart: (product, quantity) =>
      dispatch(addProductToCart(product, quantity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Carts);
