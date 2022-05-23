import React, { Component } from "react";
import { DISHES } from "../shared/Dishes";
import { COMMENTS } from "../shared/Comments";
import { LEADERS } from "../shared/Leaders";
import { PROMOTIONS } from "../shared/Promotions";
import DishdetailComponent from "./DishdetailComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import Menu from "./MenuComponent";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import ContactComponent from "./ContactComponent";
import AboutComponent from "./AboutComponent";
export class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      // selectedDish: null,
    };
  }
  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId });
  // }
  // renderDish(dish) {
  //   if (dish !== null) {
  //     return (
  //       <DishdetailComponent
  //         selectedDish={
  //           this.state.dishes.filter(
  //             (dish) => dish.id === this.state.selectedDish
  //           )[0]
  //         }
  //       />
  //     );
  //   } else {
  //     return <div></div>;
  //   }
  // }

  render() {
    const HomePage = () => {
      return (
        <HomeComponent
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    // const DishWithID=({match} )=>{
    //   return(
    //     console.log(match.params)
    //     )
    // }
    return (
      <>
        <HeaderComponent />

        <Routes>
          <Route path="/home" element={HomePage()} />
          <Route path="/aboutus" element={<AboutComponent leaders={this.state.leaders} />} />
          <Route
            exact
            path="/menu"
            element={<Menu dishes={this.state.dishes} />}
          />
          <Route
            path="/menu/:dishId"
            element={
              <DishdetailComponent
                dishes={this.state.dishes}
                comments={this.state.comments}
              />
            }
          />

          <Route path="" element={<Navigate to="/home" />} />
          <Route exact path="/contactus" element={<ContactComponent/>} />
        </Routes>
        {/* <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        /> */}
        {/* <div className="container">
          <div className="row justify-content-center">
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div> */}
        <FooterComponent />
      </>
    );
  }
}

export default MainComponent;
