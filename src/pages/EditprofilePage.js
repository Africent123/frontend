import React from "react";
import decode from "jwt-decode";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { EditProfile } from "../Redux//Action/ManageProfileAction";
import FooterLink from "./../components/FooterLink";
import { toast } from "react-toastify";

class EditprofilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      loading: false
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const payload = decode(token);
    const uploadedByUser = payload.userId;
    const id = payload.userId;
    //console.log(this.state.id);

    const { name, email, phoneNumber } = this.state;
    let data = { name, email, phoneNumber };
    this.props.actions
      .editProfile(data, id)
      .then(res => {
        this.setState({ loading: false });
        if (res.message.data.success) {
          toast.success("Profile Changed");
        }
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ loading: true });
  };

  render() {
    const { name, email, phoneNumber } = this.state;
    return (
      <>
        <MDBContainer>
          <MDBRow className=" py-5 my-5">
            <form
              className="needs-validation mx-auto"
              onSubmit={this.onSubmit}
              noValidate
            >
              {this.state.loading && (
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              )}
              {/* {this.state.SuccessMessage.length > 0 && (
                <div
                  class="alert alert-success alert-dismissible text-center"
                  role="alert"
                >
                  {this.state.SuccessMessage}
                </div>
              )} */}

              <MDBRow>
                <MDBCol md="8" className=" row mb-3">
                  <MDBCol md="12" className="mb-3">
                    <label
                      htmlFor="defaultFormRegisterNameEx"
                      className="grey-text"
                    >
                      Name
                    </label>
                    <input
                      value={name}
                      name="name"
                      onChange={this.onChange}
                      type="text"
                      id="defaultFormRegisterNameEx"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </MDBCol>

                  <MDBCol md="12" className="mb-3">
                    <label
                      htmlFor="defaultFormRegisterEmailEx2"
                      className="grey-text"
                    >
                      Phone Number
                    </label>
                    <input
                      value={phoneNumber}
                      name="phoneNumber"
                      onChange={this.onChange}
                      type="text"
                      id="defaultFormRegisterEmailEx2"
                      className="form-control"
                      placeholder="contact"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </MDBCol>

                  <MDBCol md="12" className="mb-3">
                    <label
                      htmlFor="defaultFormRegisterConfirmEx3"
                      className="grey-text"
                    >
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={this.onChange}
                      type="email"
                      id="defaultFormRegisterConfirmEx3"
                      className="form-control"
                      name="email"
                      placeholder="Your Email address"
                    />
                  </MDBCol>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBBtn
                  color=""
                  className="btn bg-success slider-btn mx-auto text-center"
                  size="lg"
                  type="submit"
                >
                  Update
                </MDBBtn>
              </MDBRow>
            </form>
          </MDBRow>
        </MDBContainer>
        <FooterLink title="Footer" />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    editProfile: state.getDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      editProfile: bindActionCreators(EditProfile, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditprofilePage);
