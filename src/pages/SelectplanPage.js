import React from 'react';
import {MDBIcon,MDBBtn,MDBCol,MDBContainer, MDBTable, MDBTableBody,MDBTableFoot, MDBTableHead,MDBRow } from 'mdbreact';
import AdminSidenavPage from "./../components/AdminSidenavPage";
import Switch from "react-switch";


class SelectplanPage extends React.Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {

  return (
    <>


< MDBCol className="container-fluid">
         <MDBRow className="">
        <MDBCol md="2" className="px-0 bg-success ">
         <AdminSidenavPage
            title="AdminSidenavPage"
        />
        </MDBCol>


        <MDBCol md="10"  className="">
    <MDBContainer >
  
    <MDBCol className="col-lg-9 mx-auto text-center  py-5">
    <MDBTable bordered >
      <MDBTableHead className="border-bottom-0">
        <tr className="border-bottom-0">
          <th>Billed Annually</th>
          <th>FREE</th>
          <th>BASIC</th>
          <th>PRO</th>
        </tr>
      </MDBTableHead>

      <MDBTableBody className="border-top-0">
        <tr>
        {
          /// button toggle package added link to repo https://github.com/markusenglund/react-switch
        }
          <td>
           <label>
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            className="react-switch"
          />
        </label></td>
          <td>$7/Mo</td>
          <td>$14/Mo</td>
          <td>$30/Mo</td>
        </tr>
        <tr>
          <td>HD Available </td>
          <td><MDBIcon icon="check-circle" className="green-text" /></td>
          <td><MDBIcon icon="check-circle" className="green-text" /></td>
          <td><MDBIcon icon="check-circle" className="green-text" /></td>
        </tr>
        <tr>
          <td>Ultra HD Available </td>
          <td></td>
          <td><MDBIcon icon="check-circle" className="green-text" /></td>
          <td><MDBIcon icon="check-circle" className="green-text" /></td>
          
        </tr>
        <tr>
          <td>Screens you can watch on at the same time </td>
          <td></td>
          <td><MDBIcon icon="check-circle" className="green-text" /></td>
          <td><MDBIcon icon="check-circle" className="green-text" /></td>
        </tr>
        <tr>
          <td>Watch on your laptop,TV, Phone and Tablet </td>
          <td></td>
          <td><MDBIcon icon="check-circle" className="green-text" /></td>
          <td><MDBIcon icon="check-circle" className="green-text" /></td>
        </tr>
        <tr>
          <td>Unlimited Movies and TV shows </td>
          <td></td>
          <td></td>
          <td><MDBIcon icon="check-circle" className="green-text" /></td>
        </tr>

        <tr>
          <td>Cancle any time </td>
           <td></td>
          <td></td>
          <td><MDBIcon icon="check-circle" className="green-text" /></td>
        </tr>
        <tr>
          <td>First month free </td>
           <td></td>
          <td></td>
          <td><MDBIcon icon="check-circle" className="green-text" /></td>
        </tr>
        <tr>
          <td>Support 24/7 </td>
         <td></td>
          <td></td>
          <td><MDBIcon icon="check-circle"  className="green-text" /></td>
        </tr>
       
      </MDBTableBody>
      <MDBTableFoot>
       <tr>
          <th> </th>
         <th><MDBBtn color="success" size="sm">Active Plan</MDBBtn></th>
          <th><MDBBtn color="success" size="sm">Active Plan</MDBBtn></th>
          <th><MDBBtn color="success" size="sm">Active Plan</MDBBtn></th>
        </tr>
      </MDBTableFoot>
    </MDBTable>
     </MDBCol>
    </MDBContainer >

    </MDBCol>
      </MDBRow>
      </MDBCol>
    </>
  );
}
}

export default SelectplanPage;