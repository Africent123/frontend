import React from "react";
import {  MDBCol,MDBMedia, MDBContainer, MDBRow,MDBNav, MDBNavItem, MDBNavLink} from "mdbreact";
import "./HomePage.css";
import FooterLink from "./../components/FooterLink";






class HistoryPage extends React.Component {

   

  render() {
    return (
      <>


         <MDBContainer>
        <MDBRow className="mt-5">
          <MDBCol md="12" lg="12">
          <MDBNav className="justify-content-end">
      <MDBNavItem>
        <MDBNavLink  className="white-text" to="#!">Recent</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!" className="white-text">Month</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!" className="white-text" >Year</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
       <input className="form-control mt-1" type="text" placeholder="Search" aria-label="Search" />
      </MDBNavItem>
    </MDBNav>
          </MDBCol>
          
          </MDBRow>
          </MDBContainer>
      <MDBContainer>
        <MDBRow className="mt-5">
          <MDBCol md="6" lg="3">
            <MDBMedia className="m-2 p-3 test">
              <MDBMedia left className="mr-3 pb-0" href="#">
                <MDBMedia className=" " object src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="" />
                </MDBMedia>
                <MDBMedia body>
                <MDBMedia className="green-text" >
                  Media heading
                </MDBMedia>
                   
                    <span>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star" ></li>
                    <li className="fas fa-star" ></li>
                    <li className="fas fa-star" ></li>

                    </span>
              </MDBMedia>
            </MDBMedia>
          </MDBCol>

          <MDBCol md="6" lg="3">
            <MDBMedia className="m-2 p-3 test">
              <MDBMedia left className="mr-3 pb-0" href="#">
                <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="" />
                </MDBMedia>
                <MDBMedia body>
                <MDBMedia className="green-text" >
                  Media heading
                </MDBMedia>
                   felis faucibus.
                   <div> <span>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star" ></li>
                    <li className="fas fa-star" ></li>

                    </span></div>
              </MDBMedia>
            </MDBMedia>
          </MDBCol>

           <MDBCol md="6" lg="3">
            <MDBMedia className="m-2 p-3 test">
              <MDBMedia left className="mr-3 pb-0" href="#">
                <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="" />
                </MDBMedia>
                <MDBMedia body>
                <MDBMedia className="green-text">
                  Media heading
                </MDBMedia>
                   felis faucibus.
                   <div> <span>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star" ></li>

                    </span></div>
              </MDBMedia>
            </MDBMedia>
          </MDBCol>
           <MDBCol md="6" lg="3">
            <MDBMedia className="m-2 p-3 test">
              <MDBMedia left className="mr-3 pb-0" href="#">
                <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="" />
                </MDBMedia>
                <MDBMedia body>
                <MDBMedia className="green-text" >
                  Media heading
                </MDBMedia>
                   felis faucibus.
                   <div> <span>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star" ></li>
                    <li className="fas fa-star" ></li>

                    </span></div>
              </MDBMedia>
            </MDBMedia>
          </MDBCol>
          </MDBRow >
          <MDBRow className="mt-lg-5 mt-md-3">
           <MDBCol md="6" lg="3">
            <MDBMedia className="m-2 p-3 test">
              <MDBMedia left className="mr-3 pb-0" href="#">
                <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="" />
                </MDBMedia>
                <MDBMedia body>
                <MDBMedia  className="green-text">
                  Media heading
                </MDBMedia>
                   felis faucibus.
                   <div> <span>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star" ></li>
                    <li className="fas fa-star" ></li>
                    <li className="fas fa-star" ></li>

                    </span></div>
              </MDBMedia>
            </MDBMedia>
          </MDBCol>
           <MDBCol md="6" lg="3">
            <MDBMedia className="m-2 p-3 test">
              <MDBMedia left className="mr-3 pb-0" href="#">
                <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="" />
                </MDBMedia>
                <MDBMedia body>
                <MDBMedia  className="green-text">
                  Media heading
                </MDBMedia>
                   felis faucibus.
                   <div> <span>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star" ></li>
                    <li className="fas fa-star" ></li>
                    <li className="fas fa-star" ></li>

                    </span></div>
              </MDBMedia>
            </MDBMedia>
          </MDBCol>
           <MDBCol md="6" lg="3">
            <MDBMedia className="m-2 p-3 test">
              <MDBMedia left className="mr-3 pb-0" href="#">
                <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="" />
                </MDBMedia>
                <MDBMedia body>
                <MDBMedia className="green-text" >
                  Media heading
                </MDBMedia>
                   felis faucibus.
                   <div> <span>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star" ></li>
                    <li className="fas fa-star" ></li>
                    <li className="fas fa-star" ></li>
                    <li className="fas fa-star" ></li>

                    </span></div>
              </MDBMedia>
            </MDBMedia>
          </MDBCol>
           <MDBCol md="6" lg="3">
            <MDBMedia className="m-2 p-3 test">
              <MDBMedia left className="mr-3 pb-0" href="#">
                <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="" />
              </MDBMedia>
              <MDBMedia body>
                <MDBMedia  className="green-text">
                    Media heading
                </MDBMedia>
                   felis faucibus.
                   <div> <span>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star review" ></li>
                    <li className="fas fa-star review" ></li>

                    </span></div>
              </MDBMedia>
            </MDBMedia>
          </MDBCol>
          
        </MDBRow>
     
      </MDBContainer>



     


<FooterLink
         title="Footer"/>

    </>

    
    );
  }
}

export default HistoryPage;
