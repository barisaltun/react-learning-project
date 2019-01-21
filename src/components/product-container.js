import React from "react";
import {getProducts} from "../actions/requests";
import Product from "./product";
import {connect} from "react-redux";

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
            loading: true
        };

        this.filter = this.filter.bind(this);
    }
    componentDidMount() {
        getProducts(response => {
            this.setState({
                _products: response,
                products:response,
                loading: false
            }, () => {
                this.filter(
                    {
                        filterPrice:this.props.filterPrice,
                        filterPriceOperator:this.props.filterPriceOperator,
                        filterText: this.props.filterText
                    });
            });
        });
    };

    componentWillReceiveProps(newProps){
            this.filter({
                filterPrice:newProps.filterPrice,
                filterPriceOperator:newProps.filterPriceOperator,
                filterText: newProps.filterText
            });
    }

    filter(filterParams){
        let searchTerm  =  filterParams.filterText;
        let priceFilter = filterParams.filterPrice;
        let priceOperator = filterParams.filterPriceOperator;

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
const mapStateToProps = (state) => {
    return {
    filterPrice: state.filter.filterPrice,
    filterPriceOperator: state.filter.filterPriceOperator,
    filterText: state.search.searchTerm
    }
};
export default connect(mapStateToProps) (ProductContainer);