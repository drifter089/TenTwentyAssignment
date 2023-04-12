import { gsap } from "gsap";
import React, {
  useLayoutEffect,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import styled from "styled-components";
import BackGroundBox from "./BackGroundBox/BackGroundBox";
import AnimatedBorder from "./OverLaySection/AnimatedBorder";
import TextSpans from "./OverLaySection/TextSpans";
import {
  OverLayContainer,
  TopContainer,
  PreCenterText,
  BottomContainer,
  PreviewImageWrapper,
  ButtonContainer,
  CurrentPageContainer,
  HorizontalLine,
  CenteredText,
  HeroWrapper,
} from "./HeroSection.styles";

const HeroSection = () => {
  const [selected, setSelected] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  const indexArray = useMemo(() => [0, 1, 2, 3], []);

  const heroRef = React.useRef(null);

  const nextClickHandler = () => {
    setSelected((prev) => {
      if (prev === indexArray.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  useEffect(() => {
    if (selected === 3) {
      setNextIndex(0);
    } else {
      setNextIndex(selected + 1);
    }
  }, [selected]);

  return (
    <HeroWrapper>
      <BackGroundBox selected={selected} />
      <OverLayContainer>
        <TopContainer>
          <PreCenterText>Welcome To TenTwenty Farms</PreCenterText>
          <TextSpans />
        </TopContainer>
        <BottomContainer>
          <ButtonContainer onClick={nextClickHandler}>
            <AnimatedBorder
              nextClickHandler={nextClickHandler}
              selected={selected}
            />
            <PreviewImageWrapper>
              <BackGroundBox
                selected={nextIndex}
                preview={true}
                from={"preview"}
              />
              <CenteredText>Next</CenteredText>
            </PreviewImageWrapper>
          </ButtonContainer>
          <CurrentPageContainer>
            <PreCenterText>{selected + 1}</PreCenterText>
            <HorizontalLine />
            <PreCenterText>{nextIndex + 1}</PreCenterText>
          </CurrentPageContainer>
        </BottomContainer>
      </OverLayContainer>
    </HeroWrapper>
  );
};

export default HeroSection;
