import type {ReactElement} from "react";
import {useState} from "react";

import {Hamburger, Bar} from "../../styled-component/hamburgerMneu.style";
import {HeaderContainer, HeaderContent} from "../../styled-component/mainHeader.style";


interface HeaderPropsType {
    counter: number,
}

function Header({counter} : HeaderPropsType) : ReactElement {

    const [openMenu, setOpenMenu] = useState(false);
    const handleClick = () => setOpenMenu(!openMenu);

    return (
        <HeaderContainer>
            <HeaderContent>
                <h3> counter: {counter} </h3>
                <Hamburger onClick={handleClick} clicked={openMenu}>
                    <Bar></Bar>
                    <Bar></Bar>
                    <Bar></Bar>
                </Hamburger>
            </HeaderContent>
        </HeaderContainer>
    );
}

export default Header;
