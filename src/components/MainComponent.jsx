import React, { Component } from "react";
import DishdetailComponent from "./DishdetailComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import Menu from "./MenuComponent";
import { Navigate, Route, Routes,withRouter } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import ContactComponent from "./ContactComponent";
import AboutComponent from "./AboutComponent";
import { connect } from "react-redux";


const mapStateToProps=state=>{
   return{
     dishes: state.dishes,
     comments: state.comments,
     leaders:state.leaders,
     promotions:state.promotions
   }
}

export class MainComponent extends Component {

  render() {
    const HomePage = () => {
      return (
        <HomeComponent
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };


    return (
      <>
        <HeaderComponent />

        <Routes>
          <Route path="/home" element={HomePage()} />
          <Route path="/aboutus" element={<AboutComponent leaders={this.props.leaders} />} />
          <Route
            exact
            path="/menu"
            element={<Menu dishes={this.props.dishes} />}
          />
          <Route
            path="/menu/:dishId"
            element={
              <DishdetailComponent
                dishes={this.props.dishes}
                comments={this.props.comments}
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

export default (connect(mapStateToProps) (MainComponent));
