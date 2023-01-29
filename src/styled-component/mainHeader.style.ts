import styled from "styled-components";
import {devices} from "./devices.style";

export const HeaderContainer = styled.div`
  height: 80px;
  //width: 100%;
  //padding: 10px;
  position: relative;
`;

export const HeaderContent = styled.div`
  padding: 10px 20px;
  border-bottom: 3px solid #4eb151;
  overflow: hidden;
  position: sticky;
  top: 0;
  left: 0;
  //width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  font-weight: bold;
  font-size: 20px;
  background-color: #333333;
  color: #FFFFFF;
  
  @media ${devices.laptop} {
    justify-content: center;
  }
`;
