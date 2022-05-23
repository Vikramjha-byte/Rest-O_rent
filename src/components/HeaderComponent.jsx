import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  FormLabel,
  Modal,
  Nav,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
import { Input } from "reactstrap";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    event.preventDefault();
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " || Password: " +
        this.password.value +
        " || Remember: " +
        this.remember.checked
    );
  }
  render() {
    return (
      <>
        <Navbar className="bg-primary m-0 p-0" expand="md">
          <div className="container-fluid">
            <NavbarBrand href="/" className="text-white me-auto">
              <span className="fa fa-cutlery"> Rest-O-Rent</span>
            </NavbarBrand>
            <Navbar.Toggle
              onClick={this.toggleNav}
              className="mt-2 text-white toggle-nav"
            />
            <Navbar.Collapse
              isOpen={this.state.isNavOpen}
              navbar
              className="justify-content-end "
            >
              <Nav navbar>
                <Nav.Item className="p-2">
                  <Nav.Link className="nav-link text-white" href="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="p-2">
                  <Nav.Link className="nav-link text-white" href="/aboutus">
                    <span className="fa fa-info fa-lg"></span> About
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="p-2">
                  <Nav.Link className="nav-link text-white" href="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="p-2">
                  <Nav.Link className="nav-link text-white" href="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav className="ms-auto" navbar>
                <Nav.Item>
                  <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg"></span> Login
                  </Button>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <div class=" p-5 bg-primary text-white ">
          <div className="container-fluid">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>
                  Welcome to <span className="fa fa-cutlery"> Rest-O-Rent</span>{" "}
                </h1>
                <p>
                  We take inspiration from the world's best cuisines, and create
                  a unique fusion experience.Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </div>

        <Modal show={this.state.isModalOpen} onHide={this.toggleModal}>
          <Modal.Header toggle={this.toggleModal}>Login</Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleLogin}>
              <FormGroup className="mt-4">
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup className="mt-4">
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check className="mt-4">
                <FormLabel check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </FormLabel>
              </FormGroup>
              <Button
                type="submit"
                value="submit"
                className="mt-4"
                color="bg-primary"
              >
                {" "}
                Login
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default HeaderComponent;
