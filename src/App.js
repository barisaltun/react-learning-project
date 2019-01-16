import React, { Component } from 'react';
import './App.css';
import './styles/a.scss';
import SliderListing from "./components/slider-listing"
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          data : {
              product:{
                  productName:""
              }
          }
        };
        this.childHandler = this.childHandler.bind(this);

    }
    childHandler(dataFromChild) {
        // log our state before and after we updated it
        this.setState({
            data: dataFromChild
        },()=>console.log(dataFromChild));
    }
  render() {
    return (
      <div className="App">
        <SliderListing action ={this.childHandler}/>
          <div>{this.state.data.product.productName}</div>
      </div>
    );
  }
}

export default App;
