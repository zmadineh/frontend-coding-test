import styled from "styled-components";
import {devices} from "./devices.style";

interface HamburgerPropsType {
    clicked: boolean
}

export const Bar = styled.span`
    display: block;
    width: 20px;
    height: 2px;
    margin: 4px 0;
    background-color: #ffffff;
    border-radius: 20%;
`;

export const Hamburger = styled.div<HamburgerPropsType>`
    display: block;
    cursor: pointer;

    & ${Bar}:nth-child(2) {
      opacity: ${(props) => (props.clicked ? 0 : 1)};
    }

    & ${Bar}:nth-child(1) {
       transform: ${(props) => (props.clicked && `translateY(5px) rotate(135deg)`)};
       transition-duration: ${(props) => (props.clicked && `0.4s`)};
    }

    & ${Bar}:nth-child(3) {
      transform: ${(props) => (props.clicked && `translateY(-7px) rotate(45deg)`)};
      transition-duration: ${(props) => (props.clicked && `0.4s`)};
    }

  @media ${devices.laptop} {
    display: none;
  }
`;
