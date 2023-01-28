import { memo } from "react";
import styled from "styled-components";
import GlobalStyles from "./globalStyles";
import Header from "./component/header/Header";
import Body from "./component/body/Body";

function App() {
  return (
    <>
        <GlobalStyles />
        <Header />
        <Body />
    </>
  );
}

export default memo(App);
