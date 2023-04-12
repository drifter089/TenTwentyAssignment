import styled from "styled-components";
import { colors } from "../../utils";

const PrimaryButton = styled.button`
  background-color: ${colors.beige};
  color: ${colors.blackishGrey};
  font-size: 1rem;
  border: 1px solid ${colors.blackishGrey};
  padding: 10px 25px;

  &:hover {
    background-color: ${colors.blackishGrey};
    color: ${colors.beige};
  }

  transition: all 0.2s ease-in-out;
`;

export default PrimaryButton;
