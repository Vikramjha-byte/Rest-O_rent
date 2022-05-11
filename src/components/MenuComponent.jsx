import React from "react";
import { Card } from "react-bootstrap";

 function MenuComponent(dish,onClick) {
  return (
    
    <Card onClick={()=>dish.onClick(dish.dish.id)}>
            <Card.Img width="100%" src={dish.dish.image} alt={dish.dish.name} />
            <Card.ImgOverlay>
              <Card.Title heading>{dish.dish.name}</Card.Title>
            </Card.ImgOverlay>
          </Card>
  )
}

// export default MenuComponent
 const Menu=(props)=>
{
  const menu = props.dishes.map((dish) => {
    
    return (
      <div key={dish.id} className="col-12 col-md-5 mt-5">
       
       <MenuComponent dish={dish} onClick={props.onClick}/>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row justify-content-center">{menu}</div>
    </div>
  );
}    
 export default Menu;

