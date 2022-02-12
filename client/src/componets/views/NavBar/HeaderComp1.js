import React from 'react'
import {
  Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavbarText,NavLink,DropdownToggle,DropdownMenu,UncontrolledDropdown,Dropdown,DropdownItem
  } from 'reactstrap';
  import { Link } from "react-router-dom";

  function HeaderComp1() {
    return (
        <div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/category">
      BANANA
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/category">
            수업 관리
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/category">
            회원 관리
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/category">
            설정
          </NavLink>
        </NavItem>
      </Nav>
      <NavbarText>
      <UncontrolledDropdown>
    <DropdownToggle caret nav>
      서유진님
    </DropdownToggle>
    <DropdownMenu
      end
    >
      <DropdownItem header>
        Header
      </DropdownItem>
      <DropdownItem>
        Some Action
      </DropdownItem>
      <DropdownItem text>
        Dropdown Item Text
      </DropdownItem>
      <DropdownItem disabled>
        Action (disabled)
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem>
        Foo Action
      </DropdownItem>
      <DropdownItem>
        Bar Action
      </DropdownItem>
      <DropdownItem>
        Quo Action
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
      </NavbarText>
    </Collapse>
  </Navbar>
</div>
    )
}

export default HeaderComp1