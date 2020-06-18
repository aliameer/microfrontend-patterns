import React from 'react';

export default function (props) {
  return (
    <li className="list-group-item">
      <div className="media">
        <img
          alt={props.product.name}
          className="mr-3"
          width="64"
          src={`${process.env.REACT_APP_BASE_URL}${props.product.imageUrl[0]}`}
        />
        <div className="media-body">
          <h5 className="mt-0">
            {props.product.name} - {String.fromCharCode(36)}
            {props.product.price}
            <span className="badge badge-pill badge-primary float-right p-list-item-count">
              {props.product.quantity || 1}
            </span>
          </h5>
        </div>
      </div>
    </li>
  );
}
