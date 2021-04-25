import React from "react";
import { MDBCol, MDBContainer, MDBRow} from "mdbreact";

const FooterLink = props => {
  return (
    <>
       <MDBContainer className="pt-4">
      
    
          <MDBRow>
            <MDBCol md="6" lg="3">
              <h6 className="title  py-2">Download Our App</h6>
              <MDBRow>
              {/* <MDBCol md="12">
              <img 
                src={require("../assets/img/applestore.png")}
                className="footerimage"
                alt=""
              />
              
            </MDBCol> */}
            <MDBCol md="12">
              <img
                src={require("../assets/img/playstore.png")}
                className="footerimage"
                alt=""
              />
            </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="6" sm="12" lg="3">
              <h6 className="title py-2 white-text">Resource</h6>
              
              
                <li className="list-unstyled white-text">
                  <a href="/about" className="white-text">About Us</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!" className="white-text">Pricing Plan</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!" className="white-text">Help</a>
                </li>
              
            </MDBCol>
            <MDBCol md="6" lg="3">
              <h6 className="title py-2">Legal</h6>
              
                <li className="list-unstyled">
                  <a href="/terms" className="white-text">Terms and Conditions</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!" className="white-text">Privacy Policy</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!" className="white-text">Security</a>
                </li>
              
            </MDBCol>
            <MDBCol md="6" lg="3">
              <h6 className="title py-2">Contact Us</h6>
              
             
                <li className="list-unstyled">
                  Customercare@kannywoodtv.com.ng
                </li>
               
                
              
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-center pt-5">
        <div className="  footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="kannywood.com" className="white-text">kannywoodtv.com.ng </a>
          </MDBContainer>
        </div>
        </MDBRow>

    </MDBContainer>
    </>
  );
};

export default FooterLink;
