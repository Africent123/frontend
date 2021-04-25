import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn} from "mdbreact";
import ProgressBar from "react-bootstrap/ProgressBar";
import decode from "jwt-decode";
import FooterLink from "./../components/FooterLink";
import SidenavPage from "./../components/SidenavPage";
import {toast} from "react-toastify"
import axiosIntance from "../helpers/axios";

class MovieuploadPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      Category: "",
      Description: "",
      file: {},
      file2: {},
      message: [],
      SuccessMessage: [],
      serverError: "",
      progress: 0,
      loading: false,
      user: ""
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("cptoken");
    const payload = decode(token);
    const uploadedByUser = payload.userId;
    this.setState({ user: payload.userId });
    //console.log(this.state.user);
  }

  onChange = e => {
    if (e.target.name.startsWith("file")) {
      this.setState({ [e.target.name]: e.target.files[0] });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, Category, Description, file1, file2 } = this.state;
    var formdata = new FormData();
    formdata.append("uploadedByUser", this.state.user);
    Object.keys(this.state).map(key => {
      if (key.startsWith("file")) {
        formdata.append("file", this.state[key]);
      } else {
        formdata.append(key, this.state[key]);
      }
    });
    this.setState({loading: true})
    axiosIntance.post(`/api/upload/movies`, formdata, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formdata._boundary}`
      },
      onUploadProgress: progress => {
        const { loaded, total } = progress;
        this.setState({ progress: Math.round((loaded / total) * 100) });
        // console.log(this.state.progress)
        if(this.state.progress === 100){
          toast.success("Movie uploaded successfully")
        }
      }
    }).then((result) => {
      //console.log(result)
    }).catch(err => {
      console.log(err)
    })
  };

  render() {
    const { name, Category, Description, file1, file2, user } = this.state;
    const divStyle = {
      margin: "60px"
    };

    return (
      <>
        <MDBCol className="container-fluid">
          <MDBRow className="">
            <MDBCol md="2" className="px-0 bg-success ">
              <SidenavPage title="SidenavPage" />
            </MDBCol>

            <MDBCol md="10" className="">
              {this.state.progress != 0 && (
                <ProgressBar
                  style={divStyle}
                  variant="success"
                  now={this.state.progress}
                  label={this.state.progress}
                />
              )}
              <MDBContainer>
                <MDBRow className=" py-5 my-5">
                  <form
                    className="needs-validation mx-auto"
                    onSubmit={this.onSubmit}
                    noValidate
                  >
                    <MDBRow>
                      <MDBCol md="6" className="mb-3">
                        <label
                          htmlFor="defaultFormRegisterConfirmEx3"
                          className="green-text"
                        >
                          Movie Tittle
                        </label>

                        <input
                          value={name}
                          onChange={this.onChange}
                          type="text"
                          id="defaultFormRegisterPasswordEx4"
                          className="form-control"
                          name="name"
                          placeholder="Movie Tittle"
                          required
                        />
                        <br />

                        <label
                          htmlFor="defaultFormRegisterConfirmEx3"
                          className="green-text"
                        >
                          Movie Description
                        </label>

                        <textarea
                          name="Description"
                          onChange={this.onChange}
                          value={Description}
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="11"
                        />
                      </MDBCol>

                      <MDBCol md="6" className=" row mb-3">
                        <MDBCol md="12" className="mb-3">
                          <label
                            htmlFor="defaultFormRegisterNameEx"
                            className="green-text"
                          >
                            Movie Category
                          </label>
                          <select
                            className="browser-default custom-select"
                            onChange={this.onChange}
                            name="Category"
                            id="Category"
                          >
                            <option value={Category}>Choose your option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                          </select>
                          <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol md="12" className="mb-3">
                          <label
                            htmlFor="defaultFormRegisterEmailEx2"
                            className="green-text"
                          >
                            Poster
                          </label>
                          <div className="custom-file">
                            <input
                              name="file1"
                              onChange={this.onChange}
                              type="file"
                              className="custom-file-input"
                              id="inputGroupFile01"
                              aria-describedby="inputGroupFileAddon01"
                              accept=".jpg,.png,.jpeg, "
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="inputGroupFile01"
                            >
                              Choose file
                            </label>
                          </div>
                        </MDBCol>
                        <MDBCol md="12" className="mb-3">
                          <label
                            htmlFor="defaultFormRegisterEmailEx2"
                            className="green-text"
                          >
                            Movie
                          </label>
                          <div className="custom-file">
                            <input
                              name="file2"
                              onChange={this.onChange}
                              type="file"
                              className="custom-file-input"
                              id="inputGroupFile01"
                              aria-describedby="inputGroupFileAddon01"
                              accept=".mp4,.3gp,.wmv, .avi, .mpeg"
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="inputGroupFile01"
                            >
                              Choose file
                            </label>
                          </div>
                        </MDBCol>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow>
                      <MDBBtn
                        color=""
                        className="btn bg-success slider-btn mx-auto"
                        size="lg"
                        type="submit"
                      >
                        Update
                      </MDBBtn>
                    </MDBRow>
                  </form>
                </MDBRow>
              </MDBContainer>
            </MDBCol>
          </MDBRow>
        </MDBCol>

        <FooterLink title="Footer" />
      </>
    );
  }
}

export default MovieuploadPage;
