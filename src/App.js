import React, { Component } from "react";
import AppContainer from "./AppContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import decode from "jwt-decode";

let getToken = localStorage.getItem("token");
const payload = getToken !== null ? decode(getToken) : null;

class App extends Component {
  checkAuth() {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }
    try {
      const payload = decode(token);
      console.log(payload, "payload here");
      if (payload.exp < Date.now() / 1000) {
        return false;
      } else {
        return true;
      }
    } catch (e) {
      return false;
    }
    return true;
  }

  componentDidMount() {
    let getToken = localStorage.getItem("token");
    console.log(getToken, "is null");
  }

  render() {
    // this.props.Authenticated(payload);
    console.log(this.checkAuth(), "isAuth");
    const isAuth = this.checkAuth();

    console.log(this.props, "here");
    return (
      <>
        <AppContainer authenticated={{ ...this.props.authenticated, isAuth }} />
        <ToastContainer autoClose={3000} hideProgressBar />
      </>
    );
  }
}

const mapStateToProps = state => {
  let getToken = localStorage.getItem("token");
  console.log(getToken);

  return {
    authenticated: payload
  };
};

export default connect(mapStateToProps)(App);
