import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar color='light'>
                    <NavbarBrand href="/">Hobs</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Products</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Brands</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Chart</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Header
