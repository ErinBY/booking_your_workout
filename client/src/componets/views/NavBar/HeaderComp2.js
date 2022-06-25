import React from 'react'
import {
  Nav,NavItem,NavLink,NavbarBrand,Navbar,NavbarToggler,Collapse
  } from 'reactstrap';
  import { Link } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';

  function HeaderComp2() {
    return (
      <Navbar expand="md" light>
    <NavbarBrand href={process.env.PUBLIC_URL + '/category'}>
      설정
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto m-auto"
        navbar
      >
        <NavItem>
          <NavLink href={process.env.PUBLIC_URL + '/category'}>
            수업 카테고리
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={process.env.PUBLIC_URL + '/membership'}>
            이용권 관리
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={process.env.PUBLIC_URL + '/instructor'}>
            강사 관리
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
    )
}

export default HeaderComp2