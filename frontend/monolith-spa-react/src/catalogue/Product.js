import React from 'react';

import { connect } from 'react-redux';
import { addProductToCart } from '../redux/actions';

import { pushProductToCart } from '../helpers/client';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    pushProductToCart(this.props.pid).then((response) => {
      this.props.addProductToCart({
        name: this.props.name,
        id: this.props.pid,
        imageUrl: [this.props.imgPath],
      });
    });
  }

  render() {
    return (
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <img
            alt={this.props.name}
            className="card-img-top"
            src={`${process.env.REACT_APP_BASE_URL}${this.props.imgPath}`}
          />

          <div className="card-body">
            <h4 className="card-title">{this.props.name}</h4>
            <h5>${this.props.price}</h5>
            <p className="card-text">{this.props.description}</p>
          </div>
          <div className="card-footer text-right">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) => {
      dispatch(addProductToCart(product));
    },
  };
};

export default connect(null, mapDispatchToProps)(Product);
