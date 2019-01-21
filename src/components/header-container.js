import Header from "./header";
import React from "react";
import {onClickPriceFilter} from "../actions/filterAction";
import {onChangeFilterText} from "../actions/searchAction";
import {connect} from "react-redux";

export class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this);
    };

    reset(){
        this.props.onReset();
    }

    onClickPriceFilter(filterPriceOperator, filterPrice, event){
        event.preventDefault();
        this.props.onClickPriceFilter(filterPriceOperator,filterPrice);
    }
    onChangeFilterText(e){
        this.props.onChangeFilterText(e.target.value);
    }
    render(){
        return <Header {...this.props} />
    }
}

const mapDispatchToProps = {
        onClickPriceFilter : onClickPriceFilter,
        onChangeFilterText : onChangeFilterText
    };
export default connect(null, mapDispatchToProps)(HeaderContainer);
