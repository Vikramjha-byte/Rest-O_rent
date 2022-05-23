import React from "react";
import { Breadcrumb, BreadcrumbItem, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";


function RenderDish({ dish }) {
  return (
    <div className="col-12  m-1">
      <Card>
        <Card.Img top src={dish.image} alt={dish.name} />
        <Card.Body>
          <Card.Title>{dish.name}</Card.Title>
          <Card.Text>{dish.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments != null) {
    return (
      <div className="col-12  m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  --{comment.author},
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  else{
    return(
      <div></div>
    )
  }
}



function DishdetailComponent(props) {
  const {dishId}= useParams();
console.log(props)
  return (
    <>
{props.dishes.filter((dish)=>dish.id===parseInt(dishId)).map((dish)=>(
 dish!==null ?
 
 <div className="container">
      <div className="row">
    <Breadcrumb className="mt-4 bg-light text-white">
     <BreadcrumbItem className="list-unstyled">
      <Link to="/menu" className="text-primary text-decoration-none">Menu</Link>
   </BreadcrumbItem>
   <BreadcrumbItem active className="text-dark">{dish.name}</BreadcrumbItem>
  </Breadcrumb>
  <div className="col-12">
    <h3>{dish.name}</h3>
    <hr />
   </div>
  </div>
 <div className="row">
   <div className="col-12 col-md-5 m-1">
    <RenderDish dish={dish} />
  </div>
   <div className="col-12 col-md-5 m-1">
    <RenderComments comments={props.comments.filter((comment)=>comment.dishId===parseInt(dishId))} />
  </div>
  </div>
   </div>
 
 
 
 :null
))}
    </>
  )
}



export default DishdetailComponent;
