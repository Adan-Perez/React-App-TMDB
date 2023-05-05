import React from 'react';
import { FaBars } from 'react-icons/fa';
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements';

export const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"> Inicio </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/"> Películas</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/discover/tv">Series</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/genre/movie/list">Géneros</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/movie/upcoming">Upcoming</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Iniciar sesión</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
