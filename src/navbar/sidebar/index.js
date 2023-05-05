import React from 'react';
import { CloseIcon, Icon, SidebarBtnWrap, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from './SidebarElements';

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Películas
          </SidebarLink>
          <SidebarLink to="/discover/tv" onClick={toggle}>
            Series
          </SidebarLink>
          <SidebarLink to="/genre/movie/list" onClick={toggle}>
            Géneros
          </SidebarLink>
          <SidebarLink to="/movie/upcoming" onClick={toggle}>
            Upcoming
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap></SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
