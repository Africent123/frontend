import React from "react";
import { MDBDataTable, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import ProviderbuttonsPage from "./../components/ProviderbuttonsPage";

 import SidenavPage from "./../components/SidenavPage";


const SavedvideoPage = () => {
  function testClickEvent(param) {
    console.log(param);
  }

  const data = () => ({
    columns: [
      {
        label: "Movie Name",
        field: "Moviename",
        width: 200,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "MovieName"
        }
      },
      {
        label: "Date",
        field: "Date",
        sort: "disabled",
        width: 200
      },
      
      {
        label: "Time",
        field: "time",
        width: 200
      },
     
      {
        label: "Watch Later",
        field: "Watchlater",
        sort: "asc",
        width: 200
      }
    ],
    rows: [
      {
        Moviename: "Tiger Nixon",
        Date: "System Architect",
        time: "2011/04/25",
        Watchlater: "$320",
        clickEvent: () => testClickEvent(1)
      },
      {
        Moviename: "Garrett Winters",
        Date: "Accountant",
       
        time: "2011/07/25",
        Watchlater: "$170"
      },
      {
        Moviename: "Ashton Cox",
        Date: "Junior Technical Author",
       
        time: "2009/01/12",
        Watchlater: "$86"
      },
      {
        Moviename: "Cedric Kelly",
        Date: "Senior Javascript Developer",
       
        time: "2012/03/29",
        Watchlater: "$433"
      },
      {
        Moviename: "Airi Satou",
        Date: "Accountant",
        
        time: "2008/11/28",
        Watchlater: "$162"
      },
      {
        Moviename: "Brielle Williamson",
        Date: "Integration Specialist",
       
        time: "2012/12/02",
        Watchlater: "$372"
      },
      {
        Moviename: "Herrod Chandler",
        Date: "Sales Assistant",
        
        time: "2012/08/06",
        Watchlater: "$137"
      },
      {
        Moviename: "Rhona Davidson",
        Date: "Integration Specialist",
       
        time: "2010/10/14",
        Watchlater: "$327"
      },
      {
        Moviename: "Colleen Hurst",
        Date: "Javascript Developer",
       
        time: "2009/09/15",
        Watchlater: "$205"
      },
      {
        Moviename: "Sonya Frost",
        Date: "Software Engineer",
       
        time: "2008/12/13",
        Watchlater: "$103"
      },
      {
        Moviename: "Jena Gaines",
        Date: "2008/10/16",
       
        time: "2008/12/19",
        Watchlater: "$90"
      },
      {
        Moviename: "Quinn Flynn",
        Date: "Support Lead",
       
        time: "2013/03/03",
        Watchlater: "$342"
      },
      {
        Moviename: "Charde Marshall",
        Date: "Regional Director",
       
        time: "2008/10/16",
        Watchlater: "$470"
      },
      {
        Moviename: "Haley Kennedy",
        Date: "Senior Marketing Designer",
       
        time: "2012/12/18",
        Watchlater: "$313"
      },
      {
        Moviename: "Tatyana Fitzpatrick",
        Date: "Regional Director",
      
        time: "2010/03/17",
        Watchlater: "$385"
      },
      {
        Moviename: "Michael Silva",
        Date: "Marketing Designer",
       
        time: "2012/11/27",
        Watchlater: "$198"
      },
      {
        Moviename: "Paul Byrd",
        Date: "Chief Financial Phoner (CFO)",
       
        time: "2010/06/09",
        Watchlater: "$725"
      },
      {
        Moviename: "Gloria Little",
        Date: "Systems Administrator",
        
        time: "2009/04/10",
        Watchlater: "$237"
      },
      {
        Moviename: "Bradley Greer",
        Date: "Software Engineer",
       
        time: "2012/10/13",
        Watchlater: "$132"
      },
      {
        Moviename: "Dai Rios",
        Date: "Personnel Lead",
       
        time: "2012/09/26",
        Watchlater: "$217"
      },
      {
        Moviename: "Jenette Caldwell",
        Date: "Development Lead",
       
        time: "2011/09/03",
        Watchlater: "$345"
      },
      {
        Moviename: "Yuri Berry",
        Date: "Chief Marketing Phoner (CMO)",
       
        time: "2009/06/25",
        Watchlater: "$675"
      },
      {
        Moviename: "Caesar Vance",
        Date: "Pre-Sales Support",
       
        time: "2011/12/12",
        Watchlater: "$106"
      },
      {
        Moviename: "Doris Wilder",
        Date: "Sales Assistant",
        
        time: "2010/09/20",
        Watchlater: "$85"
      },
      {
        Moviename: "Angelica Ramos",
        Date: "Chief Executive Phoner (CEO)",
        
        time: "2009/10/09",
        Watchlater: "$1"
      },
      {
        Moviename: "Gavin Joyce",
        Date: "Developer",
       
        time: "2010/12/22",
        Watchlater: "$92"
      },
      {
        Moviename: "Jennifer Chang",
        Date: "Regional Director",
        
        time: "2010/11/14",
        Watchlater: "$357"
      },
      {
        Moviename: "Brenden Wagner",
        Date: "Software Engineer",
       
        time: "2011/06/07",
        Watchlater: "$206"
      },
      {
        Moviename: "Fiona Green",
        Date: "Chief Operating Phoner (COO)",
        
        time: "2010/03/11",
        Watchlater: "$850"
      },
      {
        Moviename: "Shou Itou",
        Date: "Regional Marketing",
       
        time: "2011/08/14",
        Watchlater: "$163"
      },
      {
        Moviename: "Michelle House",
        Date: "Integration Specialist",
       
        time: "2011/06/02",
        Watchlater: "$95"
      },
      {
        Moviename: "Suki Burks",
        Date: "Developer",
       
        time: "2009/10/22",
        Watchlater: "$114"
      },
      {
        Moviename: "Prescott Bartlett",
        Date: "Technical Author",
       
        time: "2011/05/07",
        Watchlater: "$145"
      },
      {
        Moviename: "Gavin Cortez",
        Date: "Team Leader",
       
        time: "2008/10/26",
        Watchlater: "$235"
      },
      {
        Moviename: "Martena Mccray",
        Date: "Post-Sales support",
       
        time: "2011/03/09",
        Watchlater: "$324"
      },
      {
        Moviename: "Unity Butler",
        Date: "Marketing Designer",
       
        time: "2009/12/09",
        Watchlater: "$85"
      },
      {
        Moviename: "Howard Hatfield",
        Date: "Phone Manager",
       
        time: "2008/12/16",
        Watchlater: "$164"
      },
      {
        Moviename: "Hope Fuentes",
        Date: "Secretary",
        
        time: "2010/02/12",
        Watchlater: "$109"
      },
      {
        Moviename: "Vivian Harrell",
        Date: "Financial Controller",
       
        time: "2009/02/14",
        Watchlater: "$452"
      },
      {
        Moviename: "Timothy Mooney",
        Date: "Phone Manager",
        
        time: "2008/12/11",
        Watchlater: "$136"
      },
      {
        Moviename: "Jackson Bradshaw",
        Date: "Director",
       
        time: "2008/09/26",
        Watchlater: "$645"
      },
      {
        Moviename: "Olivia Liang",
        Date: "Support Engineer",
       
        time: "2011/02/03",
        Watchlater: "$234"
      },
      {
        Moviename: "Bruno Nash",
        Date: "Software Engineer",
        
        time: "2011/05/03",
        Watchlater: "$163"
      },
      {
        Moviename: "Sakura Yamamoto",
        Date: "Support Engineer",
       
        time: "2009/08/19",
        Watchlater: "$139"
      },
      {
        Moviename: "Thor Walton",
        Date: "Developer",
        
        time: "2013/08/11",
        Watchlater: "$98"
      },
      {
        Moviename: "Finn Camacho",
        Date: "Support Engineer",
        
        time: "2009/07/07",
        Watchlater: "$87"
      },
      {
        Moviename: "Serge Baldwin",
        Date: "Data Coordinator",
      
        time: "2012/04/09",
        Watchlater: "$138"
      },
      {
        Moviename: "Zenaida Frank",
        Date: "Software Engineer",
       
        time: "2010/01/04",
        Watchlater: "$125"
      },
      {
        Moviename: "Zorita Serrano",
        Date: "Software Engineer",
       
        time: "2012/06/01",
        Watchlater: "$115"
      },
      {
        Moviename: "Jennifer Acosta",
        Date: "Junior Javascript Developer",
        
        time: "2013/02/01",
        Watchlater: "$75"
      },
      {
        Moviename: "Cara Stevens",
        Date: "Sales Assistant",
        
        time: "2011/12/06",
        Watchlater: "$145"
      },
      {
        Moviename: "Hermione Butler",
        Date: "Regional Director",
      
        time: "2011/03/21",
        Watchlater: "$356"
      },
      {
        Moviename: "Lael Greer",
        Date: "Systems Administrator",
        
        time: "2009/02/27",
        Watchlater: "$103"
      },
      {
        Moviename: "Jonas Alexander",
        Date: "Developer",
       
        time: "2010/07/14",
        Watchlater: "$86"
      },
      {
        Moviename: "Shad Decker",
        Date: "Regional Director",
       
        time: "2008/11/13",
        Watchlater: "$183"
      },
      {
        Moviename: "Michael Bruce",
        Date: "Javascript Developer",
        
        time: "2011/06/27",
        Watchlater: "$183"
      },
      {
        Moviename: "Donna Snider",
        Date: "Customer Support",
       
        time: "2011/01/25",
        Watchlater: "$112"
      }
    ]
  });

  return (
   < MDBCol className="container-fluid">
         <MDBRow className="">
        <MDBCol md="2" className="px-0 bg-success ">
         <SidenavPage
            title="SidenavPage"
        />
        </MDBCol>


        <MDBCol md="10"  className="">
        <ProviderbuttonsPage
     title="ProviderbuttonsPage"
     />
        <MDBCard className="table-bg">
         
            <MDBCardBody>
              <MDBDataTable striped bordered  paging={false}  data={new data()} />
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>
     
    </MDBCol>
  );
};

export default SavedvideoPage;
