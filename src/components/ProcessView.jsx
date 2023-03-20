import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/carousel/1.png";
import image2 from "../images/carousel/2.png";
import image3 from "../images/carousel/3.png";
export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 1,
      speed: 500,
      autoplay: true,
      speech: 1,
      cssEase: "linear",
      autoplaySpeed: 2000,
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <img src={image1} alt="lmao" />
          <img src={image2} alt="lmao" />
          <img src={image3} alt="lmao" />
        </Slider>
      </div>
    );
  }
}
