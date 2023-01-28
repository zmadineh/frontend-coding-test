import { memo } from "react";
import styled from "styled-components";
import GlobalStyles from "./globalStyles";
import Header from "./component/header/Header";
import Body from "./component/body/Body";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 95px;
`;

function App() {
  return (
    <>
        <GlobalStyles />
        <Header />
        <HeaderWrapper />
        <Body />
    </>
  );
}

export default memo(App);
