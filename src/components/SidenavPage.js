import React, { Component } from "react";
import { MDBNav, MDBNavLink, MDBContainer, MDBRow, MDBCol } from "mdbreact";

class SidenavPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    
        <MDBCol className="px-0 ">
          <MDBNav className="flex-column text-center  pt-5">
            <MDBNavLink className="white-text"  to="/provider/Movieupload">Movie Upload</MDBNavLink>
            <MDBNavLink className="white-text" to="/provider/movielist">Movie List </MDBNavLink>
            <MDBNavLink className="white-text" to="/provider/profile">Content Provider Profile</MDBNavLink>
            <MDBNavLink className="white-text" to="/provider/payment">Payment</MDBNavLink>
            <MDBNavLink className="white-text" to="/provider/recentlywatched">Watched Movie</MDBNavLink>
            <MDBNavLink className="white-text py-5" to="#!">Log out</MDBNavLink>
          </MDBNav>
        </MDBCol>
    );
  }
}

export default SidenavPage;
