import React from "react";
import styled from "styled-components";


const MainContent = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

function Body() {
    return (
        <MainContent>
            body
        </MainContent>
    );
}

export default Body;
