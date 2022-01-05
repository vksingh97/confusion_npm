import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const clickedDish = this.props.selectedDish;
    console.log(clickedDish);
    if (clickedDish != null) {
      return (
        <div className="row">
          <div key={clickedDish.id} className="col-12 col-md-5 m-1">
            <Card>
              <CardImg
                width="100%"
                src={clickedDish.image}
                alt={clickedDish.name}
              />
              <CardBody>
                <CardTitle>{clickedDish.name}</CardTitle>
                <CardText>{clickedDish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {clickedDish.comments.map((elem) => {
              return (
                <div>
                  <p>{elem.comment}</p>
                  <p>
                    -- {elem.author}, {elem.date.substring(0, 10)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
