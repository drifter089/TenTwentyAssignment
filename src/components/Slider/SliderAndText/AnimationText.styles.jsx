import styled from "styled-components";
import { screenSizes, colors } from "../../../utils";

export const BottomTextContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 100%;
  height: 30%;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const BottomHeader = styled.div`
  position: relative;
  top: 50%;

  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 3.5rem;
  /* or 167% */

  text-align: center;
  letter-spacing: -1px;

  color: #000000;

  @media (max-width: ${screenSizes.mobile}) {
    font-size: 1.8rem;
    line-height: 1.15;
  }
`;

export const BottomSubHeader = styled.div`
  position: relative;
  top: 100%;

  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.75rem;
  text-align: center;
  text-align: center;
  color: #7a7777;

  @media (max-width: ${screenSizes.mobile}) {
    font-size: 1rem;
    line-height: 1.15;
  }
`;
