import React from "react";
import { MDBDataTable, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";


const UserpaymentPage = () => {
  function testClickEvent(param) {
    console.log(param);
  }

  const data = () => ({
    columns: [
      {
        label: "Name",
        field: "name",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name"
        }
      },
      {
        label: "Email",
        field: "Email",
        width: 270
      },
      {
        label: "Phone",
        field: "Phone",
        width: 200
      },
      {
        label: "Payment Status",
        field: "Payment Status",
        sort: "desc",
        width: 100
      },
      {
        label: "Payment Date",
        field: "date",
        sort: "disabled",
        width: 150
      },
      {
        label: "Plan",
        field: "Plan",
        sort: "asc",
        width: 100
      }
    ],
    rows: [
      {
        name: "Tiger Nixon",
        Email: "System Architect",
        Phone: "Edinburgh",
        age: "61",
        date: "2011/04/25",
        Plan: "$320",
        clickEvent: () => testClickEvent(1)
      },
      {
        name: "Garrett Winters",
        Email: "Accountant",
        Phone: "Tokyo",
        age: "63",
        date: "2011/07/25",
        Plan: "$170"
      },
      {
        name: "Ashton Cox",
        Email: "Junior Technical Author",
        Phone: "San Francisco",
        age: "66",
        date: "2009/01/12",
        Plan: "$86"
      },
      {
        name: "Cedric Kelly",
        Email: "Senior Javascript Developer",
        Phone: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        Plan: "$433"
      },
      {
        name: "Airi Satou",
        Email: "Accountant",
        Phone: "Tokyo",
        age: "33",
        date: "2008/11/28",
        Plan: "$162"
      },
      {
        name: "Brielle Williamson",
        Email: "Integration Specialist",
        Phone: "New York",
        age: "61",
        date: "2012/12/02",
        Plan: "$372"
      },
      {
        name: "Herrod Chandler",
        Email: "Sales Assistant",
        Phone: "San Francisco",
        age: "59",
        date: "2012/08/06",
        Plan: "$137"
      },
      {
        name: "Rhona Davidson",
        Email: "Integration Specialist",
        Phone: "Tokyo",
        age: "55",
        date: "2010/10/14",
        Plan: "$327"
      },
      {
        name: "Colleen Hurst",
        Email: "Javascript Developer",
        Phone: "San Francisco",
        age: "39",
        date: "2009/09/15",
        Plan: "$205"
      },
      {
        name: "Sonya Frost",
        Email: "Software Engineer",
        Phone: "Edinburgh",
        age: "23",
        date: "2008/12/13",
        Plan: "$103"
      },
      {
        name: "Jena Gaines",
        Email: "Phone Manager",
        Phone: "London",
        age: "30",
        date: "2008/12/19",
        Plan: "$90"
      },
      {
        name: "Quinn Flynn",
        Email: "Support Lead",
        Phone: "Edinburgh",
        age: "22",
        date: "2013/03/03",
        Plan: "$342"
      },
      {
        name: "Charde Marshall",
        Email: "Regional Director",
        Phone: "San Francisco",
        age: "36",
        date: "2008/10/16",
        Plan: "$470"
      },
      {
        name: "Haley Kennedy",
        Email: "Senior Marketing Designer",
        Phone: "London",
        age: "43",
        date: "2012/12/18",
        Plan: "$313"
      },
      {
        name: "Tatyana Fitzpatrick",
        Email: "Regional Director",
        Phone: "London",
        age: "19",
        date: "2010/03/17",
        Plan: "$385"
      },
      {
        name: "Michael Silva",
        Email: "Marketing Designer",
        Phone: "London",
        age: "66",
        date: "2012/11/27",
        Plan: "$198"
      },
      {
        name: "Paul Byrd",
        Email: "Chief Financial Phoner (CFO)",
        Phone: "New York",
        age: "64",
        date: "2010/06/09",
        Plan: "$725"
      },
      {
        name: "Gloria Little",
        Email: "Systems Administrator",
        Phone: "New York",
        age: "59",
        date: "2009/04/10",
        Plan: "$237"
      },
      {
        name: "Bradley Greer",
        Email: "Software Engineer",
        Phone: "London",
        age: "41",
        date: "2012/10/13",
        Plan: "$132"
      },
      {
        name: "Dai Rios",
        Email: "Personnel Lead",
        Phone: "Edinburgh",
        age: "35",
        date: "2012/09/26",
        Plan: "$217"
      },
      {
        name: "Jenette Caldwell",
        Email: "Development Lead",
        Phone: "New York",
        age: "30",
        date: "2011/09/03",
        Plan: "$345"
      },
      {
        name: "Yuri Berry",
        Email: "Chief Marketing Phoner (CMO)",
        Phone: "New York",
        age: "40",
        date: "2009/06/25",
        Plan: "$675"
      },
      {
        name: "Caesar Vance",
        Email: "Pre-Sales Support",
        Phone: "New York",
        age: "21",
        date: "2011/12/12",
        Plan: "$106"
      },
      {
        name: "Doris Wilder",
        Email: "Sales Assistant",
        Phone: "Sidney",
        age: "23",
        date: "2010/09/20",
        Plan: "$85"
      },
      {
        name: "Angelica Ramos",
        Email: "Chief Executive Phoner (CEO)",
        Phone: "London",
        age: "47",
        date: "2009/10/09",
        Plan: "$1"
      },
      {
        name: "Gavin Joyce",
        Email: "Developer",
        Phone: "Edinburgh",
        age: "42",
        date: "2010/12/22",
        Plan: "$92"
      },
      {
        name: "Jennifer Chang",
        Email: "Regional Director",
        Phone: "Singapore",
        age: "28",
        date: "2010/11/14",
        Plan: "$357"
      },
      {
        name: "Brenden Wagner",
        Email: "Software Engineer",
        Phone: "San Francisco",
        age: "28",
        date: "2011/06/07",
        Plan: "$206"
      },
      {
        name: "Fiona Green",
        Email: "Chief Operating Phoner (COO)",
        Phone: "San Francisco",
        age: "48",
        date: "2010/03/11",
        Plan: "$850"
      },
      {
        name: "Shou Itou",
        Email: "Regional Marketing",
        Phone: "Tokyo",
        age: "20",
        date: "2011/08/14",
        Plan: "$163"
      },
      {
        name: "Michelle House",
        Email: "Integration Specialist",
        Phone: "Sidney",
        age: "37",
        date: "2011/06/02",
        Plan: "$95"
      },
      {
        name: "Suki Burks",
        Email: "Developer",
        Phone: "London",
        age: "53",
        date: "2009/10/22",
        Plan: "$114"
      },
      {
        name: "Prescott Bartlett",
        Email: "Technical Author",
        Phone: "London",
        age: "27",
        date: "2011/05/07",
        Plan: "$145"
      },
      {
        name: "Gavin Cortez",
        Email: "Team Leader",
        Phone: "San Francisco",
        age: "22",
        date: "2008/10/26",
        Plan: "$235"
      },
      {
        name: "Martena Mccray",
        Email: "Post-Sales support",
        Phone: "Edinburgh",
        age: "46",
        date: "2011/03/09",
        Plan: "$324"
      },
      {
        name: "Unity Butler",
        Email: "Marketing Designer",
        Phone: "San Francisco",
        age: "47",
        date: "2009/12/09",
        Plan: "$85"
      },
      {
        name: "Howard Hatfield",
        Email: "Phone Manager",
        Phone: "San Francisco",
        age: "51",
        date: "2008/12/16",
        Plan: "$164"
      },
      {
        name: "Hope Fuentes",
        Email: "Secretary",
        Phone: "San Francisco",
        age: "41",
        date: "2010/02/12",
        Plan: "$109"
      },
      {
        name: "Vivian Harrell",
        Email: "Financial Controller",
        Phone: "San Francisco",
        age: "62",
        date: "2009/02/14",
        Plan: "$452"
      },
      {
        name: "Timothy Mooney",
        Email: "Phone Manager",
        Phone: "London",
        age: "37",
        date: "2008/12/11",
        Plan: "$136"
      },
      {
        name: "Jackson Bradshaw",
        Email: "Director",
        Phone: "New York",
        age: "65",
        date: "2008/09/26",
        Plan: "$645"
      },
      {
        name: "Olivia Liang",
        Email: "Support Engineer",
        Phone: "Singapore",
        age: "64",
        date: "2011/02/03",
        Plan: "$234"
      },
      {
        name: "Bruno Nash",
        Email: "Software Engineer",
        Phone: "London",
        age: "38",
        date: "2011/05/03",
        Plan: "$163"
      },
      {
        name: "Sakura Yamamoto",
        Email: "Support Engineer",
        Phone: "Tokyo",
        age: "37",
        date: "2009/08/19",
        Plan: "$139"
      },
      {
        name: "Thor Walton",
        Email: "Developer",
        Phone: "New York",
        age: "61",
        date: "2013/08/11",
        Plan: "$98"
      },
      {
        name: "Finn Camacho",
        Email: "Support Engineer",
        Phone: "San Francisco",
        age: "47",
        date: "2009/07/07",
        Plan: "$87"
      },
      {
        name: "Serge Baldwin",
        Email: "Data Coordinator",
        Phone: "Singapore",
        age: "64",
        date: "2012/04/09",
        Plan: "$138"
      },
      {
        name: "Zenaida Frank",
        Email: "Software Engineer",
        Phone: "New York",
        age: "63",
        date: "2010/01/04",
        Plan: "$125"
      },
      {
        name: "Zorita Serrano",
        Email: "Software Engineer",
        Phone: "San Francisco",
        age: "56",
        date: "2012/06/01",
        Plan: "$115"
      },
      {
        name: "Jennifer Acosta",
        Email: "Junior Javascript Developer",
        Phone: "Edinburgh",
        age: "43",
        date: "2013/02/01",
        Plan: "$75"
      },
      {
        name: "Cara Stevens",
        Email: "Sales Assistant",
        Phone: "New York",
        age: "46",
        date: "2011/12/06",
        Plan: "$145"
      },
      {
        name: "Hermione Butler",
        Email: "Regional Director",
        Phone: "London",
        age: "47",
        date: "2011/03/21",
        Plan: "$356"
      },
      {
        name: "Lael Greer",
        Email: "Systems Administrator",
        Phone: "London",
        age: "21",
        date: "2009/02/27",
        Plan: "$103"
      },
      {
        name: "Jonas Alexander",
        Email: "Developer",
        Phone: "San Francisco",
        age: "30",
        date: "2010/07/14",
        Plan: "$86"
      },
      {
        name: "Shad Decker",
        Email: "Regional Director",
        Phone: "Edinburgh",
        age: "51",
        date: "2008/11/13",
        Plan: "$183"
      },
      {
        name: "Michael Bruce",
        Email: "Javascript Developer",
        Phone: "Singapore",
        age: "29",
        date: "2011/06/27",
        Plan: "$183"
      },
      {
        name: "Donna Snider",
        Email: "Customer Support",
        Phone: "New York",
        age: "27",
        date: "2011/01/25",
        Plan: "$112"
      }
    ]
  });

  return (
    <MDBContainer>
    
      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard className="table-bg">
            <MDBCardBody>
              <MDBDataTable striped bordered  paging={false}  data={new data()} />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
  );
};

export default UserpaymentPage;
