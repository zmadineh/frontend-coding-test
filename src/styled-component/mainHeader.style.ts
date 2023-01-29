import styled from "styled-components";
import {devices} from "./devices.style";

import {headerHeight} from "../data/styleConstant.data";

export const HeaderContainer = styled.div`
  height: ${headerHeight}px;
  //width: 100%;
  //padding: 10px;
  position: relative;
`;

export const HeaderContent = styled.div`
  padding: 0 20px;
  border-bottom: 3px solid ${props => props.theme.colors.border};
  overflow: hidden;
  position: sticky;
  top: 0;
  left: 0;
  height: ${headerHeight}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  font-weight: bold;
  font-size: 18px;
  background-color: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.secondary};
  
  @media ${devices.laptop} {
    justify-content: center;
  }
`;
