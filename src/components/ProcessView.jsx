import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/carousel/1.png";
import image2 from "../images/carousel/2.png";
import image3 from "../images/carousel/3.png";
import "../styles/ProcessView.css";

const images = [
  { src: image1, alt: "lmao", text: "Verzenden" },
  { src: image2, alt: "lmao", text: "Nakijken" },
  { src: image3, alt: "lmao", text: "Kennis Making" },
];

const galleryItems = [];

for (let i = 0; i < 21; i++) {
  const image = images[i % 3];
  galleryItems.push(
    <div className="galleryImages">
      <img src={image.src} alt={image.alt} />
      <div className="centered">{image.text}</div>
    </div>
  );
}
export default class CenterMode extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "center",
      centerMode: true,
      centerPadding: "720px",
      speed: 500,
      autoplay: true,
      speech: 1,
      cssEase: "linear",
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 728,
          settings: {
            centerPadding: "110px",
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: "center",
            centerMode: true,
            speed: 500,
            autoplay: true,
            speech: 1,
            cssEase: "linear",
            autoplaySpeed: 2000,
          },
        },
      ],
    };
    return (
      <div id="gallerView">
        <Slider {...settings}>{galleryItems}</Slider>
      </div>
    );
  }
}
