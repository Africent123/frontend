import React from "react";
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
import { Link } from "react-router-dom";
import FooterLink from "./../components/FooterLink";
import MovielistNavPage from "./../components/MovielistNavPage";
import AdminSidenavPage from "./../components/AdminSidenavPage";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchingMovies } from "../Redux/Action/MoviesActions";
import axiosIntance from "../helpers/axios";

class AdminMovielistPage extends React.Component {
  componentDidMount() {
    this.props.actions
      .Movies()
      .then(data => {
        //console.log(data, "Redux");
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ loading: true });
  }

  render() {
    const imgStyle = {
      width: "250px",
      height: "200px"
    };
    return (
      <>
        <MDBCol className="container-fluid">
          <MDBRow className="">
            <MDBCol md="2" className="px-0 bg-success ">
              <AdminSidenavPage title="AdminSidenavPage" />
            </MDBCol>

            <MDBCol md="10" className="">
              <MDBContainer className="pt-4">
                <MovielistNavPage title="MovielistNavPage" />
              </MDBContainer>
              <MDBContainer className="pt-4">
                <MDBRow className="py-5">
                  {this.props.Movies.map(movie => (
                    <MDBCol className="col-lg-2 col-md-6 col-sm-6">
                      <MDBCard
                        className="movielist-cards"
                        onClick={() => {
                          //console.log("pressed");
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
                            src={`/api/files/thumbnail/${movie.thumbnail}`}
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
                  <MDBCol className="col-lg-12 "></MDBCol>
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

const mapStateToProps = (state, ownProps) => {
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
)(AdminMovielistPage);
