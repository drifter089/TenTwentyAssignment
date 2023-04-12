import styled from "styled-components";
import { colors, screenSizes } from "../../utils";

export const NavbarWrapper = styled.div`
  position: absolute;
  background-color: ${colors.white};
  height: 80px;
  width: 98vw;
  right: 1vw;
  top: 1vw;

  z-index: 1000;

  @media (max-width: ${screenSizes.tablet}) {
    width: 100vw;
    top: 0;
    right: 0;
  }
`;

export const NavbarContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  @media (max-width: ${screenSizes.tablet}) {
    flex-direction: row-reverse;
  }
`;

export const NavLink = styled.a`
  color: ${colors.blackishGrey};
  font-size: 1rem;
  text-decoration: none;
  padding: 5px;

  transition: all 0.3s ease-in-out;

  &:hover {
    text-decoration: underline;
    background-color: ${colors.beige};
    border-radius: 5px;
  }

  @media (max-width: ${screenSizes.tablet}) {
    width: 96%;
    background-color: ${colors.beige};
    text-align: center;
    padding: 14px 0px;
  }
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: ${screenSizes.tablet}) {
    width: 100%;
    position: absolute;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    background-color: ${colors.white};
    padding: 60px 0px;
    gap: 4px;
  }
`;
