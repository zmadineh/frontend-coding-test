import { memo, useEffect, useState } from "react";
import Header from "./component/header/Header";
import Body from "./component/body/Body";

import GlobalStyles from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/theme";

import { counterInitialValue } from "./data/counterInitialValue.data";

function App() {
  const [counter, setCounter] = useState(counterInitialValue);
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    // Add listener to update styles
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", e => setMode(e.matches ? "dark" : "light"));

    // Setup dark/light mode for the first time
    setMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {
          return;
        });
  }, []);

  const changeMode = (mode: string) => {
    if (mode === "system")
      setMode(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    else if (mode === "light" || mode === "dark") setMode(mode);
  };

  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Header counter={counter} changeMode={changeMode} />
        <Body counter={counter} setCounter={setCounter} />
      </>
    </ThemeProvider>
  );
}

export default memo(App);
