import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const RenderDish = ({ clickedDish }) => {
  return (
    <Card>
      <CardImg width="100%" src={clickedDish.image} alt={clickedDish.name} />
      <CardBody>
        <CardTitle>{clickedDish.name}</CardTitle>
        <CardText>{clickedDish.description}</CardText>
      </CardBody>
    </Card>
  );
};

const RenderComments = ({ comments }) => {
  return comments.map((elem) => {
    return (
      <div>
        <p>{elem.comment}</p>
        <p>
          -- {elem.author},{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(Date.parse(elem.date)))}
        </p>
      </div>
    );
  });
};

const DishDetail = ({ dish }) => {
  if (dish != null) {
    return (
      <div className="row">
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <RenderDish clickedDish={dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <RenderComments comments={dish.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
