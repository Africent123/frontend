import React, { Component } from "react";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBFormInline } from "mdbreact";

class MoviecatagorisNavPage extends Component {
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
                <div className="d-none d-md-inline">Movie Category</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default bg-success">
                <MDBDropdownItem href="/movies" className="text-white  bg-success ">Action</MDBDropdownItem>
                <MDBDropdownItem href="#!" className="text-white  bg-success ">Romantic</MDBDropdownItem>
                <MDBDropdownItem href="#!" className="text-white  bg-success ">Comedy</MDBDropdownItem>
                <MDBDropdownItem href="#!" className="text-white  bg-success ">Horror</MDBDropdownItem>
                <MDBDropdownItem href="#!" className="text-white  bg-success ">Advanture</MDBDropdownItem>
                <MDBDropdownItem href="#!" className="text-white  bg-success ">Mystry</MDBDropdownItem>
                <MDBDropdownItem href="#!" className="text-white  bg-success ">TV Show</MDBDropdownItem>
                <MDBDropdownItem href="#!" className="text-white  bg-success ">Others</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-none d-md-inline"> Short by List</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default bg-success text-white">
                <MDBDropdownItem href="#!" className="text-white  bg-success ">Featured Movies</MDBDropdownItem>
                <MDBDropdownItem href="#!" className="text-white  bg-success ">New Movies</MDBDropdownItem>
                <MDBDropdownItem href="#!" className="text-white  bg-success ">Trending Movies</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          
          <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>

        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

export default MoviecatagorisNavPage;