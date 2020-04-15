import React from "react";
import axios from "axios";
import decode from "jwt-decode";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchingMovies } from "../Redux/Action/MoviesActions";
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
import MovielistNavPage from "./../components/MovielistNavPage";

class MovielistPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      featuredMovies: [],
      currentTime: null,
      selectedMovie: [],
      loading: false
    };
  }

  componentDidMount() {
    this.props.actions
      .Movies()
      .then(data => {
        console.log(data, "Redux");
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ loading: true });
  }

  handleD() {
    console.log(this.state.selectedMovie);
  }

  checkAuth() {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }
    try {
      const payload = decode(token);
      if (payload.exp < Date.now() / 1000) {
        console.log(payload.exp);
        return false;
      } else {
        return true;
      }
    } catch (e) {
      return false;
    }
    return true;
  }

  render() {
    console.log(this.props, "here");
    const isAuth = this.checkAuth();
    const imgStyle = {
      width: "300px",
      height: "200px"
    };
    return (
      <>
        {!isAuth && <Redirect to="/login" />}
        <MDBContainer className="pt-4">
          <MovielistNavPage title="MovielistNavPage" />
        </MDBContainer>
        <MDBContainer className="pt-4">
          <MDBRow className="py-5">
            {this.state.loading && (
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            )}
            <MDBCol className="col-lg-12 ">
              <MDBRow className="py-5">
                {this.props.Movies.map(movie => (
                  <MDBCol className="col-lg-2 col-md-6 col-sm-6">
                    <MDBCard
                      className="movielist-cards"
                      onClick={() => {
                        console.log("pressed");
                      }}
                    >
                      <Link
                        to={{
                          pathname: "/WatchMovie",
                          state: { movie: movie }
                        }}
                      >
                        <MDBCardImage
                          className="img-fluid"
                          style={imgStyle}
                          src={`https://kannywoodtv.live/api/files/thumbnail/${movie.thumbnail}`}
                          waves
                        />
                        <MDBCardBody>
                          <MDBCardTitle className="h6 grey-text">
                            Title: {movie.MovieName}{" "}
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
                      </Link>
                    </MDBCard>
                  </MDBCol>
                ))}
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <FooterLink title="Footer" />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("original", state);
  return {
    Movies: state.Movies,
    role: state.Auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      Movies: bindActionCreators(fetchingMovies, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovielistPage);
