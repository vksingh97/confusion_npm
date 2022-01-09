import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

export const RenderDish = ({ clickedDish }) => {
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

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish clickedDish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <RenderComments comments={props.comments} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
