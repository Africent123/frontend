import React from "react";
import decode from "jwt-decode";
import { Player } from 'video-react';


// reactstrap components
import {
  Row
} from "reactstrap";
import axios from "../helpers/axios";

class WatchMovies extends React.Component {

  componentDidMount(){
    const { player } = this.refs.player.getState();

 
    const {movie} = this.props.location.state
    //console.log(movie._id)
    //console.log(this.refs.player)
    const token = localStorage.getItem('token');
    const payload = decode(token)
    //console.log(payload)
    
  }
  handleDelete = e => {
    //console.log(this.refs.player.play())
    
  }
  handleD = e => {
    const token = localStorage.getItem('token');
    const payload = decode(token)
    const {movie} = this.props.location.state;
    //console.log(payload.userId)
    //console.log(movie._id)
    const userId = payload.userId
    const movieId = movie._id;


    axios.put(`/api/movies/views/${movieId}`)
    .then((result) => {
      //console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })

    axios.post(`/api/watched`, {userId, movieId})
    .then((result) => {
      //console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })
  }



  

  render() {
      const {movie} = this.props.location.state
    return (
      <>
        <div className="container-fluid bg-black">
          

          <div className="col-md-12 mx-auto pt-5">
          <Row className="" >
            <div className="col-md-12 mx-auto py-5">
              <Player
                  fluid={true}
                  width={400}
                  height={400}
                  ref="player"
                  preload="auto"
                  playsInline
                  poster="/assets/bg5.jpg"
                  src={`/api/files/${movie.filename}`}
                  position="center"
                  LoadingSpinner
                  onEnded={this.handleD}
              />
              
            </div>
          </Row>
        
         </div>
        </div>
       
      </>
    );
  }
}

export default WatchMovies;

