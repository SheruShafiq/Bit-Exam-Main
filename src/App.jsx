// This is the App component of my project. It contains the components Header, Landing, Application and Succesful.
// It also imports BrowserRouter as Router, Routes, Route and Outlet from react-router-dom,
// as well as the css file and framer-motion.
// It has three constants: PageLayout, pageVariants and pageTransition.
// PageLayout is a function with children as a parameter.
// pageVariants is an object with initial, in and out as properties.
// pageTransition is an object with type, ease and duration as properties.
// AnimationLayout is a function.
// It returns a PageLayout component with a motion.div component as a child.
// The motion.div component has initial, animate, variants and transition properties.
// App is a function.
// It returns a Header component, a Router component, a Routes component and a Route component.
// The Route component has an element property.
// It returns three Route components.
// The Route components have exact, path and element properties.
// The three Route components return the components Landing, Application and Succesful.

import React from "react";
import "./App.css"; // import css file
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom"; // import Router, Routes, Route, Outlet from react-router-dom
import Landing from "./pages/Landing"; // import Landing from ./pages/Landing
import Application from "./pages/Form"; // import Application from ./pages/Form
import Succesful from "./pages/Succesful"; // import Succesful from ./pages/Succesful
import Header from "./components/Header"; // import Header from ./components/Header
import { motion } from "framer-motion"; // import motion from framer-motion

const PageLayout = ({ children }) => children; // const PageLayout is a function with children as a parameter

const pageVariants = {
  // const pageVariants is an object with initial, in, out as properties
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
const pageTransition = {
  // const pageTransition is an object with type, ease, duration as properties
  type: "tween",
  ease: "linear",
  duration: 0.5,
};

const AnimationLayout = () => {
  // const AnimationLayout is a function that implements animation in the PageLayout component
  return (
    <PageLayout>
      <motion.div
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </PageLayout>
  );
};

function App() {
  // App is a function
  return (
    <>
      <Header />
      <Router>
        {" "}
        <Routes>
          {" "}
          <Route element={<AnimationLayout />}>
            {" "}
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/form" element={<Application />} />
            <Route exact path="/result" element={<Succesful />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
