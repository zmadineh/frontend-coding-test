import type {ReactElement} from "react";
import type React from "react";
import {useEffect, useState} from "react";
import styled from "styled-components";

const MainContent = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background: #ffffff;
  color: #333333;
  font-size: 1rem;
  margin: 10px;
  padding: 10px 15px;
  border: 2px solid #4eb151;
  border-radius: 5px;    
`;

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

        return () => {
            clearInterval(interval);
        };
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
