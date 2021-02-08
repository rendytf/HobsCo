import React, { Component } from 'react'
import './../supports/Hobs.css'

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="hobs-bg-secondary hobs-jumbotron p-5">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-md-5 text-center text-md-left">
                                <h1 className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                                <button className="btn btn-info mt-3">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage
