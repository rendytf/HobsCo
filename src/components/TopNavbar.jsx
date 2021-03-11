import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingBag, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios'
import apiUrl from '../supports/constants/apiUrl'
import Login from '../pages/Login'


export class TopNavbar extends Component {
    state = {
        openToggle: this.props.openToggle,
        isLogin : true,
        loginOpen : false,
        data : null
    }

    componentDidMount(){
        this.getIdUser()
    }

    onLogout = () => {
        if(window.confirm('are you sure want to logout??')){
            localStorage.removeItem('id')
            window.location = '/'
        }
    }

    getIdUser = () => {
        var id = localStorage.getItem('id')
        if(id){
            this.setState({isLogin : false})
            Axios.get(apiUrl + 'users/' + id)
            .then((res) => {
                if(res.data.email){
                    this.setState({data : res.data.email})
                }else {
                    this.setState({data : res.data.phone})
                }
            })
            .catch((err) => {
                console.log(err)
                alert(err.message)
            })
        }else {
            this.setState({isLogin : true})
        }
        // get value di localstorage
        // kalau value ada
        // state isLogin menjadi false => seharusnya true (ada bug upsidedown bolean)
    }

    render() {
        return (
            <div>
                {/* Navbar */}
                <div className="navbar">
                    {/* Menu Bars */}
                    <div className="mr-auto d-md-none p-2">
                        <span onClick={this.props.openToggle}>
                            <FontAwesomeIcon icon={faBars} size="lg" />
                        </span>
                    </div>

                    {/* Site Branding */}
                    <Link to='/'>
                        <span className="hobs-branding text-muted font-weight-bold mr-0 mr-md-2">HOBS</span>
                    </Link>

                    {/* Navbar Menu Items */}
                    <div className="navbar-expand hobs-navbar-menu d-none d-md-block">
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item">
                                <Link to='/' className="nav-link">
                                    <span className="text-uppercase">HOME</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/#" className="nav-link">
                                    <span className="text-uppercase">NEW ARRIVALS</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/#" className="nav-link">
                                    <span className="text-uppercase">SHOES</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to='/clothings' className="nav-link">
                                    <span className="text-uppercase">CLOTHINGS</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/#" className="nav-link">
                                    <span className="text-uppercase">WOMENS</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/#" className="nav-link">
                                    <span className="text-uppercase">ACCESSORIES</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/#" className="nav-link">
                                    <span className="text-uppercase">BRANDS</span>
                                </a>
                            </li>
                        </ul>

                        <Login 
                            loginOpen={this.state.loginOpen} 
                            toggle={() => this.setState({loginOpen : false})}
                        />
                    </div>

                    <ul className="navbar-nav flex-row ml-auto d-md-flex">
                        <li className="nav-item">
                            {
                                this.state.isLogin ?
                                    <Link onClick={() => this.setState({loginOpen : true})} className="hobs-nav-link nav-link p-2">
                                        <span>
                                            <FontAwesomeIcon icon={faUser} size="lg" />
                                        </span>
                                    </Link>
                                :
                                    <span>
                                        <span className="mr-2 d-none d-lg-inline hobs-f12">
                                            {this.state.data ? this.state.data.slice(0,4) + '...' : null}
                                        </span>
                                        <FontAwesomeIcon onClick={this.onLogout} icon={faUser} size="lg" />
                                    </span>
                            }
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="hobs-nav-link nav-link p-2">
                                <span><FontAwesomeIcon icon={faShoppingBag} size="lg" /></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TopNavbar
