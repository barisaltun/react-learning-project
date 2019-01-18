import React, { Component } from 'react';
import {onClickPriceFilter} from "../actions/filterAction";
import {connect} from "react-redux";

class Header extends Component {
    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this);
    };

    reset(){
        this.refs.search.value = "";
        this.props.onReset();
    }

    onClickPriceFilter(filterPriceOperator, filterPrice, event){
        event.preventDefault();
        this.props.onClickPriceFilter(filterPriceOperator,filterPrice);
    }

    render() {
        return (
           <div>
               <input
                   onChange={this.props.onSearchTermChange}
                   name={"filter"}
                   id={"filter"}
                   placeholder={"Filter by name"}
                   ref="search"
               />
               <button className={"filterUnder"} onClick={this.onClickPriceFilter.bind(this, "less", 19)}>Filter Under 19</button>
               <button className={"filterOver"} onClick={this.onClickPriceFilter.bind(this, "greater", 18)}>Filter Over 19</button>
               <button className={"showAll"} onClick={this.onClickPriceFilter.bind(this, "none", 0)}>Show All</button>
               <button className={"showAll"} onClick={this.reset}>Reset</button>
           </div>
        );
    }
}
const mapDispatchToProps = {
    onClickPriceFilter : onClickPriceFilter
};
export default connect(null, mapDispatchToProps)(Header);
