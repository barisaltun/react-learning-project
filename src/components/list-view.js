import React, { Component } from 'react';
import {getProducts} from "../actions/requests";
import ProductContainer from "./product-container";
import Header from "./header";

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    productId: "",
                    productName: "",
                    unitPrice: "",
                    unitsInStock: ""
                }
            ],
            _products: [
                {
                    productId: "",
                    productName: "",
                    unitPrice: "",
                    unitsInStock: ""
                }
            ],
            filterText: "",
            filterPrice: 0
        };
        this.onChangeFilterText=this.onChangeFilterText.bind(this);
        this.onClickPriceFilterUnder=this.onClickPriceFilterUnder.bind(this);
        this.onClickPriceFilterOver=this.onClickPriceFilterOver.bind(this);
        this.onClickRemovePriceFilters=this.onClickRemovePriceFilters.bind(this);
        this.onClickResetFilters=this.onClickResetFilters.bind(this);

    }

    componentDidMount() {
        getProducts(response => {
            this.setState({
                _products: response,
                products:response
            });
        });
    };
    onChangeFilterText(e){
        this.setState({
            filterText: e.target.value,
            products: this.state._products.filter(product => {
                return product.productName.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1
            })
        });
    };
    onClickPriceFilterUnder() {
        this.setState({
            filterPrice: 10,
            products: this.state._products.filter(product => {
                if (this.state.filterPrice === 10) return product.unitPrice < this.state.filterPrice
                    ? product.productName.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1 : false
            })
        });
    };
    onClickPriceFilterOver(){
        this.setState({
            filterPrice: 15,
            products: this.state._products.filter(product => {
                if(this.state.filterPrice === 15) return product.unitPrice > this.state.filterPrice
                    ? product.productName.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1: false;
            })
        });
    };
    onClickRemovePriceFilters(){
        this.setState({
            filterPrice : 0
        });
    };
    onClickResetFilters (){
        this.setState({
            filterText : "",
            filterPrice:0
        });
    };


    render() {
        return (
            <div>
                <Header productState={this.state} action={this.onChangeFilterText}/>
                <div className={"listed-container"}>
                    {this.state.products.map(product =>
                        <ProductContainer key={product.productId} product={product}/>
                    )}
                </div>
            </div>
        );
    }
}

export default ListView;
