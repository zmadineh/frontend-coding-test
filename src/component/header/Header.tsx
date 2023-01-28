import React from "react";
import styled from "styled-components";


const Toolbar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  padding: 1rem;
  border: 1px solid #c9f6ee;
  background-color: #d6fff8;
  display: flex;
  align-items: center;
`;

function Header() {
    return (
        <Toolbar>
            toolbar
        </Toolbar>
    );
}

export default Header;
