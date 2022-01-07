import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const RenderDish = (props) => {
  return (
    <Card>
      <CardImg
        width="100%"
        src={props.clickedDish.image}
        alt={props.clickedDish.name}
      />
      <CardBody>
        <CardTitle>{props.clickedDish.name}</CardTitle>
        <CardText>{props.clickedDish.description}</CardText>
      </CardBody>
    </Card>
  );
};

const RenderComments = (props) => {
  {
    props.clickedDish.comments.map((elem) => {
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
  }
};

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const clickedDish = this.props.dish;
    // console.log(this.props.dish);
    if (clickedDish != null) {
      return (
        <div className="row">
          <div key={clickedDish.id} className="col-12 col-md-5 m-1">
            <RenderDish clickedDish={clickedDish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <RenderComments clickedDish={clickedDish} />
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
