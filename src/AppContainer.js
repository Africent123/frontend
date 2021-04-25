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
import Logo from "./assets/logo.svg";
import Routes from "./Routes";
import { Authenticated } from "./Redux/Action/AuthAction";

class AppContainer extends React.Component {
  // test
  state = {
    collapseID: "",
    NavBar: null
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });
    componentWillMount(){
      let isAuth = this.checkAuth()
      this.setState({NavBar: isAuth})
    }
    
    componentDidMount(){
      let isAuth = this.checkAuth()
      this.setState({NavBar: isAuth})
    }

    // componentDidUpdate(){
    //   let isAuth = this.checkAuth()
    //   this.setState({NavBar: isAuth})
    // }

  checkAuth() {
    const token = localStorage.getItem("token");
    const cptoken = localStorage.getItem("cptoken")
    if (!token) {
      return false;
    }
    try {
      const payload = decode(token);
      //console.log(payload);
      if (payload.exp < Date.now() / 1000) {
        //console.log(payload);
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
    //console.log(this.state.NavBar, "Navbar toggler")
    const isAuth = this.checkAuth();
    const { collapseID } = this.state;
    //console.log(this.props.authenticated, "hello world");
    //console.log(isAuth);
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
          <MDBNavbar color="success-color" dark expand="md">
            <MDBNavbarBrand href="/">
              {/* <Logoh /> */}
              <img
                src={Logo}
                alt="logo"
                style={{ height: "4.0rem", width: "20.5rem" }}
              />
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse("navbarCollapse3")}
            />
            <MDBCollapse
              id="navbarCollapse3"
              isOpen={this.state.collapseID}
              navbar
            >
              <MDBNavbarNav right>
                {this.state.NavBar &&
                <MDBNavItem active>
                  <MDBNavLink className="white-text" exact to="/">
                    Home
                  </MDBNavLink>
                </MDBNavItem>
  }
                {!this.state.NavBar && (
                  <>
                    <MDBNavItem>
                      <MDBNavLink className="white-text" to="/cp">
                        Content Creator
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink className="white-text" to="/plans">
                        Plans
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink className="white-text" to="/about">
                        About
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink className="white-text" to="/login">
                        Login
                      </MDBNavLink>
                    </MDBNavItem>
                  </>
                )}
                {this.state.NavBar && (
                  <>
                    <MDBNavItem>
                      <MDBNavLink
                        className="waves-effect waves-light d-flex align-items-center"
                        to="#!"
                      >
                        <MDBIcon icon="bell" className="ml-1  pt-2" />
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBDropdown>
                        <MDBDropdownToggle caret className="dopdown-toggle" nav>
                          <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                            className="rounded-circle z-depth-0"
                            style={{ height: "32px", padding: 0 }}
                            alt=""
                          />
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default" right>
                          <MDBDropdownItem href="profile">
                            Profile
                          </MDBDropdownItem>
                          <MDBDropdownItem href="editprofile">
                            Edit Profile
                          </MDBDropdownItem>
                          <MDBDropdownItem href="History">
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
                  </>
                )}
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {collapseID && overlay}
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(null, { Authenticated })(AppContainer);
