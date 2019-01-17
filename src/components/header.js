import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText :""
        }
    };

    componentWillReceiveProps(nextProps, nextContext) {
        debugger
        this.setState({
            filterText:nextProps.productState.filterText
        });
    }

    render() {
        return (
           <div>
               <input
                   value={this.state.filterText}
                   onChange={this.props.action}
                   name={"filter"}
                   id={"filter"}
                   placeholder={"Filter by name"}/>
               <button className={"filterUnder"} onClick={this.onClickPriceFilterUnder}>Filter Under 10</button>
               <button className={"filterOver"} onClick={this.onClickPriceFilterOver}>Filter Over 15</button>
               <button className={"showAll"} onClick={this.onClickRemovePriceFilters}>Show All</button>
               <button className={"resetFilters"} onClick={this.onClickResetFilters}>Reset All Filters</button>
           </div>
        );
    }
}

export default Header;
