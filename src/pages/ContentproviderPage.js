import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const ContentproviderPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6" className="mx-auto py-5">
          <form>
            <p className="h4 text-center mb-4">
              Content Provider Registeration
            </p>

            <input
              placeholder="Content Provider Name Eg. Business Name"
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
            />
            <br />

            <input
              placeholder="Business Email"
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
            />
            <br />

            <input
              placeholder="Mobile Phone Number/Office"
              type="text"
              id="defaultFormRegisterConfirmEx"
              className="form-control"
            />
            <br />

            <input
              placeholder="Password"
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
            />
            <br />

            <input
              placeholder="Confirm Password"
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
            />
            <div className="text-center mt-4">
              <MDBBtn color="success" type="submit">
                Create New Content Provider
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContentproviderPage;
