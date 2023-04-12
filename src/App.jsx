import { useState } from "react";

import "./App.css";

import HeroSection from "./components/Hero/HeroSection";
import SliderSection from "./components/Slider/SliderSection";
import Navbar from "./components/Navbar/Navbar";
import { colors } from "./utils";
import styled from "styled-components";

const GridItem = styled.div`
  position: relative;
  width: 100vw;
  overflow: hidden;
`;

const AppWrapper = styled.div`
  font-family: "Work Sans", sans-serif;
  color: ${colors.blackishGrey};
  width: 100%;
  overflow: hidden;
`;

function App() {
  return (
    <AppWrapper>
      <Navbar />
      <GridItem>
        <HeroSection />
      </GridItem>
      <GridItem>
        <SliderSection />
      </GridItem>
    </AppWrapper>
  );
}

export default App;
