import React from "react";
import {
  MDBRow,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";
import decode from "jwt-decode";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import Routes from "./Routes";
import { Authenticated } from "./Redux/Action/AuthAction";

class AppContainer extends React.Component {
  // test
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });
  checkAuth() {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }
    try {
      const payload = decode(token);
      console.log(payload);
      if (payload.exp < Date.now() / 1000) {
        console.log(payload);
        return false;
      } else {
        this.props.Authenticated(payload);
        return true;
      }
    } catch (e) {
      return false;
    }
    return true;
  }

  handleLogout() {
    localStorage.removeItem("token");
    this.prop.history.push("/login");
  }
  render() {
    const isAuth = this.checkAuth();
    const { collapseID } = this.state;
    console.log(this.props.authenticated, "hello world");
    console.log(isAuth);
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );
    return (
      <Router>
        <div className="flyout">
          <MDBNavbar color="success-color" expand="md" fixed="top" scrolling>
            <MDBRow
              color=""
              className="white-text col-lg-9 shadow-none mx-auto"
            >
              <MDBNavbarBrand href="/">
                <img
                  src={require("./src/assets/logo.svg")}
                  alt="logo"
                  style={{ height: "2.7rem", width: "10.5rem" }}
                />
              </MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse("mainNavbarCollapse")}
                color="white"
              />
              <MDBCollapse
                id="mainNavbarCollapse"
                isOpen={this.state.collapseID}
                navbar
                color="white"
              >
                <MDBNavbarNav right>
                  {!this.props.authenticated.isAuth && (
                    <>
                      <MDBNavItem>
                        <MDBNavLink
                          className="white-text"
                          exact
                          to="/"
                          onClick={this.closeCollapse("mainNavbarCollapse")}
                        >
                          Home
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink
                          className="white-text"
                          onClick={this.closeCollapse("mainNavbarCollapse")}
                          to="/cp"
                        >
                          Content Creator
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink
                          className="white-text"
                          onClick={this.closeCollapse("mainNavbarCollapse")}
                          to="/plans"
                        >
                          Plans
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink
                          className="white-text"
                          onClick={this.closeCollapse("mainNavbarCollapse")}
                          to="/about"
                        >
                          About
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink
                          className="white-text"
                          onClick={this.closeCollapse("mainNavbarCollapse")}
                          to="/login"
                        >
                          Login
                        </MDBNavLink>
                      </MDBNavItem>
                    </>
                  )}

                  <MDBNavItem>
                    <MDBNavLink
                      className="waves-effect waves-light d-flex align-items-center"
                      to="#!"
                    >
                      <MDBIcon icon="bell" className=" ml-1 pt-2" />
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        className="dopdown-toggle"
                        caret
                        nav
                        color="white"
                      >
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                          className="rounded-circle z-depth-0"
                          style={{ height: "35px", padding: 0 }}
                          alt=""
                        />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className="dropdown-default" right>
                        <MDBDropdownItem href="profile">
                          Profile
                        </MDBDropdownItem>
                        <MDBDropdownItem href="editprofile">
                          {" "}
                          Edit Profile
                        </MDBDropdownItem>
                        <MDBDropdownItem href="history">
                          History
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          href="/login"
                          onClick={this.handleLogout}
                        >
                          Log out
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBRow>
          </MDBNavbar>
          {collapseID && overlay}
          <main style={{ marginTop: "4rem" }}>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(null, { Authenticated })(AppContainer);
