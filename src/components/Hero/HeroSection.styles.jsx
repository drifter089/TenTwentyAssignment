import styled from "styled-components";

export const OverLayContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
  width: 80%;
  height: 100%;
  padding-left: 8vw;
`;

export const HeroWrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 5;
  justify-content: center;
  gap: 1rem;
`;
export const PreCenterText = styled.div`
  font-size: 1rem;
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: #eef4f9;
`;

export const BottomContainer = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
  align-items: center;

  gap: 1rem;
`;

export const PreviewImageWrapper = styled.div`
  height: 65%;
  width: 65%;
  position: relative;

  overflow: hidden;
`;

export const ButtonContainer = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;

  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

export const CurrentPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  gap: 1rem;
`;

export const HorizontalLine = styled.div`
  height: 2px;
  width: 60px;
  align-self: center;
  justify-self: center;
  background-color: #eef4f9;
`;

export const CenteredText = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;

  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  font-size: 1rem;
  color: #eef4f9;
  background-color: rgba(0, 0, 0, 0.3);
`;
