import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import axios from "axios";
import "./HomePage.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login } from "../Redux/Action/AuthAction";
import { toast } from "react-toastify";

class CpLoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      token: "",
      email: "",
      password: "",
      message: [],
      isSignedin: false
    };
  }

  //form data
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    let body = { email, password };
    this.setState({ loading: true });
    this.props.actions
      .login({ body }, "cp")
      .then(response => {
        console.log(response.message.data.success, "ooo");
        if (response.message.data.success) {
          console.log(response.message.data.success, "---d");
          this.setState({ loading: false });
          // toast.success("Authenticated")
          if (response.message.data.isCp && !response.message.data.isBlocked) {
            localStorage.setItem("cptoken", response.message.data.token);
            this.props.history.push("/provider/Movieupload");
          } else {
            this.props.history.push("/cp");
            toast.error("Your account is blocked contact the Administrator");
          }
        } else {
          console.log(response);
          toast.error("Incorrect login credentials");
        }
      })
      .catch(err => {
        this.setState({ loading: false });
        toast.error("Internal server error");
      });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="bg-solid">
        <MDBRow>
          <MDBCol md="10" lg="5" className=" mx-auto mt-5  ">
            <MDBCard className="p-3 m-5 form-card">
              <MDBCardBody>
                <form onSubmit={this.onSubmit}>
                  {this.state.message.length > 0 && (
                    <div
                      class="alert alert-warning alert-dismissible text-center"
                      role="alert"
                    >
                      {this.state.message}
                    </div>
                  )}
                  <p className="h4 text-center py-4  white-text">Sign In</p>
                  <div className="white-text">
                    <MDBInput
                      name="email"
                      value={email}
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
                      name="password"
                      value={password}
                      label="Your Password"
                      icon="lock"
                      group
                      type="password"
                      onChange={this.onChange}
                      validate
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="success" type="submit">
                      {this.state.loading && (
                        <div class="spinner-border" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      )}
                      Login
                    </MDBBtn>
                  </div>
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
    login: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      login: bindActionCreators(login, dispatch)
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CpLoginPage);
