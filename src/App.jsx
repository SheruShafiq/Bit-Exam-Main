import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Title from "./components/Title";
import LandingPageContent from "./components/LandingPageContent";
import Button from "./components/Button";
import ImageCarousel from "./components/ImageCarousel";
import image1 from "./images/carousel/1.png";
import image2 from "./images/carousel/2.png";
import image3 from "./images/carousel/3.png";
import Form from "./components/Form";

function App() {
  const images = [image1, image2, image3];
  const [showLandingPage, setShowLandingPage] = useState(true);
  const handleButtonClick = () => {
    setShowLandingPage(false);
  };
  return (
    <>
      <Header />
      {showLandingPage ? (
        <div id="landingPage">
          <div id="titleApp">
            <Title
              titleText="Stagair Backend Developer"
              subText="Stage bij HI"
            />
          </div>
          <div id="mainContent">
            <LandingPageContent />
            <div id="buttonApp">
              <Button
                buttonText="Geïnteresseerd?"
                onClick={handleButtonClick}
              />
            </div>
          </div>
        </div>
      ) : (
        <div id="formPage">
          <div id="titleApp">
            <Title titleText="Solliciteren" subText="Go for IT" />
          </div>
          <ImageCarousel images={images} />
          <Form />
        </div>
      )}
    </>
  );
}

export default App;
