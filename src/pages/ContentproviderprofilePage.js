import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import SidenavPage from "./../components/SidenavPage";
import axios from "axios";
import decode from "jwt-decode";

class ContentproviderprofilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      providerName: "",
      ErrorMessage: [],
      SuccessMessage: [],
      serverError: "",
      message: [],
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

    const token = localStorage.getItem("cptoken");
    const payload = decode(token);
    const id = payload.userId;
    console.log(this.state.id);

    const { name, email, phoneNumber, providerName } = this.state;
    console.log(this.state);
    this.setState({ loading: true });
    axios
      .put(`https://kannywoodtv.live/api/cp/profile/edit/${id}`, {
        name,
        email,
        phoneNumber,
        providerName
      })
      .then(result => {
        console.log(result.data);
        if (!result.data.success) {
          this.setState({ SuccessMessage: result.data });
          // this.setState({SuccessMessage: []})
          this.setState({ loading: false });
        }
      })
      .catch(error => {
        this.setState({
          serverError:
            "Server Error please try after sometime or contact the site Administrator"
        });
      });
  };

  render() {
    const style = {
      marginTop: "30px"
    };
    return (
      <MDBCol className="container-fluid">
        <MDBRow className="">
          <MDBCol md="2" className="px-0 bg-success ">
            <SidenavPage title="SidenavPage" />
          </MDBCol>

          <MDBCol md="10" className="">
            <MDBContainer>
              {this.state.loading && (
                <div class="spinner-border" role="status" style={style}>
                  <span class="sr-only">Loading...</span>
                </div>
              )}
              {this.state.SuccessMessage.length > 0 && (
                <div
                  class="alert alert-success alert-dismissible text-center"
                  role="alert"
                >
                  {this.state.SuccessMessage}
                </div>
              )}
              <MDBRow>
                <MDBCol md="6" className="mx-auto py-5">
                  <form onSubmit={this.onSubmit}>
                    <p className="h4 text-center mb-4">Profile</p>
                    <label>Name</label>
                    <input
                      placeholder="Content Provider Name"
                      type="text"
                      onChange={this.onChange}
                      name="providerName"
                      id="defaultFormRegisterNameEx"
                      className="form-control"
                    />
                    <br />
                    <label>Email</label>
                    <input
                      placeholder=" Email"
                      type="email"
                      name="email"
                      onChange={this.onChange}
                      id="defaultFormRegisterEmailEx"
                      className="form-control"
                    />
                    <br />

                    <label>Phone</label>
                    <input
                      placeholder=" Phone Number"
                      name="phoneNumber"
                      type="text"
                      onChange={this.onChange}
                      id="defaultFormRegisterConfirmEx"
                      className="form-control"
                    />
                    <br />
                    <label>Password</label>

                    <input
                      placeholder="Password"
                      type="password"
                      id="defaultFormRegisterPasswordEx"
                      className="form-control"
                    />
                    <br />
                    <label>Content ProviderUser ID</label>
                    <input
                      placeholder="user ID"
                      readOnly
                      value={"s"}
                      id="defaultFormRegisterPasswordEx"
                      className="form-control"
                    />
                    <br />

                    <div className="text-center mt-4">
                      <MDBBtn color="success" type="submit">
                        Edit Profile
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBCol>
    );
  }
}
export default ContentproviderprofilePage;
