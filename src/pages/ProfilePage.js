import React from "react";
import decode from "jwt-decode";
import { Redirect } from 'react-router-dom';
import { MDBRow, MDBCol,MDBContainer} from "mdbreact";
import {bindActionCreators} from "redux";
import {GetProfileDetail} from "../Redux/Action/ManageProfileAction.js"
import {connect} from "react-redux";
import FooterLink from "./../components/FooterLink";
import axiosIntance from "../helpers/axios";


class ProfilePage extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        data: [],
        loading: false
      }
    }

   componentDidMount(){
    this.setState({loading: true})
    const token = localStorage.getItem('token');
      const payload = decode(token);
      //console.log(payload)
      const id = payload.userId
      //console.log(id)
      this.props.actions.getDetails(id).then(res => {
        //console.log(res, "Yee")
      })
      .catch(err => {
        console.log(err, "Err ----")
      })
      axiosIntance.get(`/api/user/profile/${id}`)
  .then((result) => {
    //console.log(result.data)
     this.setState({data: result.data, loading: false})
     //console.log(this.state.data)
  })
  }


checkAuth () {
    const token = localStorage.getItem('token');
    if(!token) {
      return false;
    }
    try {
      const payload = decode(token);
      if(payload.exp < Date.now() / 1000) {
        console.log(payload.exp)
        return false;
      }
      else{
        return true;
      }
    }
    catch(e){
      return false;
    }
    return true;
  } 


  render() {
    
    //console.log("Current props check", this.props)
    const isAuth = this.checkAuth()
    return (
      <>
      {!isAuth && <Redirect to="/login" />}
       <MDBContainer className="pt-4">
      
    
          <MDBRow className="py-5">
            {this.state.loading && 
               <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            }
          <MDBCol md="4" className="mb-md-0 mb-5 mx-auto text-justify">
              <img
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                className="rounded z-depth-1-half img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold text-uppercase green-text my-4">
                 { this.props.getDetails.data && this.props.getDetails.data.name}
              </h4>
              <h6 className=" white-text mb-3">{ this.props.getDetails.data && this.props.getDetails.data.email}</h6>
              <h6 className=" white-text mb-3">{ this.props.getDetails.data && this.props.getDetails.data.phoneNumber} </h6>
        
              <h6 className=" white-text mb-3"> <a href="editprofile" className=" green-text">Edit Profile</a></h6>
              
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <FooterLink
         title="Footer"/>
    </>
  );
}
}

const mapStateToProps = (state) => {
  return{
    getDetails:  state.getDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    actions: {
      getDetails: bindActionCreators(GetProfileDetail, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
