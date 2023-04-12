import React, { useRef } from "react";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import {
  RelativeContainer,
  AnimatedLineHorizontal,
  AnimatedLineVertical,
} from "./AnimatedBorder.styles";

const AnimatedBorder = ({ nextClickHandler, selected }) => {
  const runOnce = useRef(false);

  const animatedLineRef = React.useRef(null);
  const animatedLineRef2 = React.useRef(null);
  const animatedLineRef3 = React.useRef(null);
  const animatedLineRef4 = React.useRef(null);

  const progressTimeline = useMemo(() => {
    const progressTimeline = gsap.timeline({
      repeat: -1,
      ease: "power4.out",
    });

    return progressTimeline;
  }, []);

  useLayoutEffect(() => {
    if (!runOnce.current) {
      runOnce.current = true;

      progressTimeline
        .set(animatedLineRef.current, {
          opacity: 1,
        })
        .to(animatedLineRef.current, {
          duration: 2.5,
          width: "100%",
        })
        .set(animatedLineRef2.current, {
          opacity: 1,
        })
        .to(animatedLineRef2.current, {
          duration: 2.5,
          height: "100%",
        })
        .set(animatedLineRef3.current, {
          opacity: 1,
        })
        .to(animatedLineRef3.current, {
          duration: 2.5,
          width: "100%",
        })
        .set(animatedLineRef4.current, {
          opacity: 1,
        })
        .to(animatedLineRef4.current, {
          duration: 2.5,
          height: "100%",
          onComplete: () => {
            nextClickHandler();
          },
        });
    }
  }, []);

  useEffect(() => {
    progressTimeline.restart();
  }, [selected]);

  return (
    <>
      <RelativeContainer>
        <AnimatedLineHorizontal ref={animatedLineRef} />
        <AnimatedLineVertical
          ref={animatedLineRef2}
          style={{
            right: "0",
          }}
        />
        <AnimatedLineHorizontal
          ref={animatedLineRef3}
          style={{
            right: "0",
            bottom: "0",
          }}
        />
        <AnimatedLineVertical
          ref={animatedLineRef4}
          style={{
            bottom: "0",
          }}
        />
      </RelativeContainer>
    </>
  );
};

export default AnimatedBorder;
