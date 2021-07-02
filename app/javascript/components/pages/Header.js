import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route,
  } = props;
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Apartment App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/apartmentindex">Apartments</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/apartmentnew">List New Apartments</NavLink>
            </NavItem>

            {logged_in && (
              <NavItem>
                <NavLink href={sign_out_route}>Sign Out</NavLink>
              </NavItem>
            )}
            {!logged_in && (
              <NavItem>
                <NavLink href={sign_in_route}>Sign In</NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
