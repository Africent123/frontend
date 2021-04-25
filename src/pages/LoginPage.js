import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import decode from "jwt-decode";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login } from "../Redux/Action/AuthAction";
import { toast } from "react-toastify";
import "./HomePage.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      token: "",
      email: "",
      password: "",
      message: [],
      isSignedin: false,
      disabled: false
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  checkAuth() {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }
    try {
      const payload = decode(token);
      //console.log(payload);
      if (payload.exp < Date.now() / 1000) {
        //console.log(payload.exp);
        return false;
      } else {
        return true;
      }
    } catch (e) {
      return false;
    }
    return true;
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ loading: true });
    let body = { email, password };

    this.props.actions
      .login({ body }, "user")
      .then(response => {
        //console.log(response.message.data.success, "ooo");
        if (response.message.data.success) {
          //console.log(response.message.data.success, "---d");
          this.setState({ loading: false });
          // toast.success("Authenticated")
          if (
            response.message.data.isUser &&
            !response.message.data.isBlocked
          ) {
            localStorage.setItem("token", response.message.data.token);
            this.props.history.push("/movies");
          } else if (
            response.message.data.isAdmin &&
            !response.message.data.isBlocked
          ) {
            localStorage.setItem("token", response.message.data.token);

            this.props.history.push("/admin/providerslist");
          } else {
            this.props.history.push("/login");
            toast.error("Your account is blocked contact the Administrator");
          }
        } else {
          //console.log(response);
          toast.error("Incorrect login credentials");
        }
      })
      .catch(err => {
        this.setState({ loading: false });
        toast.error("Incorrect login credentials");
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
                    <MDBBtn
                      color="success"
                      type="submit"
                      disabled={this.state.loading}
                    >
                      {this.state.loading && (
                        <div className="spinner-border" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      )}
                      Login
                    </MDBBtn>
                  </div>
                  <p className="small text-center py-4 white-text">
                    {" "}
                    Don't have Account. Sign up <a href="register">
                      here
                    </a> | <a href="reset">Forgot password </a>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
