import React, { Component } from "react";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

class ProvidermovielistNavPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <MDBNavbar color="" dark expand="md">
      
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
        
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-none d-md-inline">New Upload</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default bg-success">
                <MDBDropdownItem href="#!" className="text-white  bg-success ">Old Upload</MDBDropdownItem>
                <MDBDropdownItem href="#!" className="text-white  bg-success ">New Upload</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-none d-md-inline">Movie Category</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default bg-success text-white">
                <MDBDropdownItem href="#!" className="text-white  bg-success ">Old Upload</MDBDropdownItem>
                <MDBDropdownItem href="#!" className="text-white  bg-success ">New Upload</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon icon="grip-lines" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              
              <MDBIcon icon="th-large" />
            </MDBNavLink>
          </MDBNavItem>

        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

export default ProvidermovielistNavPage;