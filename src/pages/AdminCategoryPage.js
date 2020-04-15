import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCardImage } from "mdbreact";
import "./HomePage.css";
import FooterLink from "./../components/FooterLink";
import TabsPage from "./../components/TabsPage";
import MoviecatagorisNavPage from "./../components/MoviecatagorisNavPage";
import AdminSidenavPage from "./../components/AdminSidenavPage";

class CategoryPage extends React.Component {
  render() {
    const imgStyle = {
      width: "500px",
      height: "400px"
    };
    return (
      <>
        <MDBCol className="container-fluid">
          <MDBRow className="">
            <MDBCol md="2" className="px-0 bg-success ">
              <AdminSidenavPage title="AdminSidenavPage" />
            </MDBCol>
            <MDBCol md="10" className="">
              <MDBContainer className="pt-3">
                <MoviecatagorisNavPage title="MoviecatagorisNavPage" />
              </MDBContainer>
              <MDBContainer>
                <MDBRow className="pt-5">
                  <MDBCol md="6">
                    <MDBCardImage
                      style={imgStyle}
                      src={require("../assets/img/01.png")}
                      alt="MDBCard image cap"
                      top
                      hover
                      overlay="white-slight"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBCardImage
                      style={imgStyle}
                      src={require("../assets/img/02.png")}
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
                      style={imgStyle}
                      src={require("../assets/img/03.png")}
                      alt="MDBCard image cap"
                      top
                      hover
                      overlay="white-slight"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBCardImage
                      style={imgStyle}
                      src={require("../assets/img/04.png")}
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
            </MDBCol>
          </MDBRow>
        </MDBCol>

        <FooterLink title="Footer" />
      </>
    );
  }
}

export default CategoryPage;
