import React from "react";
import {getProducts} from "../actions/requests";
import Product from "./product";

class ProductContainer extends React.Component{
    constructor(props){
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
            filterPrice: 0,
            filterPriceOperator: "none",
            loading: true
        };

        this.filter = this.filter.bind(this);
    }
    componentDidMount() {
        getProducts(response => {
            this.setState({
                _products: response,
                products:response,
                filterText: this.props.filterParams.filterText,
                filterPrice: this.props.filterParams.filterPrice,
                filterPriceOperator: this.props.filterParams.filterPriceOperator,
                loading: false
            }, () => {
                this.filter(this.props.filterParams);
            });
        });
    };

    componentWillReceiveProps(newProps){
        if(this.props.filterParams !== newProps.filterParams){
            this.filter(newProps.filterParams);
        }
    }

    filter(filterParams){
        let searchTerm  =  filterParams.filterText === null ? this.state.filterText : filterParams.filterText;
        let priceFilter = filterParams.filterPrice || this.state.filterPrice;
        let priceOperator = filterParams.filterPriceOperator || this.state.filterPriceOperator;

        //Search
        let filteredProducts = this.state._products.filter(product => {
            return product.productName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        });

        //Price
        filteredProducts = filteredProducts.filter((product) => {
            if(priceOperator === "none" || !priceOperator){
                return product;
            }else if(priceOperator === "less" ){
                return product.unitPrice < priceFilter;
            }else{
               return product.unitPrice > priceFilter;
            }
        });

        this.setState({
            products: filteredProducts,
            filterText: searchTerm,
            filterPrice: priceFilter,
            filterPriceOperator: priceOperator
        });
    }

    render(){
        return this.state.loading ? "MOTHERFUCKER" : <div className={"listed-container"}>
            {
                this.state.products.map((product) => {
                    return <Product {...product} key={product.productId} />
                })
            }
        </div>
    }
}

export default  ProductContainer;