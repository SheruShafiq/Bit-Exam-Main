/* eslint-disable jsx-a11y/img-redundant-alt */

import "../styles/ImagesCarouselStyles.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function ImageCarousel({ images }) {
  return (
    <Slide>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }}>
          <span>Verzend Formulier</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[0]})` }}>
          <span>Je wordt beoordeelt op Headline</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[2]})` }}>
          <span>Team Kennismaking</span>
        </div>
      </div>
    </Slide>
  );
}

export default ImageCarousel;
