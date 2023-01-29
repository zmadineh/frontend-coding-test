import type {ReactElement} from "react";
import type React from "react";
import {useEffect, useState} from "react";

import {MainContent} from "../../styled-component/mainContent.style";
import {Button} from "../../styled-component/button.style";


interface BodyPropsType {
    counter: number,
    setCounter: React.Dispatch<React.SetStateAction<number>>,
}

function Body ({counter, setCounter} : BodyPropsType) : ReactElement {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timer;
        
        if(isActive && counter > 0)
            interval = setInterval(() => {
                setCounter(counter - 1);
            }, 1000);
        else setIsActive(false)

        return () => clearInterval(interval);
    }, [isActive, counter, setCounter]);
    
    const startCounter = () => {
        setCounter(15)
        setIsActive(true)
    }

    return (
        <MainContent>
            <Button onClick={startCounter}> start counter </Button>
        </MainContent>
    );
}

export default Body;
