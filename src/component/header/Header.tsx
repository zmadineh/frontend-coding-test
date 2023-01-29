import type {ReactElement} from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  width: 100%;
  padding: 10px;
  position: relative;
`;

const HeaderContent = styled.div`
  background-color: #333333;
  font-weight: bold;
  color: #FFFFFF;
  padding: 10px;
  border-bottom: 3px solid #4eb151;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: inherit;
  display: flex;
  align-items: center;
`;

interface HeaderPropsType {
    counter: number,
}

function Header({counter} : HeaderPropsType) : ReactElement {
    return (
        <Container>
            <HeaderContent>
                counter: {counter}
            </HeaderContent>
        </Container>
    );
}

export default Header;
