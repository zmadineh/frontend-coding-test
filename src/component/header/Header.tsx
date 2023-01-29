import type { ReactElement } from "react";
import { useState } from "react";

import { Hamburger, Bar } from "../../styled-component/hamburgerMneu.style";
import {
  HeaderContainer,
  HeaderContent,
} from "../../styled-component/mainHeader.style";
import { Sidebar } from "../../styled-component/sidebarMenu.style";
import {
  BorderLessButton,
  UnderLinedButton,
} from "../../styled-component/button.style";
import { ColumnList, RowList } from "../../styled-component/list.style";
import { DesktopNav, MobileNav } from "../../styled-component/nav.style";

interface HeaderPropsType {
  counter: number;
  changeMode: (mode: string) => void;
}

function Header({ counter, changeMode }: HeaderPropsType): ReactElement {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <DesktopNav>
          <RowList>
            <li>
              <UnderLinedButton onClick={() => changeMode("light")}>
                Light
              </UnderLinedButton>
            </li>
            <li>
              <UnderLinedButton onClick={() => changeMode("dark")}>
                Dark
              </UnderLinedButton>
            </li>
            <li>
              <UnderLinedButton onClick={() => changeMode("system")}>
                System
              </UnderLinedButton>
            </li>
          </RowList>
        </DesktopNav>

        <MobileNav>
          <Hamburger onClick={() => setOpenMenu(!openMenu)} clicked={openMenu}>
            <Bar></Bar>
            <Bar></Bar>
            <Bar></Bar>
          </Hamburger>

          <Sidebar open={openMenu}>
            <ColumnList>
              <li>
                <BorderLessButton onClick={() => changeMode("light")}>
                  Light
                </BorderLessButton>
              </li>
              <li>
                <BorderLessButton onClick={() => changeMode("dark")}>
                  Dark
                </BorderLessButton>
              </li>
              <li>
                <BorderLessButton onClick={() => changeMode("system")}>
                  System
                </BorderLessButton>
              </li>
            </ColumnList>
          </Sidebar>
        </MobileNav>

        <h3> Counter : {counter} </h3>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
