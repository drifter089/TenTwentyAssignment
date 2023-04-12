import styled from "styled-components";

export const BackgroundContainer = styled.div`
  position: absolute;
  z-index: -3;
  opacity: 1;
  width: 100%;
  height: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;
export const ImageUnderlay = styled.img`
  position: absolute;
  opacity: 1;

  width: ${(props) => (props.preview ? "8rem" : "100vw")};
  height: ${(props) => (props.preview ? "8rem" : "100vh")};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
`;
