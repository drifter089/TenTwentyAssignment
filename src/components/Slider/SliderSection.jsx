import React, { useEffect, useLayoutEffect, useRef } from "react";
import SliderMain from "./SliderAndText/SliderMain";
import {
  ParentContainer,
  TopContainer,
  CenterHeader,
  CenterSubHeader,
  BottomContainer,
  HoverDiv,
} from "./SliderSection.Styles";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SliderSection = () => {
  const once = useRef(false);
  const hoverPointerRef = useRef();
  const headerRef = useRef();
  const subHeaderRef = useRef();
  const parentRef = useRef();

  function handelMouseMove(e) {
    hoverPointerRef.current.style.left = e.clientX - 50 + "px";
    hoverPointerRef.current.style.top = e.clientY - 50 + "px";
  }

  const mtTimeLine = gsap.timeline({ paused: true });

  function enterAnimation() {
    gsap.to(headerRef.current, {
      delay: 0.2,
      duration: 0.7,
      opacity: 1,
      ease: "power2.out",
    });
    gsap.to(subHeaderRef.current, {
      delay: 0.4,
      duration: 0.9,
      opacity: 1,
      ease: "power2.out",
    });

    gsap.from(headerRef.current, {
      delay: 0.2,
      duration: 0.5,
      x: -100,
    });
    gsap.from(subHeaderRef.current, {
      delay: 0.4,
      duration: 0.7,
      x: -100,
    });
  }

  function setOpacityZero() {
    gsap.to(headerRef.current, {
      duration: 0.2,
      opacity: 0,
    });
    gsap.to(subHeaderRef.current, {
      duration: 0.2,
      opacity: 0,
    });
  }

  useLayoutEffect(() => {
    if (!once.current) {
      once.current = true;
      ScrollTrigger.create({
        trigger: parentRef.current,
        start: "12% 90%",
        end: "50% 50%",
        scrub: 2,
        // markers: true,
        onEnter: () => {
          enterAnimation();
        },
        onLeaveBack: () => {
          setOpacityZero();
        },
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handelMouseMove);

    return () => {
      window.removeEventListener("mousemove", handelMouseMove);
    };
  }, []);

  return (
    <ParentContainer ref={parentRef}>
      <HoverDiv ref={hoverPointerRef}></HoverDiv>
      <TopContainer>
        <CenterHeader ref={headerRef}>Quality Products</CenterHeader>
        <CenterSubHeader ref={subHeaderRef}>
          Lorem dsvsdv dfbf fdgbb Deserunt esse quis proident consequat officia
          proident commodo mollit fugiat enim esse sint. Est non labore
          reprehenderit laboris dolore et id proident anim. Laborum ad nostrud
          dolore est nostrud.
        </CenterSubHeader>
      </TopContainer>
      <BottomContainer>
        <SliderMain ref={hoverPointerRef} />
      </BottomContainer>
    </ParentContainer>
  );
};

export default SliderSection;
