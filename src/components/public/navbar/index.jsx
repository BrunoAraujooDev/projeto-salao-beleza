import React, { useState } from 'react';
import { Link } from "@reach/router";

import logo from "../../../assets/images/logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import styled from 'styled-components';


const NavBarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <NavBarBox  expand="md">
        <Brand tag={Link} to="/">
          <img src={logo} alt="Logo do site de barbearia"/>
          </Brand>
        <NavbarToggler onClick={toggle} />
        <SCollapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Item>
              <NavLink tag={Link} to="/">Home</NavLink>
            </Item>
            <Item>
              <NavLink tag={Link} to="/servico">Barbearias & Salões</NavLink>
            </Item>
          </Nav>
        </SCollapse>
      </NavBarBox>
    </div>
  );
}

export default NavBarComponent;



const NavBarBox = styled(Navbar)`
  background-color: #262626;
  margin-top: 2rem;
  padding: 10px 15px;
  font-weight: bold;
  box-shadow: 0 2px 4px #000;

`;

const Brand = styled(NavbarBrand)`

  flex: 1;

  img {
    max-width: 80px;
  }

`;

const Item = styled(NavItem)`
  a {
    color: #B98E52;
    margin-left: 1rem;
    :hover {
      color: #a06b20;
    }
  }
`;

const SCollapse = styled(Collapse)`
  flex: 0;
`;
