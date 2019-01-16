import React, { Component } from 'react';
import './App.css';
import './styles/a.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SliderListing from "./components/slider-listing";
import ListView from "./components/list-view";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          data : {
              product:{
                  productName:""
              }
          },
        };
        this.childHandler = this.childHandler.bind(this);
    }
    childHandler(dataFromChild) {
        // log our state before and after we updated it
        this.setState({
            data: dataFromChild
        });
    }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/slider">Slider</Link>
                </li>
                <li>
                  <Link to="/listed">Users</Link>
                </li>
              </ul>
            </nav>

            <Route path="/slider" render={() => <SliderListing action={this.childHandler} />} />
            <Route path="/listed/"  render={() => <ListView action={this.childHandler}/>} />
          </div>
        </Router>

          <div>{this.state.data.product.productName}</div>
      </div>
    );
  }
}

export default App;
