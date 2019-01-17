import React, { Component } from 'react';

const Product = (props) => {
    return (
        <div className="product-container" key={props.productId}>
            <a>
                <div className="product-image">
                    <img alt={props.productName} src="https://place-hold.it/200x300"/>
                </div>
                <div className="product-info">
                    <div className="name">{props.productName}</div>
                    <div className="price">{props.unitPrice}</div>
                </div>
            </a>
        </div>

    );
};

export default Product;