import React from "react";
import "../App.css";
import Title from "../components/Title";
import Slider from "react-slick";
import image1 from "../images/carousel/1.png";
import image2 from "../images/carousel/2.png";
import image3 from "../images/carousel/3.png";
import Form from "../components/FormComponent";
import "../styles/FormPage.css";
import "../../node_modules/react-slick/lib/";

function App() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  const images = [image1, image2, image3];
  return (
    <div id="formPageParent">
      <div id="titleApp">
        <Title titleText="Solliciteren" subText="Go for IT" />
      </div>
      <div id="Car">
        <Slider {...settings}>
          <img src={image1} alt="lmao" />
          <img src={image2} alt="lmao" />
          <img src={image3} alt="lmao" />
        </Slider>
      </div>
      <div id="formPage">
        <div id="FormComponent">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
