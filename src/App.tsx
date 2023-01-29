import {memo, useEffect, useState} from "react";
import Header from "./component/header/Header";
import Body from "./component/body/Body";

import GlobalStyles from "./globalStyles";

import {counterInitialValue} from "./data/counterInitialValue.data";

function App() {

    const [counter, setCounter] = useState(counterInitialValue);

    return (
        <>
            <GlobalStyles />
            <Header counter={counter}/>
            <Body counter={counter} setCounter={setCounter}/>
        </>
    );
}

export default memo(App);
