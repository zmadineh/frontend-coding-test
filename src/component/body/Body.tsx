import type { ReactElement } from "react";
import type React from "react";
import { useEffect, useState } from "react";

import { MainContent } from "../../styled-component/mainContent.style";
import { BorderedButton } from "../../styled-component/button.style";

import { counterInitialValue } from "../../data/counterInitialValue.data";

interface BodyPropsType {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

function Body({ counter, setCounter }: BodyPropsType): ReactElement {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (isActive && counter > 0)
      interval = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
    else setIsActive(false);

    return () => clearInterval(interval);
  }, [isActive, counter, setCounter]);

  const startCounter = () => {
    setCounter(counterInitialValue);
    setIsActive(true);
  };

  return (
    <MainContent>
      <BorderedButton onClick={startCounter}> start counter </BorderedButton>
    </MainContent>
  );
}

export default Body;
