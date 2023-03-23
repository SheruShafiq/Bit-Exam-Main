import React, { useEffect, useState } from "react";
import "../styles/LoadingScreenStyles.css";
import CountUp from "react-countup";

function LoadingScreen() {
  const [width, setWidth] = useState(2);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(60);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const lineStyle = {
    height: "1px",
    width: `${width}%`,
    backgroundColor: "white",
    transition: "width 4s",
    marginTop: "20px",
    marginBottom: "20px",
  };
  return (
    <div id="overlay">
      <div id="count">
        {" "}
        <CountUp delay={0} end={100} duration={4} />
      </div>
      <div style={lineStyle}></div>
      <p id="textItem">Loaded</p>
    </div>
  );
}

export default LoadingScreen;
