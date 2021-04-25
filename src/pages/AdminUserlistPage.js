import React from "react";
import {
  MDBDataTable,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import AdminSidenavPage from "./../components/AdminSidenavPage";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  fetchingUsers,
  UserBlock,
  unblockUser
} from "../Redux/Action/AdminAction";
import { toast } from "react-toastify";

class ProviderslistPage extends React.Component {
  componentDidMount() {
    this.props.actions.Admin.fetchingUsers()
      .then(data => {
        //console.log(data, "Redux");
      })
      .catch(err => {
        console.log(err);
      });
  }

  block_User = user => {
    this.props.actions.Admin.UserBlock(user._id)
      .then(response => {
        toast.success("User blocked");
      })
      .catch(error => {
        toast.error("Error blocking user");
      });
  };

  unblock_User = user => {
    this.props.actions.Admin.unblockUser(user._id)
      .then(response => {
        toast.success("User unblocked");
      })
      .catch(error => {
        toast.error("Error unbloking user");
      });
  };

  data = () => ({
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "disabled",
        width: 200
      },

      {
        label: "Email",
        field: "email",
        width: 200
      },
      {
        label: "Phone",
        field: "phone",
        sort: "disabled",
        width: 70
      },
      {
        label: "Delete Provider",
        field: "Deleteprovider",
        sort: "disabled",
        width: 70
      },
      {
        label: "Reset Password",
        field: "Resetpassword",
        sort: "disabled",
        width: 70
      }
    ],
    rows: this.props.Admin.map(value => ({
      name: value.name,
      email: value.email,
      Phone: value.phoneNumber,
      Deleteprovider:
        value.isBlocked === false ? (
          <MDBBtn
            color="red"
            size="sm"
            onClick={() => {
              this.block_User(value);
            }}
          >
            Block
          </MDBBtn>
        ) : (
          <MDBBtn
            color="green"
            size="sm"
            onClick={() => {
              this.unblock_User(value);
            }}
          >
            unblock
          </MDBBtn>
        ),
      Resetpassword: (
        <MDBBtn color="green" size="sm">
          Reset
        </MDBBtn>
      )
    }))
  });

  render() {
    return (
      <>
        <MDBCol className="container-fluid">
          <MDBRow className="">
            <MDBCol md="2" className="px-0 bg-success ">
              <AdminSidenavPage title="AdminSidenavPage" />
            </MDBCol>

            <MDBCol md="10" className="">
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

const mapStateToProps = (state, ownProps) => {
  //console.log("original state is empty ", state);
  return {
    Admin: state.Admin,
    role: state.Auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      Admin: bindActionCreators(
        { fetchingUsers, UserBlock, unblockUser },
        dispatch
      )
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProviderslistPage);
