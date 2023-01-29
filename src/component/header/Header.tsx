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

    return (
        <HeaderContainer>
            <HeaderContent>
                <Hamburger onClick={() => setOpenMenu(!openMenu)} clicked={openMenu}>
                    <Bar></Bar>
                    <Bar></Bar>
                    <Bar></Bar>
                </Hamburger>
                <h3> Counter : {counter} </h3>
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
