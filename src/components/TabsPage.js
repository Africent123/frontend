import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { MDBMask, MDBView} from "mdbreact";

import "react-alice-carousel/lib/alice-carousel.css"

class TabsPage extends React.Component {
  state = {
    galleryItems: [1, 2, 3,4,5].map((i) => (<h2 key={i}>{i}</h2>)),
  }

  stagePadding = {
      paddingLeft: 50,    
      paddingRight: 50,
    }

  responsive = {
    320: { items: 1 },
    400: { items: 2 },
    768: { items: 3 },
    1024: { items: 5 },
  }
    
  onSlideChange(e) {
    console.debug('Item`s position during a change: ', e.item)
    console.debug('Slide`s position during a change: ', e.slide)
  }

  onSlideChanged(e) {
    console.debug('Item`s position after changes: ', e.item)
    console.debug('Slide`s position after changes: ', e.slide)
  }

  render() {
    return (
      <AliceCarousel
        items={this.state.galleryItems}
        responsive={this.responsive}
        autoPlayInterval={3000}
        autoPlayDirection="rtl"
        autoPlay={true}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        disableAutoPlayOnAction={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
        
      >
      <MDBView waves>
              <img
                src={require("../assets/img/01.png")}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <p className="white-text"><i className="far fa-play-circle"></i></p>
              </MDBMask>
            </MDBView>
      <MDBView waves>
              <img
                src={require("../assets/img/02.png")}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <p className="white-text"><i className="far fa-play-circle"></i></p>
              </MDBMask>
            </MDBView>
            <MDBView waves>
              <img
                src={require("../assets/img/03.png")}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <p className="white-text"><i className="far fa-play-circle"></i></p>
              </MDBMask>
            </MDBView>
            <MDBView waves>
              <img
                src={require("../assets/img/04.png")}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <p className="white-text"><i className="far fa-play-circle"></i></p>
              </MDBMask>
            </MDBView>
            <MDBView waves>
              <img
                src={require("../assets/img/05.png")}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <p className="white-text"><i className="far fa-play-circle"></i></p>
              </MDBMask>
            </MDBView>
            <MDBView waves>
              <img
                src={require("../assets/img/05.png")}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <p className="white-text"><i className="far fa-play-circle"></i></p>
              </MDBMask>
            </MDBView>

    </AliceCarousel>
    )
  }
}

export default TabsPage;
