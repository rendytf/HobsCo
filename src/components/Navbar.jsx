import React, { Component } from 'react'
import {
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export class HobsNavbar extends Component {
    state = {
        openToggle : false
    }

    render() {
        return (
            <div>
                <div className="hobs-navbar">
                    {/* Site Branding */}
                    <div className="hobs-branding hobs-secondary mr-auto">Hobs</div>

                    {/* Nav Items */}
                    <div className="d-none d-md-block">
                        <Nav className="hobs-secondary">
                            <NavItem>
                                <NavLink>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Clothings</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Brands</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Cart</NavLink>
                            </NavItem>
                        </Nav>
                    </div>

                    <div className="d-md-none">
                        {
                            this.state.openToggle ?
                            <span className="hobs-secondary" onClick={() => this.setState({openToggle : false})}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                            :
                            <span className="hobs-secondary" onClick={() => this.setState({openToggle : true})}>
                                <FontAwesomeIcon icon={faBars} />
                            </span>
                        }
                    </div>
                </div>

                {
                    this.state.openToggle ?
                        <div>
                            <Nav className="hobs-secondary flex-column d-md-none">
                                <NavItem>
                                    <NavLink>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>Clothings</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>Brands</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>Cart</NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    :
                    null
                    
                }
            </div>
        )
    }
}

export default HobsNavbar
