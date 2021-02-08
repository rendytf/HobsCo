import React, { Component } from 'react'
import Navbar from './components/Navbar'
import './supports/Hobs.css'
import './supports/Utils.css'
import  { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Clothings from './pages/Clothings'
import Brands from './pages/Brands'
import Cart from './pages/Cart'

export class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            
          </div>
          <header>
            <Navbar />
          </header>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/clothings' component={Clothings} />
            <Route path='/brands' component={Brands} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
