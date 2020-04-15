import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCardImage } from "mdbreact";
import "./HomePage.css";
import FooterLink from "./../components/FooterLink";
import TabsPage from "./../components/TabsPage";
import MoviecatagorisNavPage from "./../components/MoviecatagorisNavPage";

class CategoryPage extends React.Component {
  render() {
    return (
      <>
        <MDBContainer className="pt-3">
          <MoviecatagorisNavPage title="MoviecatagorisNavPage" />
        </MDBContainer>
        <MDBContainer>
          <MDBRow className="pt-5">
            <MDBCol md="6">
              <MDBCardImage
                src={require("../assets/img/cat1.png")}
                alt="MDBCard image cap"
                top
                hover
                overlay="white-slight"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBCardImage
                src={require("../assets/img/cat3.png")}
                alt="MDBCard image cap"
                top
                hover
                overlay="white-slight"
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className="pt-5">
            <MDBCol md="6">
              <MDBCardImage
                src={require("../assets/img/cat2.png")}
                alt="MDBCard image cap"
                top
                hover
                overlay="white-slight"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBCardImage
                src={require("../assets/img/cat4.png")}
                alt="MDBCard image cap"
                top
                hover
                overlay="white-slight"
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <MDBRow className="mx-auto">
            <h5 className="pt-5 pb-3 green-text">Featured Movies</h5>
            <TabsPage title="TabsPage" className="mx-auto" />
          </MDBRow>
        </MDBContainer>
        <MDBContainer>
          <MDBRow className="mx-auto">
            <h5 className="pt-2 pb-3 green-text">Trending Movies</h5>
            <TabsPage title="TabsPage" className="mx-auto" />
          </MDBRow>
        </MDBContainer>

        <FooterLink title="Footer" />
      </>
    );
  }
}

export default CategoryPage;
