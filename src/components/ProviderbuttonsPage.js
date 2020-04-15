import React from 'react'
import { MDBBtn,MDBContainer, MDBRow,MDBCol } from "mdbreact";


const ProviderbuttonsPage  = props => {
  
    return (
      <MDBContainer>
      < MDBRow className="mx-auto pt-5">
      <MDBCol className="col-lg-4 ">
      <MDBBtn color="" size="lg" className="Providerbuttons" href="/provider/recentlywatched">Recently Watched</MDBBtn>
      </MDBCol>
      <MDBCol className="col-lg-4 ">
      <MDBBtn color="" size="lg" className="Providerbuttons" href="/provider/watchlater">Watch Later</MDBBtn>
      </MDBCol>
      <MDBCol className="col-lg-4 ">
      <MDBBtn color="" size="lg" className="Providerbuttons" href="/provider/savedvideo">Saved Videos </MDBBtn>
      </MDBCol>
      </ MDBRow>
      </MDBContainer>
    );
  };

export default ProviderbuttonsPage;

