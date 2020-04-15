import React, { Component } from "react";
import { MDBNav, MDBNavLink, MDBCol } from "mdbreact";

class AdminSidenavPage extends Component {
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
            <MDBNavLink className="white-text"  to="/admin/providerslist">Content Provider list</MDBNavLink>
	    <MDBNavLink className="white-text"  to="/admin/userlist">User list</MDBNavLink>
            <MDBNavLink className="white-text" to="/admin/moviecategory">Movie Categories  </MDBNavLink>
            <MDBNavLink className="white-text" to="/admin/movies">Movie</MDBNavLink>
            <MDBNavLink className="white-text" to="/admin/userpayment">Payement</MDBNavLink>
            <MDBNavLink className="white-text" to="/admin/registercontentprovider">Create New Content Creator</MDBNavLink>
            <MDBNavLink className="white-text" to="/admin/selectplan">select plan</MDBNavLink>
            <MDBNavLink className="white-text py-5" to="#!">Log out</MDBNavLink>
          </MDBNav>
        </MDBCol>
    );
  }
}

export default AdminSidenavPage;
