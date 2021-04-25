import React from "react";
import {
  MDBDataTable,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import ProvidermovielistNavPage from "./../components/ProvidermovielistNavPage";
import SidenavPage from "./../components/SidenavPage";
import decode from "jwt-decode";
import axiosIntance from "../helpers/axios";

class ProvidermovielistPage extends React.Component {
  state = {
    movies: [],
    loading: false
  };

  componentDidMount() {
    const token = localStorage.getItem("cptoken");
    const payload = decode(token);
    const id = payload.userId;
    this.setState({
      loading: true
    });
    axiosIntance
      .get(`/api/movies/all/${id}`)
      .then(result => {
        //console.log(result.data)
        this.setState({
          movies: result.data,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleDelete = movie => {
    axiosIntance
      .delete(`/api/movies/delete/${movie._id}`)
      .then(result => {
        console.log("Delete response", result);
      });
  };

  componentDidUpdate() {
    const token = localStorage.getItem("cptoken");
    const payload = decode(token);
    const id = payload.userId;
    axiosIntance.get(`/api/movies/all/${id}`).then(result => {
      //console.log(result.data, "here")
      this.setState({ movies: result.data });
    });
  }

  formatData = () => {
    return this.state.movies.map(value => ({
      Moviename: [value.filename]
    }));
  };

  data = () => ({
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
        label: "Last Modified",
        field: "Lastmodified",
        sort: "disabled",
        width: 200
      },
      {
        label: "Views",
        field: "Views",
        sort: "disabled",
        width: 200
      },

      {
        label: "Size in mb",
        field: "Size",
        width: 200
      },
      {
        label: "Delete Movie",
        field: "Deletemovie",
        sort: "disabled",
        width: 70
      }
    ],
    rows: this.state.movies.map(value => ({
      Moviename: value.MovieName,
      Lastmodified: value.uploadedDate,
      Views: value.views,
      Size: value.size,
      Deletemovie: [
        <i
          key="delete"
          className="fa fa-trash mr-2 green-text"
          aria-hidden="true"
          onClick={this.handleDelete.bind(this, value)}
        ></i>,
        "Delete"
      ]
    }))
  });

  render() {
    return (
      <>
        <MDBCol className="container-fluid">
          <MDBRow className="">
            <MDBCol md="2" className="px-0 bg-success ">
              <SidenavPage title="SidenavPage" />
            </MDBCol>

            <MDBCol md="10" className="">
              <MDBContainer className="py-3 px-0">
                <ProvidermovielistNavPage title="ProvidermovielistNavPage" />
              </MDBContainer>
              <MDBCard className="table-bg">
                <MDBCardBody>
                  <MDBDataTable
                    striped
                    bordered
                    paging={false}
                    data={new this.data()}
                  />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </>
    );
  }
}

// const ProvidermovielistPage = () => {
//   function testClickEvent(param) {
//     console.log(param);
//   }

//   const data = () => ({
//     columns: [
//       {
//         label: "Movie Name",
//         field: "Moviename",
//         width: 200,
//         attributes: {
//           "aria-controls": "DataTable",
//           "aria-label": "MovieName"
//         }
//       },
//       {
//         label: "Last Modified",
//         field: "Lastmodified",
//         sort: "disabled",
//         width: 200
//       },

//       {
//         label: "Size",
//         field: "Size",
//         width: 200
//       }
//     ],
//     rows: [
//       {
//         Moviename: "Tiger Nixon",
//         Lastmodified: "System Architect",
//         Size: "2011/04/25",
//         clickEvent: () => testClickEvent(1)
//       },
//       {
//         Moviename: "Garrett Winters",
//         Lastmodified: "Accountant",

//         Size: "2011/07/25"

//       },
//       {
//         Moviename: "Ashton Cox",
//         Lastmodified: "Junior Technical Author",

//         Size: "2009/01/12"

//       },

//     ]
//   });

//   return (
//     <>

//      < MDBCol className="container-fluid">
//          <MDBRow className="">
//         <MDBCol md="2" className="px-0 bg-success ">
//          <SidenavPage
//             title="SidenavPage"
//         />
//         </MDBCol>

//         <MDBCol md="10"  className="">
//         <MDBContainer className="py-3 px-0">

//     <ProvidermovielistNavPage
//     title="ProvidermovielistNavPage"/>
//      </MDBContainer>
//         <MDBCard className="table-bg">

//             <MDBCardBody>
//               <MDBDataTable striped bordered  paging={false}  data={new data()} />
//             </MDBCardBody>
//           </MDBCard>

//         </MDBCol>
//       </MDBRow>

//     </MDBCol>
//     </>
//   );
// };

export default ProvidermovielistPage;
