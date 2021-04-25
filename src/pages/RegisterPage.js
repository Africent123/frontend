import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { registration } from "../Redux/Action/AuthAction";
import { toast } from "react-toastify";
import "./HomePage.css";

class RegisterPage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      password2: "",
      loading: false
    };
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, phoneNumber, password, password2 } = this.state;
    const userData = { name, email, phoneNumber, password, password2 };
    this.props.actions
      .register(userData)
      .then(response => {
        if (response.message.data.success) {
          this.setState({ loading: false });
          toast.success(response.message.data.message);
          this.props.history.push("/login");
        } else {
          Object.keys(response.message.data.message).length > 0 &&
          typeof response.message.data.message === "object"
            ? Object.keys(response.message.data.message).map(message => {
                toast.error(response.message.data.message[message]);
              })
            : toast.error(response.message.data.message);
        }
        //console.log(response.message.data, "registration page");
      })
      .catch(error => {
        //console.log(error, "from reg catch");
        toast.error("Internal server error");
      });
  };
  render() {
    const { name, email, phoneNumber, password, password2 } = this.state;
    return (
      <div className="bg-solid">
        <MDBRow>
          <MDBCol md="10" lg="5" className=" mx-auto mt-5 ">
            <MDBCard className="p-3 m-5 form-card">
              <MDBCardBody>
                <form onSubmit={this.onSubmit}>
                  {/* {this.state.ErroMessage.length > 0 && (
                    <div
                      class="alert alert-warning alert-dismissible text-center"
                      role="alert"
                    >
                      {this.state.ErroMessage}
                    </div>
                  )} */}

                  <p className="h4 text-center white-text py-4">Register</p>

                  <div className="grey-text">
                    <MDBInput
                      name="name"
                      value={name}
                      placeholder="Name"
                      label="Name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.onChange}
                    />

                    <MDBInput
                      type="text"
                      name="phoneNumber"
                      value={phoneNumber}
                      placeholder="08012345568"
                      label="Phone Number"
                      icon="phone"
                      group
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.onChange}
                    />

                    <MDBInput
                      type="email"
                      name="email"
                      value={email}
                      placeholder="mike@email.com"
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.onChange}
                    />
                    <MDBInput
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Password"
                      label="Your Password"
                      icon="lock"
                      group
                      validate
                      onChange={this.onChange}
                    />
                    <MDBInput
                      type="password"
                      name="password2"
                      value={password2}
                      placeholder="Confirm Password"
                      label="Confirm Your password"
                      icon="lock"
                      group
                      validate
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn
                      color="success"
                      type="submit"
                      disabled={this.state.loading}
                    >
                      {this.state.loading && (
                        <div class="spinner-border" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      )}
                      Sign Up
                    </MDBBtn>
                  </div>
                  <p className="small text-center  white-text py-4">
                    {" "}
                    Already have account. Sign in <a href="login">here</a>|
                    <a href="reset"> Forgot password</a>{" "}
                  </p>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    registration: state.registration
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      register: bindActionCreators(registration, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);
