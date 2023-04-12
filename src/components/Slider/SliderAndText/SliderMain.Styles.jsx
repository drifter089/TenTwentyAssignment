import styled from "styled-components";
import { screenSizes, colors } from "../../../utils";

export const SliderImage = styled.img`
  opacity: 1;
  width: 30vw;
  height: 75%;
  position: absolute;

  object-fit: cover;

  @media (max-width: ${screenSizes.mobile}) {
    width: 55vw;
    height: 65%;
  }
`;

export const ImagesWrapper = styled.div`
  height: 90vh;

  @media (max-width: ${screenSizes.mobile}) {
    height: 70vh;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 1rem;
`;

export const SliderButtons = styled.button`
  background-color: ${(props) =>
    props.disabled ? colors.blackishGrey : colors.beige600};

  color: ${(props) => (props.disabled ? colors.beige : colors.blackishGrey)};
  opacity: ${(props) => (props.disabled ? "0" : "1")};
  border-radius: 20px;
  height: 40px;
  width: 90px;

  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  border: 2px solid #000000;

  cursor: pointer;

  transition: all 0.4s ease-in-out;

  z-index: 100;
`;
