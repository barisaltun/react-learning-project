import React, { Component } from 'react';
class ProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                productId: "",
                productName: "",
                unitPrice: "",
            }
        };
    };
    componentDidMount() {
        this.state = this.setState({
            product : this.props.product
        });
    }
    render() {
        return (
            <div className="product-container" key={this.state.product.productId}>
                <a>
                    <div className="product-image">
                        <img alt={this.state.product.productName} src="https://place-hold.it/200x300"/>
                    </div>
                    <div className="product-info">
                        <div className="name">{this.state.product.productName}</div>
                        <div className="price">{this.state.product.unitPrice}</div>
                    </div>
                </a>
            </div>

        );
    }
}

export default ProductContainer;
