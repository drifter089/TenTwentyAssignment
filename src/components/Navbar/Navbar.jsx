import React from "react";
import PrimaryButton from "../GlobalComponents/Buttons";
import useWindowDimensions from "../../custom-hooks/use-window-dimesions";
import {
  NavLink,
  NavLinksWrapper,
  NavbarContainer,
  NavbarWrapper,
} from "./Navbar.styles";

import ToggleMenu from "./ToggleMenu";

const NavLinksContainer = (props) => {
  if (props.isMobile) {
    return <ToggleMenu {...props} />;
  } else {
    return <NavLinks />;
  }
};

const NavLinks = (props) => {
  return (
    <NavLinksWrapper>
      <NavLink href="#">About</NavLink>
      <NavLink href="#">News</NavLink>
      <NavLink href="#">Services</NavLink>
      <NavLink href="#">Our Team</NavLink>
      <NavLink href="#">Make Enquiry</NavLink>
    </NavLinksWrapper>
  );
};

const ContactButton = (props) => {
  return <PrimaryButton>Contact Us →</PrimaryButton>;
};

const Navbar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { _, width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavLinksContainer
          isMobile={isMobile}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <ContactButton />
      </NavbarContainer>
      {isOpen && isMobile && <NavLinks />}
    </NavbarWrapper>
  );
};

export default Navbar;
