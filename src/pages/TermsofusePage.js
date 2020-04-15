import React from "react";
import {  MDBCol, MDBContainer, MDBRow,MDBBtn, MDBCard, MDBCardBody,MDBCardText, MDBCardTitle, } from "mdbreact";
import "./HomePage.css";
import FooterLink from "./../components/FooterLink";






class HomePage extends React.Component {

   

  render() {
    return (
      <>

      

      <MDBContainer>
        <MDBRow >
          <h4 className="text-center mx-auto pt-5 green-text">Terms and COnditions</h4>
        </MDBRow >

        <MDBCol md="8" className="mx-auto pt-3 pb-5 text-center">
        <MDBRow >
          <div> Kennywood TV is an entertainment platform offering a 
          full range of services that are empowering, 
          informative, and of course innovative in the transformational way of edutainment***<br/>
           We broadcast quality content with powerful messages of empowerment, spirit,
            and love that will inspire a new way of thinking... We aim at bringing positive change 
            in television entertainment through promotion and upliftment of our social norms and values
             using informative, educative and innovative ideas. Operating a successful business venture while
              promoting Hausa and other African indigenous languages and culture via films and Music. We Tell African story at its best.</div>
        </MDBRow>
        </MDBCol>
      </MDBContainer>

      <MDBContainer>
         <MDBRow >
          <h4 className="text-center mx-auto pt-5 green-text">Plans </h4>
        </MDBRow >
        <MDBCol md="9" className="mx-auto py-5">
        <MDBRow >
         <MDBCol md="4" className="my-3  px-0 text-center" >
          <MDBCard className="shadow-none">
            
            <MDBCardBody >
              <MDBCardTitle tag="h4" className="pt-4 mt-1 dark-grey-text" >BASIC</MDBCardTitle>
              <MDBCardText>
                <div className="pt-3 ">Watch on your laptop, TV, phone and tablet</div>
                <div className="pt-3 pb-3"> Unlimited movies and TV shows Cancel anytime, First month free </div>
                <div className="h4"> $499 </div>
              </MDBCardText>
              <MDBBtn color="" className="btn btn-outline-success slider-btn " size="md">
                Purchase
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mx-auto px-0  ">
          <MDBCard className="bg-success white-text text-center">
            <MDBCardBody  className=" pt-5 my-3" >
              <MDBCardTitle tag="h4" >STANDARD</MDBCardTitle>
              <MDBCardText className="pb-0 mb-0">
                <div className="py-3 white-text">Screens you can watch on at the same time</div>
                
               <div className="py-3 white-text">+ Everything from the Basic plan</div>
               <div className="py-2 white-text h4 " >$10.99</div>

              </MDBCardText>
              <MDBBtn color="white" className="slider-btn bg-white grey-text" size="md">
                Purchase
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
           </MDBCol>
           <MDBCol md="4" className="my-3 px-0  text-center" >
          <MDBCard className="shadow-none">
            
            <MDBCardBody >
              <MDBCardTitle tag="h4" className="pt-4 mt-1 dark-grey-text" >PLUS</MDBCardTitle>
              <MDBCardText>
               <div className="py-3 ">HD available Ultra HD available</div>
               <div className="py-3  ">+ Everything from both  the Basic and Standard plan</div>
               <div className="pt-2  h4 ">$24.99</div>

              </MDBCardText>
              <MDBBtn color="" className="btn btn-outline-success slider-btn " size="md">
                Purchase
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
           </MDBCol>
        </MDBRow>
        </MDBCol>
      </MDBContainer>
      


<FooterLink
         title="Footer"/>

    </>

    
    );
  }
}

export default HomePage;
