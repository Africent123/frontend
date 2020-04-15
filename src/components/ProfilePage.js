import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon, MDBBtn,MDBContainer} from "mdbreact";
import FooterLink from "./../components/FooterLink";


class ProfilePage extends React.Component {

   

  render() {
    return (
      <>
       <MDBContainer className="pt-4">
      
    
          <MDBRow>
          <MDBCol md="4" className="mb-md-0 mb-5">
              <img
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                className="rounded z-depth-1-half img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">
                Maria Kate
              </h4>
              <h6 className="text-uppercase grey-text mb-3">Photographer</h6>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                floating
                size="sm"
                className="mx-1 mb-0 btn-dribbble"
              >
                <MDBIcon fab icon="dribbble" />
              </MDBBtn>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <FooterLink
         title="Footer"/>
    </>
  );
};

export default ProfilePage;
