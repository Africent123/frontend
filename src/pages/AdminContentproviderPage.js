import React from "react";
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import AdminSidenavPage from "./../components/AdminSidenavPage";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { CpUserRegistration } from "../Redux/Action/AdminAction";
import {toast} from "react-toastify"

class ContentproviderPage extends React.Component {
  state = {
    loading: false,
    providerName: "", 
    email: "", 
    phoneNumber: "", 
    password: "", 
    password2: "",
    isSignedin: false
  };


//form data
onChange = e => {
  const state = this.state;
  state[e.target.name] = e.target.value;
  this.setState(state);
};

onSubmit = e => {
  e.preventDefault();

  const { providerName, email, phoneNumber, password, password2 } = this.state;
    const userData = { providerName, email, phoneNumber, password, password2 };
    this.props.actions.register(userData)
      .then(response => {
        //console.log(response.data.data, "here test")
        if (response.data.data.success) {
          this.setState({ loading: false });
          toast.success(response.data.data.message);
        } else {
          Object.keys(response.data.data.message).length > 0 &&
          typeof response.data.data.message === "object"
            ? Object.keys(response.data.data.message).map(message => {
                toast.error(response.data.data.message[message]);
              })
            : toast.error(response.data.data.message);
          //console.log(response)
        }
        //console.log(response.data.data, "registration page");
      })
      .catch(error => {
        //console.log(error, "from reg catch");
        toast.error("Internal server error");
      });

  this.setState({ loading: true });
 
};
  render(){
    const { providerName, email, phoneNumber, password, password2 } = this.state;

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

      <MDBRow>
        <MDBCol md="6" className="mx-auto py-5">
          <form onSubmit={this.onSubmit}>
            <p className="h4 text-center mb-4 py-5">Content Provider Registeration</p>
           
            <input
              name="providerName"
              value={providerName}
              onChange={this.onChange}
              placeholder ="Content Provider Name Eg. Business Name"
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control form-control-lg"
            />
            <br />
            
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              placeholder ="Business Email"
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control form-control-lg"
            />
            <br />
            
        
            <input
             name="phoneNumber"
             value={phoneNumber}
             onChange={this.onChange}
             placeholder ="Mobile Phone Number/Office"
              type="text"
              id="defaultFormRegisterConfirmEx"
              className="form-control form-control-lg"
            />
            <br />
           
            <input
            name="password"
            value={password}
            onChange={this.onChange}
             placeholder ="Password"
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control form-control-lg"
            />
             <br />
           
            <input
            name="password2"
            value={password2}
            onChange={this.onChange}
             placeholder ="Confirm Password"
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control form-control-lg"
            />
            <div className="text-center mt-4 py-5">
              <MDBBtn color="success" type="submit">
              Create New Content Provider
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>


        </MDBCol>
      </MDBRow>
      </MDBCol>
        
    </>
  );
}
}
const mapStateToProps = (state, ownProps) => {
  console.log("original", state);
  return {
    Admin: state.Admin,
    role: state.Auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      register: bindActionCreators(CpUserRegistration, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentproviderPage);



