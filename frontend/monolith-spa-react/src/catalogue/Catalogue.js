import React from 'react';
import Product from './Product';

import { getCatalogueProducts } from '../helpers/client';

export default class Catalogue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    getCatalogueProducts().then((response) => {
      this.setState({ products: response.data });
    });
  }

  render() {
    const products = this.state.products.map((prod) => (
      <Product
        key={prod.id}
        pid={prod.id}
        name={prod.name}
        price={prod.price}
        description={prod.description}
        imgPath={prod.imageUrl[0]}
      />
    ));

    return (
      <div className="container pt-2">
        <div className="row">{products}</div>
      </div>
    );
  }
}
