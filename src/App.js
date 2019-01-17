import React, { Component } from 'react';
import './App.css';
import './styles/a.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
        this.setState({
            data: dataFromChild
        });
    }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav className={"navigation"}>
                <span className={"nav-element"}>
                    <Link to="/slider">Slider</Link>
                </span>
                <span className={"nav-element"}>
                  <Link to="/listed">Listed</Link>
                </span>
            </nav>

            <Route path="/listed/"  render={() => <ListView action={this.childHandler}/>} />
          </div>
        </Router>

          <div>{this.state.data.product.productName}</div>
      </div>
    );
  }
}

export default App;
