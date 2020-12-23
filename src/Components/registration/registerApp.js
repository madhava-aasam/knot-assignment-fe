import React, { Component } from "react";
import Registration from "./../../services/register";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);

    this.state = {
      first_name: "",
      last_name: "",
      phone: "",
      address: "",
      city: "",
      ssn: "",
      errormessage: null,
    };
  }

  async onRegisterClick(event) {
    event.preventDefault();

    try {
      if (this.state.first_name.length <= 0) {
        this.setState({ errormessage: "Please enter first name" });
        return;
      }

      const user = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        phone: this.state.phone,
        address: { address1: this.state.address, city: this.state.city },
        ssn: this.state.ssn,
      };

      const result = await new Registration().registerUser(user);

      if (result.status == 201) {
        this.setState({ successMessage: "User registered successfully" });
      } else {
        throw Error("registration fail");
      }
    } catch (error) {
      this.setState({ errormessage: "User registration failed" });
      throw error;
    }
  }

  redirectToLogin() {
    try {
      // props.updateTitle("Login");
      // props.history.push("/login");
    } catch (error) {
      throw error;
    }
  }

  changeHandler(event) {
    try {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({ [nam]: val });
    } catch (error) {
      throw error;
    }
  }

  render() {
    return (
      <form onSubmit={this.onRegisterClick}>
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
          <div className="form-group text-left">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="first_name"
              placeholder="Enter first name"
              onChange={this.changeHandler}
            />
          </div>

          <div className="form-group text-left">
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="last_name"
              placeholder="Enter last name"
              onChange={this.changeHandler}
            />
          </div>

          <div className="form-group text-left">
            <label htmlFor="phone">Phone number</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              onChange={this.changeHandler}
            />
          </div>

          <div className="form-group text-left">
            <label htmlFor="Address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder="Enter address"
              onChange={this.changeHandler}
            />
          </div>

          <div className="form-group text-left">
            <label htmlFor="City">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              placeholder="Enter city"
              onChange={this.changeHandler}
            />
          </div>

          <div className="form-group text-left">
            <label htmlFor="ssn">SSN</label>
            <input
              type="text"
              className="form-control"
              id="ssn"
              name="ssn"
              placeholder="Enter SSN"
              onChange={this.changeHandler}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>

          <div
            className="alert alert-success mt-2"
            style={{ display: this.state.errormessage ? "block" : "none" }}
            role="alert"
          >
            {this.state.errormessage}
          </div>

          <div
            className="alert alert-success mt-2"
            style={{ display: this.state.successMessage ? "block" : "none" }}
            role="alert"
          >
            {this.state.successMessage}
          </div>

          <div className="mt-2">
            <span>Already have an account? </span>
            <span className="loginText" onClick={() => this.redirectToLogin()}>
              Login here
            </span>
          </div>
        </div>
      </form>
    );
  }
}
