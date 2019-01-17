import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);

        this.reset = this.reset.bind(this);
    };

    reset(){
        this.refs.search.value = "";
        this.props.onReset();
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
               <button className={"filterUnder"} onClick={this.props.onClickPriceFilter.bind(null, "less", 19)}>Filter Under 19</button>
               <button className={"filterOver"} onClick={this.props.onClickPriceFilter.bind(null, "greater", 19)}>Filter Over 19</button>
               <button className={"showAll"} onClick={this.props.onClickPriceFilter.bind(null, "none", 0)}>Show All</button>
               <button className={"showAll"} onClick={this.reset}>Reset</button>
           </div>
        );
    }
}

export default Header;
