import type {ReactElement} from "react";
import {useState} from "react";

import {Hamburger, Bar} from "../../styled-component/hamburgerMneu.style";
import {HeaderContainer, HeaderContent} from "../../styled-component/mainHeader.style";
import {Sidebar, SidebarList} from "../../styled-component/sidebarMenu.style";


interface HeaderPropsType {
    counter: number,
}

function Header({counter} : HeaderPropsType) : ReactElement {

    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuClick = () => setOpenMenu(!openMenu);

    return (
        <HeaderContainer>
            <HeaderContent>
                <Hamburger onClick={handleMenuClick} clicked={openMenu}>
                    <Bar></Bar>
                    <Bar></Bar>
                    <Bar></Bar>
                </Hamburger>
                <h3> counter : {counter} </h3>
                <Sidebar open={openMenu}>
                    <SidebarList>
                        <li>first</li>
                        <li>second</li>
                    </SidebarList>
                </Sidebar>
            </HeaderContent>
        </HeaderContainer>
    );
}

export default Header;
