import styled from "styled-components";
import { screenSizes } from "../../utils";
export const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  width: 100%;
  height: 100%;

  padding: 10rem 0;

  gap: 7rem;

  @media (max-width: ${screenSizes.mobile}) {
    padding: 4.5rem 0;
    gap: 2.5rem;
  }
`;

export const TopContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

  gap: 2rem;

  @media (max-width: ${screenSizes.mobile}) {
    gap: 1.2rem;
  }
`;

export const CenterHeader = styled.div`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 3.5rem;
  line-height: 4.5rem;
  text-align: center;
  letter-spacing: -1px;
  color: #000000;
  opacity: 0;

  @media (max-width: ${screenSizes.mobile}) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

export const CenterSubHeader = styled.div`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.75rem;
  text-align: center;
  width: 60%;
  opacity: 0;
  color: #7a7777;

  @media (max-width: ${screenSizes.mobile}) {
    font-size: 1rem;
    line-height: 1.15;
    width: 75%;
  }
`;

export const BottomContainer = styled.div`
  // height: 60vh;
  width: 100%;
`;

export const HoverDiv = styled.div`
  position: fixed;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff;
  z-index: 10000;
  pointer-events: none;
  mix-blend-mode: difference;
  opacity: 0;

  @media (max-width: ${screenSizes.mobile}) {
    display: none;
  }
`;
