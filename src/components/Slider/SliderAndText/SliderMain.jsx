import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpg";
import img5 from "../../../assets/img5.jpg";
import { useMemo } from "react";
import gsap from "gsap";
import AnimationText from "./AnimationText";
import {
  ImageContainer,
  SliderImage,
  SliderButtons,
  ImagesWrapper,
  ButtonsWrapper,
} from "./SliderMain.Styles";
import useWindowDimensions from "../../../custom-hooks/use-window-dimesions";

const MobilePositionArr = ["-112.5vw", "-45vw", "22.5vw", "90vw", "157.5vw"];
const DesktopPositionArr = ["-35vw", "0vw", "35vw", "70vw", "105vw"];

const MobileHeightArr = ["6vh", "3vh", "0vh", "3vh", "6vh"];
const DesktopHeightArr = ["15vh", "5vh", "0vh", "5vh", "15vh"];

const SliderMain = React.forwardRef(({}, ref) => {
  const splideRef = useRef(null);

  const [selected, setSelected] = useState({
    curr: 2,
    prev: 1,
    left: null,
  });

  const [enableClick, setEnableClick] = useState(true);

  const ImageRef1 = useRef(null);
  const ImageRef2 = useRef(null);
  const ImageRef3 = useRef(null);
  const ImageRef4 = useRef(null);
  const ImageRef5 = useRef(null);

  const ImageRefArray = useMemo(
    () => [ImageRef1, ImageRef2, ImageRef3, ImageRef4, ImageRef5],
    []
  );

  const { _, width } = useWindowDimensions();

  const isMobile = width < 768;

  const leftPositionArr = isMobile ? MobilePositionArr : DesktopPositionArr;

  const rotationArr = [-20, -10, 0, 10, 20];
  const heightArr = isMobile ? MobileHeightArr : DesktopHeightArr;

  function getNextIndex(index) {
    if (index === ImageRefArray.length - 1) {
      return 0;
    } else {
      return index + 1;
    }
  }

  function getPreviousIndex(index) {
    if (index === 0) {
      return ImageRefArray.length - 1;
    } else {
      return index - 1;
    }
  }

  function imageTransition(ref, index) {
    gsap.to(ref.current, {
      duration: 0.8,
      left: leftPositionArr[index],
      y: heightArr[index],
      rotation: rotationArr[index],
    });
  }

  function imageSetter(ref, index) {
    gsap.set(ref.current, {
      left: leftPositionArr[index],
      y: heightArr[index],
      rotation: rotationArr[index],
    });
  }

  function animateRightClick(index) {
    const nextIndex = getNextIndex(index);
    const nextnextIndex = getNextIndex(nextIndex);
    const previousIndex = getPreviousIndex(index);
    const previouspreviousIndex = getPreviousIndex(previousIndex);

    imageSetter(ImageRefArray[nextnextIndex], 0);
    imageTransition(ImageRefArray[nextIndex], 4);
    imageTransition(ImageRefArray[index], 3);
    imageTransition(ImageRefArray[previousIndex], 2);
    imageTransition(ImageRefArray[previouspreviousIndex], 1);
  }

  function animateLeftClick(index) {
    const nextIndex = getNextIndex(index);
    const nextnextIndex = getNextIndex(nextIndex);
    const previousIndex = getPreviousIndex(index);
    const previouspreviousIndex = getPreviousIndex(previousIndex);

    imageSetter(ImageRefArray[previouspreviousIndex], 4);
    imageTransition(ImageRefArray[previousIndex], 0);
    imageTransition(ImageRefArray[index], 1);
    imageTransition(ImageRefArray[nextIndex], 2);
    imageTransition(ImageRefArray[nextnextIndex], 3);
  }

  useEffect(() => {
    if (selected.left !== null) {
      if (selected.left) {
        animateLeftClick(selected.prev);
      } else {
        animateRightClick(selected.prev);
      }
    }
  }, [selected]);

  useEffect(() => {
    ImageRefArray.forEach((ref, index) => {
      imageSetter(ref, index);
    });
  }, []);

  function rightClickHandler() {
    setEnableClick(false);
    if (enableClick) {
      setSelected((prev) => {
        return {
          curr: getPreviousIndex(prev.curr),
          prev: prev.curr,
          left: false,
        };
      });
    }
  }
  function leftClickHandler() {
    setEnableClick(false);
    if (enableClick) {
      setSelected((prev) => {
        return {
          curr: getNextIndex(prev.curr),
          prev: prev.curr,
          left: true,
        };
      });
    }
  }

  function handleImageMouseEnter() {
    gsap.to(ref.current, {
      duration: 0.3,
      opacity: 1,
    });
  }

  function handleImageMouseOut() {
    gsap.to(ref.current, {
      duration: 0.3,
      opacity: 0,
    });
  }
  return (
    <ImageContainer>
      <AnimationText selected={selected} setEnableClick={setEnableClick} />
      <ImagesWrapper>
        <SliderImage
          src={img1}
          ref={ImageRef1}
          onMouseEnter={handleImageMouseEnter}
          onMouseLeave={handleImageMouseOut}
        />
        <SliderImage
          src={img2}
          ref={ImageRef2}
          onMouseEnter={handleImageMouseEnter}
          onMouseLeave={handleImageMouseOut}
        />
        <SliderImage
          src={img3}
          ref={ImageRef3}
          onMouseEnter={handleImageMouseEnter}
          onMouseLeave={handleImageMouseOut}
        />
        <SliderImage
          src={img4}
          ref={ImageRef4}
          onMouseEnter={handleImageMouseEnter}
          onMouseLeave={handleImageMouseOut}
        />
        <SliderImage
          src={img5}
          ref={ImageRef5}
          onMouseEnter={handleImageMouseEnter}
          onMouseLeave={handleImageMouseOut}
        />
      </ImagesWrapper>
      <ButtonsWrapper>
        <SliderButtons disabled={!enableClick} onClick={rightClickHandler}>
          left
        </SliderButtons>
        <SliderButtons disabled={!enableClick} onClick={leftClickHandler}>
          right
        </SliderButtons>
      </ButtonsWrapper>
    </ImageContainer>
  );
});

export default SliderMain;
