import React from 'react'
import { Card } from 'react-bootstrap';

function RenderCard({item}) {

  return(
      <Card>
          <Card.Img src={item.image} alt={item.name} />
          <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          {item.designation ? <Card.Subtitle>{item.designation}</Card.Subtitle> : null }
          <Card.Text>{item.description}</Card.Text>
          </Card.Body>
      </Card>
  );

}

function HomeComponent( props) {
  return (
    <div className="container">
    <div className="row align-items-start mt-4">
        <div className="col-12 col-md m-1">
            <RenderCard item={props.dish} />
        </div>
        <div className="col-12 col-md m-1">
            <RenderCard item={props.promotion} />
        </div>
        <div className="col-12 col-md m-1">
            <RenderCard item={props.leader} />
        </div>
    </div>
</div>
  )
}

export default HomeComponent