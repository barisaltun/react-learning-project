import React, { Component } from 'react';
import {getProducts} from "../actions/requests";
import Slider from "react-slick";
class sliderListing extends Component {
    state = {
        products :[
            {
                productId: "",
                productName: "",
                unitPrice: "",
            }
        ]
    };

    componentDidMount() {
        getProducts(response => {
            this.setState({
                products : response
            });
        });
    };
    render() {
        let settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                {this.state.products.map(product =>
                    <div className="product-container" key={product.productId}>
                        <a onClick={()=> this.props.action({product})}>
                        <div className="product-image">
                                <img alt={product.productName} src="https://place-hold.it/200x300"/>
                            </div>
                            <div className="product-info">
                                <div className="name">{product.productName}</div>
                                <div className="price">{product.unitPrice}</div>
                            </div>
                        </a>
                    </div>
                )}
                </Slider>
                </div>
        );
    }
}

export default sliderListing;
