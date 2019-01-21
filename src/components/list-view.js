import React, { Component } from 'react';
import ProductContainer from "./product-container";
import HeaderContainer from "./header-container";

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            filterPrice: 0,
            filterPriceOperator: "none"
        };
        this.onReset = this.onReset.bind(this);
    }




    onReset(){
        this.setState({
            filterText: "",
            filterPrice: 0,
            filterPriceOperator: "none"
        });
    }

    render() {
        return (
            <div>
                <HeaderContainer onSearchTermChange={this.onChangeFilterText} onClickPriceFilter={this.onClickPriceFilter} onReset={this.onReset}/>
                <ProductContainer/>
            </div>
        );
    }
}

export default ListView;
