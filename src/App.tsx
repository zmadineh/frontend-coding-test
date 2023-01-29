import {memo, useState} from "react";
// import styled from "styled-components";
import GlobalStyles from "./globalStyles";
import Header from "./component/header/Header";
import Body from "./component/body/Body";

function App() {
    const [counter, setCounter] = useState(15);

    return (
        <>
            <GlobalStyles />
            <Header counter={counter}/>
            <Body counter={counter} setCounter={setCounter}/>
        </>
    );
}

export default memo(App);
