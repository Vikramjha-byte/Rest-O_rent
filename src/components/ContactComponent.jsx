import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Form,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormFeedback, Input } from "reactstrap";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      telNum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      touched: {
        firstName: false,
        lastName: false,
        telNum: false,
        email: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type == "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("Current State is:" + JSON.stringify(this.state));
    alert("Current State is:" + JSON.stringify(this.state));
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate(firstName, lastName, telNum, email) {
    const errors = {
      firstName: "",
      lastName: "",
      telNum: "",
      email: "",
    };
    if (this.state.touched.firstName && firstName.length < 3) {
      errors.firstName = "First Name should be >= 3 characters";
    } else if (this.state.touched.firstName && firstName.length > 10) {
      errors.firstName = "First Name should be <= 10 characters";
    }

    if (this.state.touched.lastName && lastName.length < 3) {
      errors.lastName = "Last Name should be >= 3 characters";
    } else if (this.state.touched.lastName && lastName.length > 10) {
      errors.lastName = "Last Name should be <= 10 characters";
    }

    const reg = /^\d+$/;

    if (this.state.touched.telNum && !reg.test(telNum)) {
      errors.telNum = "Tel. Number should contain only numbers";
    }

    if (
      this.state.touched.email &&
      email.split("").filter((x) => x === "@").length !== 1
    ) {
      errors.email = "Email should contain a @";
    }

    return errors;
  }
  render() {
    const errors = this.validate(
      this.state.firstName,
      this.state.lastName,
      this.state.telNum,
      this.state.email
    );
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb className="mt-4 bg-light text-white">
            <BreadcrumbItem className="list-unstyled">
              <Link to="/home" className="text-primary text-decoration-none">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem active className="text-dark">
              Contact Us
            </BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              1500, Gangasagar,Madarpur
              <br />
              Darbhanga, Bihar
              <br />
              India
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+7979893048"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:vikram.kj12@gmail.com"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <hr className="mt-4 mb-4" />
        <div className="row row-content">
          <div className="col-12">
            <h3 className="mt-4 mb-4">Send Us Your Feedback</h3>
          </div>
          <div className="col-12 col-md-9 mt-4">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row className="mt-4">
                <FormLabel htmlFor="firstName" md={2}>
                  First Name
                </FormLabel>
                <Col md={10}>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    valid={errors.firstName===''}
                    invalid={errors.firstName!==''}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("firstName")}
                  />
                  <FormFeedback>{errors.firstName}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row className="mt-4">
                <FormLabel htmlFor="lastName" md={2}>
                  Last Name
                </FormLabel>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    valid={errors.lastName===''}
                    invalid={errors.lastName!==''}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("lastName")}
                  />
                  <FormFeedback>{errors.lastName}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row className="mt-4">
                <FormLabel htmlFor="telNum" md={2}>
                  Phone
                </FormLabel>
                <Col md={10}>
                  <Input
                    type="tel"
                    id="telNum"
                    name="telNum"
                    placeholder="Tel. Number"
                    value={this.state.telNum}
                    valid={errors.telNum===''}
                    invalid={errors.telNum!==''}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("telNum")}
                  />
                  <FormFeedback>{errors.telNum}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row className="mt-4">
                <FormLabel htmlFor="email" md={2}>
                  Email
                </FormLabel>
                <Col md={10}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    valid={errors.email===''}
                    invalid={errors.email!==''}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("email")}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row className="mt-4">
                <Col md={{ size: 6 }}>
                  <FormGroup check>
                    <FormLabel check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleInputChange}
                      />{" "}
                      <strong>May we contact you?</strong>
                    </FormLabel>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="contactType"
                    value={this.state.contactType}
                    onChange={this.handleInputChange}
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row className="mt-4">
                <FormLabel htmlFor="message" md={2}>
                  Your Feedback
                </FormLabel>
                <Col md={10}>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    rows="12"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="mt-4">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
