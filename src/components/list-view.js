import React, { Component } from 'react';
import {getProducts} from "../actions/requests";
import Slider from "react-slick";
class sliderListing extends Component {
  state = {
    products :[
      {
        productId: "",
        productName: "",
        unitPrice: "",
      }
    ],
    filterText: ""
  };
  onChangeFilterText = (e) => {
    this.setState({
      filterText: e.target.value
    })
  };

  componentDidMount() {
    getProducts(response => {
      this.setState({
        products : response
      });
    });
  };
  render() {
    const filterProducts = this.state.products.filter(product => {
        return product.productName.toLowerCase().indexOf(
          this.state.filterText.toLowerCase()
        ) !== -1
      }
    );
    return (
      <div>
        <input
          value={this.state.filterText}
          onChange={this.onChangeFilterText}
          name={"filter"}
          id={"filter"}
          placeholder={"Filter by name"}/>

        {filterProducts.map(product =>
            <div className="product-container" key={product.productId}>
              <a onClick={()=> this.props.action({product})}>
                <div className="product-image">
                  <img alt={product.productName} src="https://place-hold.it/200x300"/>
                </div>
                <div className="product-info">
                  <div className="name">{product.productName}</div>
                  <div className="price">{product.unitPrice}</div>
                </div>
              </a>
            </div>
          )}
      </div>
    );
  }
}

export default sliderListing;
