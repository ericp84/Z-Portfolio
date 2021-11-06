import React from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown,  DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from'reactstrap';


const MyNavbar = () => {
    return (
        <div>
        <Navbar
    color="dark"
    dark
    expand="md"
    fixed=""
    light
  >
    <NavbarBrand href="/">
      Zaïneb's portfolio
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Présentation
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            Projets
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            Contact
          </NavLink>
        </NavItem>
        <UncontrolledDropdown
          inNavbar
          nav
        >
        </UncontrolledDropdown>
      </Nav>
    </Collapse>
  </Navbar>
        </div>
    );
};

export default MyNavbar;