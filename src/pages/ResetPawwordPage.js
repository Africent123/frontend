import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody,  } from "mdbreact";
import "./HomePage.css";

class ResetPawwordPage extends React.Component {
  render() {
    return (
      <div >

        <MDBRow className="bg-solid" >
          <MDBCol md="10" lg="5" className=" mx-auto mt-5 ">
            <MDBCard className="p-4 m-5 form-card">
              <MDBCardBody>
                <form>
                  <p className="h4 text-center py-4 white-text">Reset Password</p>
                  <div className="grey-text">
                    
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="success" type="submit">
                      Sign Up
                    </MDBBtn>
                  </div>
                   <p className="small text-center py-4 white-text"> Have an Account. Sign in <a href="login">here </a>| Don't have Account. Sign up <a href="register">here</a></p>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          
        </MDBRow>


    </div>

    
    );
  }
}

export default ResetPawwordPage;
