import React, { useState, useLayoutEffect } from "react";
import { useMemo } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useCallback } from "react";
import { useEffect } from "react";

import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpg";
import { BackgroundContainer, ImageUnderlay } from "./BackGroundBox.styles";

const BackGroundBox = ({ selected, preview }) => {
  const ImageRef1 = React.createRef();
  const ImageRef2 = React.createRef();
  const ImageRef3 = React.createRef();
  const ImageRef4 = React.createRef();

  const ImageInsideRef1 = React.createRef();
  const ImageInsideRef2 = React.createRef();
  const ImageInsideRef3 = React.createRef();
  const ImageInsideRef4 = React.createRef();

  const ImageRefArray = useMemo(() => {
    return [ImageRef1, ImageRef2, ImageRef3, ImageRef4];
  }, []);

  const ImageInsideRefArray = useMemo(() => {
    return [ImageInsideRef1, ImageInsideRef2, ImageInsideRef3, ImageInsideRef4];
  }, []);

  const ImageComponents = useMemo(() => {
    return (
      <>
        <BackgroundContainer ref={ImageRef1} key={1}>
          <ImageUnderlay src={img1} ref={ImageInsideRef1} preview={preview} />
        </BackgroundContainer>
        <BackgroundContainer ref={ImageRef2} key={2}>
          <ImageUnderlay src={img2} ref={ImageInsideRef2} preview={preview} />
        </BackgroundContainer>
        <BackgroundContainer ref={ImageRef3} key={3}>
          <ImageUnderlay src={img3} ref={ImageInsideRef3} preview={preview} />
        </BackgroundContainer>
        <BackgroundContainer ref={ImageRef4} key={4}>
          <ImageUnderlay src={img4} ref={ImageInsideRef4} preview={preview} />
        </BackgroundContainer>
      </>
    );
  }, []);

  const animatorFunction = useCallback(function (selected, previous) {
    gsap.to(ImageRefArray[selected].current, {
      duration: 2,
      opacity: 1,
      height: "100%",
      ease: "power4.out",
      onStart: () => {
        ImageRefArray[selected].current.style.zIndex = -1;
      },
      onComplete: () => {
        ImageRefArray[selected].current.style.zIndex = -2;
        ImageRefArray[previous].current.style.zIndex = -3;
        ImageRefArray[previous].current.style.height = "0%";
      },
    });

    gsap.to(ImageInsideRefArray[selected].current, {
      duration: 2,
      scale: 1.3,
      ease: "power4.out",
      onComplete: () => {
        gsap.set(ImageInsideRefArray[previous].current, {
          scale: 1,
        });
      },
    });
  });

  useEffect(() => {
    let previousTemp = selected - 1;
    if (selected === 0) {
      previousTemp = ImageRefArray.length - 1;
    }
    animatorFunction(selected, previousTemp);
  }, [selected]);

  return <>{ImageComponents}</>;
};

export default BackGroundBox;
