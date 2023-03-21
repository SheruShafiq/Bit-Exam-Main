import React from "react";
import "../styles/Succesful.css";
import Title from "./Title";
import "../App.css";
import "../styles/ErrorPage.css";
function Error() {
  return (
    <div id="resultParent">
      <div id="titleApp">
        <Title titleText="Error..." subText="Probeer opnieuw" />
      </div>
      <div className="demo1">
        <div className="ui-error">
          <svg viewBox="0 0 87 87" version="1.1">
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="Group-2" transform="translate(2.000000, 2.000000)">
                <circle
                  id="Oval-2"
                  stroke="black"
                  strokeWidth="0.1"
                  cx="41.5"
                  cy="41.5"
                  r="41.5"
                />
                <circle
                  className="ui-error-circle"
                  stroke="white"
                  strokeWidth="0.5"
                  cx="41.5"
                  cy="41.5"
                  r="41.5"
                />
                <path
                  className="ui-error-line1"
                  d="M22.244224,22 L60.4279902,60.1837662"
                  id="Line"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
                <path
                  className="ui-error-line2"
                  d="M60.755776,21 L23.244224,59.8443492"
                  id="Line"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Error;
