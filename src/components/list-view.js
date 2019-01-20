import React, { Component } from 'react';
import ProductContainer from "./product-container";
import Header from "./header";

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
                <Header onSearchTermChange={this.onChangeFilterText} onClickPriceFilter={this.sonClickPriceFilter} onReset={this.onReset}/>
                <ProductContainer/>
            </div>
        );
    }
}

export default ListView;
