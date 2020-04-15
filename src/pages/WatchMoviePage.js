import React from "react";
import axios from "axios";
import decode from "jwt-decode";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCardImage,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle
} from "mdbreact";
import FooterLink from "./../components/FooterLink";
import MovietabsPage from "./../components/MovietabsPage";
import MoviecatagorisNavPage from "./../components/MoviecatagorisNavPage";

class WatchMoviePage extends React.Component {
  componentDidMount() {
    const { movie } = this.props.location.state;
    console.log(movie);
    console.log(this.refs.player);
    const token = localStorage.getItem("token");
    const payload = decode(token);
    console.log(payload);
  }
  // handleDelete = e => {
  //   console.log(this.refs.player.play())

  // }
  handleD = e => {
    const token = localStorage.getItem("token");
    const payload = decode(token);
    const { movie } = this.props.location.state;
    console.log(payload.userId);
    console.log(movie._id);
    const userId = payload.userId;
    const movieId = movie._id;

    axios
      .put(`https://kannywoodtv.live/api/movies/views/${movieId}`)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .post("https://kannywoodtv.live/api/watched", { userId, movieId })
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { movie } = this.props.location.state;
    return (
      <>
        <MDBContainer className="pt-4">
          {
            ///http://localhost:3000/moviecategory link to MoviecatagorisPage with MoviecatagorisNav added
          }
          <MoviecatagorisNavPage title="MoviecatagorisNavPage" />
          <video className="video-fluid" loop controls>
            <source
              src={`https://kannywoodtv.live/api/files/${movie.filename}`}
            />
          </video>
          <MDBRow>
            <MovietabsPage title="MovietabsPage" movie={movie} />
            {/*Required field to use the tabs section under the movie*/}
          </MDBRow>
        </MDBContainer>

        <MDBContainer className="">
          <MDBRow className="py-5">
            <MDBCol className="col-lg-12 ">
              <MDBRow className="py-5">
                {/*Required field to use the moVie list section under the movie*/}
                <MDBCol className="col-lg-2 col-md-6 col-sm-6">
                  <MDBCard className="movielist-cards">
                    <MDBCardImage
                      className="img-fluid"
                      src={require("../assets/img/03.png")}
                      waves
                    />
                    <MDBCardBody>
                      <MDBCardTitle className="h6 grey-text">
                        Title: Some text{" "}
                      </MDBCardTitle>
                      <MDBCardText>
                        <span>
                          <small>IMDb :7.6 </small>
                          <li className="fas fa-star review"></li>
                          <li className="fas fa-star review"></li>
                          <li className="fas fa-star"></li>
                          <li className="fas fa-star"></li>
                          <li className="fas fa-star"></li>
                        </span>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol className="col-lg-2 col-md-6 col-sm-6">
                  <MDBCard className="movielist-cards">
                    <MDBCardImage
                      className="img-fluid"
                      src={require("../assets/img/01.png")}
                      waves
                    />
                    <MDBCardBody>
                      <MDBCardTitle className="h6 grey-text">
                        Title: Some text{" "}
                      </MDBCardTitle>
                      <MDBCardText>
                        <span>
                          <small>IMDb :7.6 </small>
                          <li className="fas fa-star review"></li>
                          <li className="fas fa-star review"></li>
                          <li className="fas fa-star"></li>
                          <li className="fas fa-star"></li>
                          <li className="fas fa-star"></li>
                        </span>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol className="col-lg-2 col-md-6 col-sm-6">
                  <MDBCard className="movielist-cards">
                    <MDBCardImage
                      className="img-fluid"
                      src={require("../assets/img/05.png")}
                      waves
                    />
                    <MDBCardBody>
                      <MDBCardTitle className="h6 grey-text">
                        Title: Some text{" "}
                      </MDBCardTitle>
                      <MDBCardText>
                        <span>
                          <small>IMDb :7.6 </small>
                          <li className="fas fa-star review"></li>
                          <li className="fas fa-star review"></li>
                          <li className="fas fa-star"></li>
                          <li className="fas fa-star"></li>
                          <li className="fas fa-star"></li>
                        </span>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol className="col-lg-2 col-md-6 col-sm-6">
                  <MDBCard className="movielist-cards">
                    <MDBCardImage
                      className="img-fluid"
                      src={require("../assets/img/05.png")}
                      waves
                    />
                    <MDBCardBody>
                      <MDBCardTitle className="h6 grey-text">
                        Title: Some text{" "}
                      </MDBCardTitle>
                      <MDBCardText>
                        <span>
                          <small>IMDb :7.6 </small>
                          <li className="fas fa-star review"></li>
                          <li className="fas fa-star review"></li>
                          <li className="fas fa-star"></li>
                          <li className="fas fa-star"></li>
                          <li className="fas fa-star"></li>
                        </span>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol className="col-lg-2 col-md-6 col-sm-6">
                  <MDBCard className="movielist-cards">
                    <MDBCardImage
                      className="img-fluid"
                      src={require("../assets/img/02.png")}
                      waves
                    />
                    <MDBCardBody>
                      <MDBCardTitle className="h6 grey-text">
                        Title: Some text{" "}
                      </MDBCardTitle>
                      <MDBCardText>
                        <span>
                          <small>IMDb :7.6 </small>
                          <li className="fas fa-star review"></li>
                          <li className="fas fa-star review"></li>
                          <li className="fas fa-star"></li>
                          <li className="fas fa-star"></li>
                          <li className="fas fa-star"></li>
                        </span>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol className="col-lg-2 col-md-6 col-sm-6">
                  <MDBCard className="movielist-cards">
                    <MDBCardImage
                      className="img-fluid"
                      src={require("../assets/img/04.png")}
                      waves
                    />
                    <MDBCardBody>
                      <MDBCardTitle className="h6 grey-text">
                        Title: Some text{" "}
                      </MDBCardTitle>
                      <MDBCardText>
                        <span>
                          <small>IMDb :7.6 </small>
                          <li className="fas fa-star review"></li>
                          <li className="fas fa-star review"></li>
                          <li className="fas fa-star"></li>
                          <li className="fas fa-star"></li>
                          <li className="fas fa-star"></li>
                        </span>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className="col-lg-2 col-md-6 col-sm-6">
              <MDBCard className="movielist-cards">
                <MDBCardImage
                  className="img-fluid"
                  src={require("../assets/img/02.png")}
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle className="h6 grey-text">
                    Title: Some text{" "}
                  </MDBCardTitle>
                  <MDBCardText>
                    <span>
                      <small>IMDb :7.6 </small>
                      <li className="fas fa-star review"></li>
                      <li className="fas fa-star review"></li>
                      <li className="fas fa-star"></li>
                      <li className="fas fa-star"></li>
                      <li className="fas fa-star"></li>
                    </span>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="col-lg-2 col-md-6 col-sm-6">
              <MDBCard className="movielist-cards">
                <MDBCardImage
                  className="img-fluid"
                  src={require("../assets/img/06.png")}
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle className="h6 grey-text">
                    Title: Some text{" "}
                  </MDBCardTitle>
                  <MDBCardText>
                    <span>
                      <small>IMDb :7.6 </small>
                      <li className="fas fa-star review"></li>
                      <li className="fas fa-star review"></li>
                      <li className="fas fa-star"></li>
                      <li className="fas fa-star"></li>
                      <li className="fas fa-star"></li>
                    </span>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="col-lg-2 col-md-6 col-sm-6">
              <MDBCard className="movielist-cards">
                <MDBCardImage
                  className="img-fluid"
                  src={require("../assets/img/07.png")}
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle className="h6 grey-text">
                    Title: Some text{" "}
                  </MDBCardTitle>
                  <MDBCardText>
                    <span>
                      <small>IMDb :7.6 </small>
                      <li className="fas fa-star review"></li>
                      <li className="fas fa-star review"></li>
                      <li className="fas fa-star"></li>
                      <li className="fas fa-star"></li>
                      <li className="fas fa-star"></li>
                    </span>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="col-lg-2 col-md-6 col-sm-6">
              <MDBCard className="movielist-cards">
                <MDBCardImage
                  className="img-fluid"
                  src={require("../assets/img/09.png")}
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle className="h6 grey-text">
                    Title: Some text{" "}
                  </MDBCardTitle>
                  <MDBCardText>
                    <span>
                      <small>IMDb :7.6 </small>
                      <li className="fas fa-star review"></li>
                      <li className="fas fa-star review"></li>
                      <li className="fas fa-star"></li>
                      <li className="fas fa-star"></li>
                      <li className="fas fa-star"></li>
                    </span>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="col-lg-2 col-md-6 col-sm-6">
              <MDBCard className="movielist-cards">
                <MDBCardImage
                  className="img-fluid"
                  src={require("../assets/img/08.png")}
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle className="h6 grey-text">
                    Title: Some text{" "}
                  </MDBCardTitle>
                  <MDBCardText>
                    <span>
                      <small>IMDb :7.6 </small>
                      <li className="fas fa-star review"></li>
                      <li className="fas fa-star review"></li>
                      <li className="fas fa-star"></li>
                      <li className="fas fa-star"></li>
                      <li className="fas fa-star"></li>
                    </span>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="col-lg-2 col-md-6 col-sm-6">
              <MDBCard className="movielist-cards">
                <MDBCardImage
                  className="img-fluid"
                  src={require("../assets/img/08.png")}
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle className="h6 grey-text">
                    Title: Some text{" "}
                  </MDBCardTitle>
                  <MDBCardText>
                    <span>
                      <small>IMDb :7.6 </small>
                      <li className="fas fa-star review"></li>
                      <li className="fas fa-star review"></li>
                      <li className="fas fa-star"></li>
                      <li className="fas fa-star"></li>
                      <li className="fas fa-star"></li>
                    </span>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <FooterLink title="Footer" />
      </>
    );
  }
}

export default WatchMoviePage;
