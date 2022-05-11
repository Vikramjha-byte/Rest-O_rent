import React, { Component } from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";
import { DISHES } from "../shared/Dishes";
import DishdetailComponent from "./DishdetailComponent";
import Menu from "./MenuComponent";
export class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  renderDish(dish) {
    if (dish !== null) {
      return (
        <DishdetailComponent
          selectedDish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div>
        <Navbar className="bg-primary">
          <div className="container">
            <NavbarBrand href="/" className="text-white">
              Rest-o-Rent
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <div className="container">
          <div className="row justify-content-center">
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default MainComponent;
