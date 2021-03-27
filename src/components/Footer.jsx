import React from 'react'

function Footer () {
    return(
        <footer className="hobs-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3">
                        <div className="position-relative text-white mb-100">
                            <div className="hobs-footer-heading mb-4">
                                <h5>Get In Touch With Us</h5>
                            </div>
                            <p>Phone: 00 33 169 7720</p>
                            <ul className="list-unstyled">
                                <li>
                                    <span>Monday-Friday:</span>
                                    "9.00 am - 8.00 pm"
                                </li>
                                <li>
                                    <span>Saturday:</span>
                                    "10.00 am - 6.00 pm"
                                </li>
                            </ul>
                            <p>support@hobs.com</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md col-lg-4 col-xl-2">
                        <div className="position-relative text-white mb-100">
                            <div className="hobs-footer-heading mb-4">
                                <h5>About Us</h5>
                            </div>
                            <ul className="list-unstyled">
                                <li className="mb-2">Careers</li>
                                <li className="mb-2">About Hobs</li>
                                <li className="mb-2">Out Story</li>
                                <li className="mb-2">Services</li>
                                <li className="mb-2">Our Blog</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md col-lg-4 col-xl-2">
                        <div className="position-relative text-white mb-100">
                            <div className="hobs-footer-heading mb-4">
                                <h5>Account</h5>
                            </div>
                            <ul className="list-unstyled">
                                <li className="mb-2">Product Support</li>
                                <li className="mb-2">Terms & Conditions</li>
                                <li className="mb-2">Help</li>
                                <li className="mb-2">Payment Method</li>
                                <li className="mb-2">Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-2">
                        <div className="position-relative text-white mb-100">
                            <div className="hobs-footer-heading mb-4">
                                <h5>Support</h5>
                            </div>
                            <ul className="list-unstyled">
                                <li className="mb-2">Payment Method</li>
                                <li className="mb-2">Help</li>
                                <li className="mb-2">Product Support</li>
                                <li className="mb-2">Terms & Conditions</li>
                                <li className="mb-2">Privacy Policy</li>
                                <li className="mb-2">Affiliate Program</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 col-lg-8 col-xl-3">
                        <div className="position-relative text-white mb-100">
                            <div className="hobs-footer-heading mb-4">
                                <h5>Join Our Mailing List</h5>
                            </div>
                            <form>
                                <input type="text" className="form-control" placeholder="Your Email Address" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hobs-footer-bottom"></div>
        </footer>
    )
}

export default Footer