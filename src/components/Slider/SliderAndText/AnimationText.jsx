import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useMemo } from "react";
import gsap from "gsap";
import {
  BottomTextContainer,
  TextContainer,
  BottomHeader,
  BottomSubHeader,
} from "./AnimationText.styles";

const AnimationText = ({ selected, setEnableClick }) => {
  const once = useRef(false);

  const [header, setHeader] = useState(selected.curr);

  const bottomHeaderRef = useRef(null);
  const bottomSubHeaderRef = useRef(null);

  const headerArray = [
    "Client 1",
    "Client 2",
    "Client 3",
    "Client 4",
    "Client 5",
  ];

  const subHeaderArray = [
    "Dubai, United Arab Emirates",
    "india, acsacs asdc asdccee",
    "germany, ggsdc ACA SDVSc asdc",
    "japan, lllladcew asdc asdc asdc",
    "korea, jkuhdc zcxsxa asdc asdc",
  ];

  function exitAnimationTrigger() {
    gsap.to(bottomHeaderRef.current, {
      duration: 1,
      top: "-100%",
    });
    gsap.to(bottomSubHeaderRef.current, {
      duration: 1,
      top: "-100%",
      onComplete: () => {
        gsap.set(bottomHeaderRef.current, { top: "100%" });
        gsap.set(bottomSubHeaderRef.current, { top: "100%" });
        setHeader(selected.curr);
      },
    });
  }

  function enterAnimationTrigger() {
    gsap.to(bottomHeaderRef.current, {
      duration: 1,
      top: "0%",
    });
    gsap.to(bottomSubHeaderRef.current, {
      duration: 1,
      delay: 0.4,
      top: "0%",
      onComplete: () => {
        setEnableClick(true);
      },
    });
  }

  useEffect(() => {
    exitAnimationTrigger();
  }, [selected]);

  useEffect(() => {
    console.log("enter", header);
    enterAnimationTrigger();
  }, [header]);

  return (
    <BottomTextContainer>
      <TextContainer>
        <BottomHeader ref={bottomHeaderRef}>{headerArray[header]}</BottomHeader>
      </TextContainer>
      <TextContainer>
        <BottomSubHeader ref={bottomSubHeaderRef}>
          {subHeaderArray[header]}
        </BottomSubHeader>
      </TextContainer>
    </BottomTextContainer>
  );
};

export default AnimationText;
