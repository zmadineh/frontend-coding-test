import styled from "styled-components";
import { devices } from "./devices.style";

export const DesktopNav = styled.nav`
  display: none;

  @media ${devices.laptop} {
    display: flex;
  }
`;

export const MobileNav = styled.nav`
  display: flex;

  @media ${devices.laptop} {
    display: none;
  }
`;
