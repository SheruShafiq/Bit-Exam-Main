import "./App.css";
import Header from "./components/Header.jsx";
import Title from "./components/Title";
import LandingPageContent from "./components/LandingPageContent";
import Button from "./components/Button";
function App() {
  return (
    <div id="landingPage">
      <Header />
      <div id="titleApp">
        <Title titleText="Stagair Backend Developer" subText="Stage bij HI" />
      </div>
      <div id="mainContent">
        <LandingPageContent />
        <div id="buttonApp">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
