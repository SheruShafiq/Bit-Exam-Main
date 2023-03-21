import React, { useEffect } from "react";
import "../App.css";
import Title from "../components/Title";
import LandingPageContent from "../components/LandingPageContent";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPageRoute.css";
import LoadingScreen from "../components/LoadingScreen";

function App() {
  useEffect(() => {
    // Disable scrolling on mount
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    // Enable scrolling after 5 seconds
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 3000);
  }, []);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/form");
  };
  return (
    <>
      <div id="LoadingScreenLanding">
        <LoadingScreen />
      </div>

      <div id="LandingParent">
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
      </div>
    </>
  );
}

export default App;
