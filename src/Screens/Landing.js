import React from "react";
import "./Landing.css";
import Herosection from "../components/Herosection";
import Section from "../components/Section";
import Accordiion from "../components/Accordiion";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../components/Data";
import Footer from "../components/Footer/Footer";

function Landing() {
  return (
    <>
      <Herosection />
      <Section {...homeObjOne} />
      <Section {...homeObjTwo} />
      <Section {...homeObjThree} flex="start" />
      <Section {...homeObjFour} />
      <Accordiion />
      <Footer />
    </>
  );
}

export default Landing;
