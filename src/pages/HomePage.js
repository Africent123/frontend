import React from "react";
import {
  MDBCol,
  MDBMedia,
  MDBContainer,
  MDBRow,
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBBtn,
  MDBView,
  MDBMask,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle
} from "mdbreact";
import "./HomePage.css";
import FooterLink from "./../components/FooterLink";
import TabsPage from "./../components/TabsPage";

import ProgressBar from "react-bootstrap/ProgressBar";

class HomePage extends React.Component {
  render() {
    const imgStyle = {
      width: "50%",
      height: "40%"
    };
    return (
      <>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={require("../assets/img/10.JPG")}
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <div className="h4">Watch Thousands of Movies And Series</div>
                <h5 className="py-2">
                  on all your Devices Without Paying More
                </h5>
                <div className="pb-3">
                  <MDBBtn
                    color=""
                    className="btn bg-success slider-btn "
                    size="md"
                  >
                    Watch Now
                  </MDBBtn>
                  <MDBBtn
                    className="btn btn-outline-white  slider-btn"
                    size="md"
                  >
                    Playlist
                  </MDBBtn>
                </div>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={require("../assets/img/11.JPG")}
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>
                <div className="h4">Watch Thousands of Movies And Series</div>
                <h5 className="py-2">
                  on all your Devices Without Paying More
                </h5>
                <div className="pb-3">
                  <MDBBtn
                    color=""
                    className="btn bg-success slider-btn "
                    size="md"
                  >
                    Watch Now
                  </MDBBtn>
                  <MDBBtn
                    className="btn btn-outline-white  slider-btn"
                    size="md"
                  >
                    Playlist
                  </MDBBtn>
                </div>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={require("../assets/img/12.jpg")}
                  alt="Third slide"
                />
                <MDBMask overlay="black-slight" />
              </MDBView>
              <MDBCarouselCaption>
                <div className="h4">
                  KANNYWOOD TV live! The best of Hausa movies, series and other
                  Global movies and Series on your devices without paying more.
                </div>
                <h5 className="py-2">
                  on all your Devices Without Paying More
                </h5>
                <div className="pb-3">
                  <MDBBtn
                    color=""
                    className="btn bg-success slider-btn "
                    size="md"
                  >
                    Watch Now
                  </MDBBtn>
                  <MDBBtn
                    className="btn btn-outline-white  slider-btn"
                    size="md"
                  >
                    Playlist
                  </MDBBtn>
                </div>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>

        <MDBContainer>
          <MDBRow className="pt-5">
            <MDBCol md="6">
              <p tag="h4" className=" text-center mx-auto green-text">
                Suggested Movies
              </p>

              <MDBCardImage
                style={imgStyle}
                src={require("../assets/img/06.png")}
                alt="MDBCard image cap"
                top
                hover
                overlay="white-slight"
              />
            </MDBCol>
            <MDBCol md="6">
              <p tag="h4" className="text-center green-text">
                Action Movies
              </p>
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

        <MDBContainer>
          <MDBRow>
            <h4 className="text-center mx-auto pt-5 green-text">Plans </h4>
          </MDBRow>
          <MDBCol md="9" className="mx-auto py-5">
            <MDBRow>
              <MDBCol md="4" className="my-3  px-0 text-center">
                <MDBCard className="shadow-none">
                  <MDBCardBody>
                    <MDBCardTitle tag="h4" className="pt-4 mt-1 dark-grey-text">
                      BASIC
                    </MDBCardTitle>
                    <MDBCardText>
                      <div className="pt-3 ">
                        Watch on your laptop, TV, phone and tablet
                      </div>
                      <div className="pt-3 pb-3">
                        {" "}
                        Unlimited movies and TV shows Cancel anytime, First
                        month free{" "}
                      </div>
                      <div className="h4"> $499 </div>
                    </MDBCardText>
                    <MDBBtn
                      color=""
                      className="btn btn-outline-success slider-btn "
                      size="md"
                    >
                      Purchase
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="mx-auto px-0  ">
                <MDBCard className="bg-success white-text text-center">
                  <MDBCardBody className=" pt-5 my-3">
                    <MDBCardTitle tag="h4">STANDARD</MDBCardTitle>
                    <MDBCardText className="pb-0 mb-0">
                      <div className="py-3 white-text">
                        Screens you can watch on at the same time
                      </div>

                      <div className="py-3 white-text">
                        + Everything from the Basic plan
                      </div>
                      <div className="py-2 white-text h4 ">$10.99</div>
                    </MDBCardText>
                    <MDBBtn
                      color="white"
                      className="slider-btn bg-white grey-text"
                      size="md"
                    >
                      Purchase
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="my-3 px-0  text-center">
                <MDBCard className="shadow-none">
                  <MDBCardBody>
                    <MDBCardTitle tag="h4" className="pt-4 mt-1 dark-grey-text">
                      PLUS
                    </MDBCardTitle>
                    <MDBCardText>
                      <div className="py-3 ">
                        HD available Ultra HD available
                      </div>
                      <div className="py-3  ">
                        + Everything from both the Basic and Standard plan
                      </div>
                      <div className="pt-2  h4 ">$24.99</div>
                    </MDBCardText>
                    <MDBBtn
                      color=""
                      className="btn btn-outline-success slider-btn "
                      size="md"
                    >
                      Purchase
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBContainer>
        <MDBContainer>
          <MDBRow>
            <h4 className="text-center mx-auto pt-5 green-text">
              About Kannywood TV{" "}
            </h4>
          </MDBRow>

          <MDBCol md="8" className="mx-auto pt-3 pb-5 text-center">
            <MDBRow>
              <div className="offwhite-text">
                {" "}
                Kannywood TV is an entertainment platform offering a full range
                of services that are empowering, informative, and of course
                innovative in the transformational way of edutainment***
                <br />
                We broadcast quality content with powerful messages of
                empowerment, spirit, and love that will inspire a new way of
                thinking... We aim at bringing positive change in television
                entertainment through promotion and upliftment of our social
                norms and values using informative, educative and innovative
                ideas. Operating a successful business venture while promoting
                Hausa and other African indigenous languages and culture via
                films and Music. We Tell African story at its best.
              </div>
            </MDBRow>
          </MDBCol>
        </MDBContainer>
        <FooterLink title="Footer" />
      </>
    );
  }
}

export default HomePage;
