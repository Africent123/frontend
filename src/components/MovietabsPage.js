import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MDBMedia,MDBCol,MDBBtn  } from 'mdbreact';
import React from "react";
const CustomTab = ({ children }) => (
  <Tab>
    <h1>{children}</h1>
  </Tab>
);

CustomTab.tabsRole = 'Tab'; // Required field to use your custom Tab

const MovietabsPage = (props) => (
  <Tabs className="pt-4">
    <TabList>
      <Tab>About Movie</Tab>
      <Tab>Movie Cast</Tab>
      <Tab>Comments</Tab>
      <Tab>Provider</Tab>
    </TabList>

    <TabPanel>
      <p>{props.movie.description}
      </p>
     
    </TabPanel>
    <TabPanel>
      <p>
        <ul>
          <li>Adam Zango</li>
          <li>Hadiza Gabon</li>
        </ul>
      </p>
      
    </TabPanel>
    <TabPanel>
    <MDBMedia className=" pt-4">
      <MDBMedia left className="mr-3 comment-avater" href="#">
        <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min1.jpg" alt="" / >
      </MDBMedia>
      <MDBMedia body>
        <MDBMedia heading>
          User Name
      </MDBMedia>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </MDBMedia>
    </MDBMedia>

     <MDBMedia className=" pt-4">
      <MDBMedia left className="mr-3 comment-avater" href="#">
        <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min2.jpg" alt="" / >
      </MDBMedia>
      <MDBMedia body>
        <MDBMedia heading>
          User Name
      </MDBMedia>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </MDBMedia>
    </MDBMedia>

     <MDBMedia className=" pt-4">
      <MDBMedia left className="mr-3 comment-avater" href="#">
        <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min3.jpg" alt="" / >
      </MDBMedia>
      <MDBMedia body>
        <MDBMedia heading>
          User Name
      </MDBMedia>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </MDBMedia>
    </MDBMedia>

     <div className="col-lg-8 pt-4">
    <MDBCol className="form-group">
            <textarea
            className="form-control text-left"
            placeholder="Write your comment..."
            id="exampleFormControlTextarea1"
            rows="5"
            />
        </MDBCol>
        <MDBBtn color="success" className="slider-btn bg-success text-white mx-4 px-5" size="md">
               Send
              </MDBBtn>
        </div>
    </TabPanel>

    
    <TabPanel>
     <MDBMedia className=" pt-4">
      <MDBMedia left className="mr-3 provider-avater" href="#">
        <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min1.jpg" alt="" / >
      </MDBMedia>
      <MDBMedia body>
        <MDBMedia heading>
          User Name
      </MDBMedia>
        Cras sitvulputate at faucibus.
        Cras sitvulputate at faucibus.
    </MDBMedia>
    </MDBMedia>
    </TabPanel>
  </Tabs>
);


export default MovietabsPage;
