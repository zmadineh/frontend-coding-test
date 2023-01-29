import styled from "styled-components";

interface SidebarPropsType {
  open: boolean;
}

export const Sidebar = styled.div<SidebarPropsType>`
  position: fixed;
  top: 83px;
  left: ${props => (props.open ? 0 : "-100%")};
  width: 100%;
  height: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: ${props => props.theme.colors.main};
  border-right: 3px solid ${props => props.theme.colors.border};
  transition: 0.4s;
  overflow: hidden;
`;
