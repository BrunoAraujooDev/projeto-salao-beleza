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
      <Navbar  expand="md">
        <Brand href="/">
          <img src={logo} alt="Logo do site de barbearia"/>
          </Brand>
        <NavbarToggler onClick={toggle} />
        <SCollapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Item>
              <NavLink tag={Link} to="/">Home</NavLink>
            </Item>
            <Item>
              <NavLink tag={Link} to="/servico">Barbearias & Salão</NavLink>
            </Item>
          </Nav>
        </SCollapse>
      </Navbar>
    </div>
  );
}

export default NavBarComponent;



const Brand = styled(NavbarBrand)`

  flex: 1;

  img {
    max-width: 100px;
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
