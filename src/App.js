import React, { Component } from 'react'
import './supports/Hobs.css'
import './supports/Utils.css'
import  { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import TopNavbar from './components/TopNavbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import Clothings from './pages/Clothings'
import Brands from './pages/Brands'
import Cart from './pages/Cart'
import Register from './pages/Register'
import CreatePassword from './pages/CreatePassword'
import DetailProduct from './pages/DetailProduct'

export class App extends Component {
  state = {
    openToggle : true
  }

  toggleMenu = () => {  
    var menu = this.state.openToggle
    if(menu) {
      this.setState({openToggle : false})
    }else {
      this.setState({openToggle : true})
    }
  }

  render(){
    return (
      <BrowserRouter>
        <Sidebar 
          openToggle={this.state.openToggle} 
        />
        <div className={this.state.openToggle ? 'hobs-content' : 'hobs-content open'}>
          <header className="hobs-navbar">
            <TopNavbar  openToggle={this.toggleMenu} />
          </header>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/clothings" component={Clothings} />
            <Route path="/brands" component={Brands} />
            <Route path="/carts" component={Cart} />
            <Route path="/register" component={Register} />
            <Route path="/create-password" component={CreatePassword} />
            <Route path="/detail-product/:bebas" component={DetailProduct} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
