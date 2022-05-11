import React from "react";
import { Card } from "react-bootstrap";

function DishdetailComponent(props) {
  let commentDate=(date) => {
    let comDate = new Date(date);
    let cdate = comDate.toDateString().split(" ");
    let aDate = cdate[1] + " " + cdate[2] + ", " + cdate[3];
    return aDate;
  }
  return (
    <div>
      {" "}
      <div className="col-12  mt-5">
        <Card>
          <div className="row justify-content-center">
            <div className="col-12 col-md-5">
              <Card.Img
                width="100%"
                src={props.selectedDish.image}
                alt={props.selectedDish.name}
              />
              <Card.Body>
                <Card.Title heading>{props.selectedDish.name}</Card.Title>
                <Card.Text>{props.selectedDish.description}</Card.Text>
              </Card.Body>
            </div>
            <div className="col-12 col-md-7">
              <Card.Body>
                <Card.Title heading>Comments</Card.Title>
                <div>
                  {props.selectedDish.comments.map((comment) => {
                    return (
                      <div key={comment.id}>
                        <h6>{comment.comment}</h6>
                        <sup>--{comment.author}, {commentDate(comment.date)}</sup>
                        {/*
                         * Date Can also be implemented as
                         * new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))
                         * */}
                      </div>
                    );
                  })}
                </div>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default DishdetailComponent;
