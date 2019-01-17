import React, { Component } from 'react';
import {getProducts} from "../actions/requests";
import Slider from "react-slick";
import ProductContainer from "./product-container";

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
};

class sliderListing extends Component {
    constructor(props){
        super(props);
    }
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
        return (
            <div className={"slider-listing"}>
                <Slider {...settings}>
                    {this.state.products.map(product =>
                        <ProductContainer key={product.productId} product={product}/>
                    )}
                </Slider>
            </div>
        );
    }
}

export default sliderListing;
