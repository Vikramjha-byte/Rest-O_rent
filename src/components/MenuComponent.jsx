import React from "react";
import { Breadcrumb, BreadcrumbItem, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MenuComponent(dish, onClick) {
  return (
    <Card>
      <Link to={`/menu/${dish.dish.id}`} className="text-decoration-none text-dark">
        <Card.Img width="100%" src={dish.dish.image} alt={dish.dish.name} />
        <Card.ImgOverlay>
          <Card.Title heading>{dish.dish.name}</Card.Title>
        </Card.ImgOverlay>
      </Link>
    </Card>
  );
}

// export default MenuComponent
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 mt-5">
        <MenuComponent dish={dish} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb className="mt-4 bg-light text-white">
          <BreadcrumbItem className="list-unstyled">
            <Link to="/home"  className="text-primary text-decoration-none">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active className="text-dark">
            Menu
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr/>
        </div>
      </div>
      <div className="row justify-content-center">{menu}</div>
    </div>
  );
};
export default Menu;
