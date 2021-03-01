import React, { Component } from 'react'

export class Register extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row no-gutter">
                    <div className="d-none d-md-flex col-md-4 col-lg-6 hobs-bg-image"></div>
                    <div className="col-md-8 col-lg-6">
                        <div className="hobs-login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9 col-lg-8 mx-auto">
                                        <h2 className="hobs-login-heading text-center mb-4">Welcome To Hobs</h2>
                                        <form>
                                            <div className="form-label-group">
                                                {/* <label htmlFor="emlInput">Email</label> */}
                                                <input type="email" id="emlInput" className="form-control hobs-f16" placeholder="Email address" />
                                            </div>

                                            <div className="form-label-group">
                                                {/* <label htmlFor="passInput">Password</label> */}
                                                <input type="password" id="passInput" className="form-control hobs-f16" placeholder="Password" />
                                            </div>

                                            <button className="hobs-btn-login hobs-f16 btn btn-lg btn-primary btn-block text-uppercase">Sign in</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
