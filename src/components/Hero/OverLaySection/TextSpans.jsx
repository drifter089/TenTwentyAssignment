import React, {
  useLayoutEffect,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { useRef } from "react";
import { screenSizes } from "../../../utils";

const TextSpan = styled.span`
  display: block;
  position: relative;
  top: 100%;
`;

const CenterText = styled.div`
  font-size: 4rem;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  text-transform: capitalize;
  color: #eef4f9;
  overflow: hidden;
  display: flex;
  gap: 0.5rem;

  @media (max-width: ${screenSizes.mobile}) {
    font-size: 2.5rem;
  }
`;

const TextSpans = () => {
  const once = useRef(false);

  const wordRef1 = useRef(null);
  const wordRef2 = useRef(null);
  const wordRef3 = useRef(null);
  const wordRef4 = useRef(null);
  const wordRef5 = useRef(null);
  const wordRef6 = useRef(null);

  const wordRefArray = useMemo(
    () => [wordRef1, wordRef2, wordRef3, wordRef4, wordRef5, wordRef6],
    []
  );

  useLayoutEffect(() => {
    if (!once.current) {
      console.log("once.current: ", once.current);
      once.current = true;

      let delay = 1;

      wordRefArray.forEach((wordRef) => {
        gsap.to(wordRef.current, {
          duration: 1,
          y: "-100%",
          delay: delay,
        });
        delay += 0.5;
      });
    }
  }, []);

  return (
    <>
      <CenterText>
        <TextSpan ref={wordRef1}>From</TextSpan>
        <TextSpan ref={wordRef2}>Our</TextSpan>
        <TextSpan ref={wordRef3}>Farms</TextSpan>
      </CenterText>
      <CenterText>
        <TextSpan ref={wordRef4}>To </TextSpan>
        <TextSpan ref={wordRef5}>Your </TextSpan>
        <TextSpan ref={wordRef6}>Hands </TextSpan>
      </CenterText>
    </>
  );
};

export default TextSpans;
