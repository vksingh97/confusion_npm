import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Row,
  Col,
  FormGroup,
} from "reactstrap";
import { Link } from "react-router-dom";

import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;

const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  handleSubmitComment = (values) => {
    console.log("current state: " + JSON.stringify(values));
    alert(JSON.stringify(values));
  };

  toggleCommentModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };
  render() {
    return (
      <>
        <Button outline onClick={this.toggleCommentModal}>
          <span className="fa fa-edit fa-lg"></span> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleCommentModal}>
          <ModalHeader>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmitComment(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={12}>
                  Rating
                </Label>
                {/* <Col md={{ size: 4, offset: 2 }}> */}
                <Col md={12}>
                  <Control.select
                    model=".rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>Please select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
                {/* </Col> */}
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" md={12}>
                  Name
                </Label>
                <Col md={12}>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="Enter
                        Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be less than 15 characters",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={12}>
                  Comment
                </Label>
                <Col md={12}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    rows="6"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

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

const RenderComments = ({ dish, comments }) => {
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

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{this.props.dish.name}</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDish clickedDish={this.props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
              <RenderComments
                dish={this.props.dish}
                comments={this.props.comments}
              />
              <CommentForm />
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
