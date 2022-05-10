import React, { Component } from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";
import Menu from "./components/MenuComponent";
import {DISHES} from "./shared/Dishes"

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       dishes:DISHES
    }
  }
  render() {
    return (
      <div>
        <Navbar className="bg-primary">
          <div className="container">
            <NavbarBrand href="/" className="text-white">Rest-o-Rent</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
