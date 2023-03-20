import React from "react";
import "../App.css";
import Title from "../components/Title";
import ImageCarousel from "../components/ImageCarousel";
import image1 from "../images/carousel/1.png";
import image2 from "../images/carousel/2.png";
import image3 from "../images/carousel/3.png";
import Form from "../components/Form";

function App() {
  const images = [image1, image2, image3];
  return (
    <>
      <div id="formPage">
        <div id="titleApp">
          <Title titleText="Solliciteren" subText="Go for IT" />
        </div>
        <ImageCarousel images={images} />
        <Form />
      </div>
    </>
  );
}

export default App;
