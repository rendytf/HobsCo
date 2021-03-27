import React, { Component } from 'react'

export class Sidebar extends Component {
    state = {
        openToggle: this.props.openToggle
    }

    // handleToggle = () => {
    //     this.setState({
    //         isOpen: !this.props.isOpen
    //     });
    // };
    
    render() {
        return (
            <div className={this.props.openToggle ? 'hobs-sidebar' : 'hobs-sidebar open'}>
                <div className="hobs-sidebar-header">
                    <h3 className="hobs-sidebar-tittle">Shop Categories</h3>
                </div>

                <nav className="hobs-sidebar-menu">
                    <ul className="menu">
                        <li className="menu-children">
                            <span>
                                <a href="/#">New Arrival</a>
                            </span>
                        </li>
                        <li className="menu-children">
                            <span>
                                <a href="/#">Shoes</a>
                            </span>
                        </li>
                        <li className="menu-children">
                            <span>
                                <a href="/#">Clothings</a>
                            </span>
                        </li>
                        <li className="menu-children">
                            <span>
                                <a href="/#">Womens</a>
                            </span>
                        </li>
                        <li className="menu-children">
                            <span>
                                <a href="/#">Accessories</a>
                            </span>
                        </li>
                        <li className="menu-children">
                            <span>
                                <a href="/#">Brands</a>
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Sidebar
