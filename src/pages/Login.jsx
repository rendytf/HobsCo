import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import apiUrl from '../supports/constants/apiUrl';
import emailValidator from '../supports/functions/emailValidator';
import phoneNumberValidator from '../supports/functions/phoneNumberValidator';

export class Login extends Component {
    state = {
        loginOpen : this.props.loginOpen,
        errorState : null
    }

    onSubmitBtn = () => {
        const data = this.refs.data.value
        const pass = this.refs.password.value
        if(data && pass){
            if(Number(data[0]) >= 0){
                if(phoneNumberValidator(data) === true){
                    // login
                    const phoneQuery = 'phone=' + data + '&password=' + pass
                    this.userLogin(phoneQuery)
                }else {
                    this.setState({errorState : phoneNumberValidator(data)})
                }
            }else {
                if(emailValidator(data)){
                    // login
                    const emailQuery = 'email=' + data + '&password=' + pass
                    this.userLogin(emailQuery)
                }else {
                    this.setState({errorState : 'Email or Password not correct'})
                }
            }
        }else {
            this.setState({errorState : "Form must be filled"})
        }
    }

    userLogin = (data) => {
        axios.get(apiUrl + 'users?' + data)
        .then((res) => {
            if(res.data.length > 0){
                // data ada
                alert("Login Success")
                localStorage.setItem('id',res.data[0].id)
                window.location = '/'
            }else {
                // error
                this.setState({errorState : "Email or Password wrong"})
            }
        })
        .catch((err) => {
            this.setState({errorState : err.message})
        })
    }

    render() {
        return (
            <Modal centered={true} toggle={this.props.toggle} isOpen={this.props.loginOpen} className="hobs-modal-width">
                <ModalHeader toggle={this.props.toggle} className="border-bottom-0"></ModalHeader>

                <div className="row">
                    <div className="col-md-6">
                        <ModalBody>
                            <div className="pb-4">
                                <h3 className="text-center font-weight-bold">Already A Customer?</h3>
                                <p className="text-center hobs-f14">Welcome back, its great to see you again!</p>
                                <p className="text-center font-weight-bold text-danger p-0">{this.state.errorState}</p>
                            </div>

                            <form>
                                <div className="form-group">
                                    <input type="email" ref='data' placeholder="Email / Phone Number" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="password" ref='password' placeholder="Password" className="form-control" />
                                </div>
                            </form>
                            <input type="button" onClick={this.onSubmitBtn} className="btn btn-primary btn-block" value="Submit"/>
                        </ModalBody>

                        <ModalFooter className="border-top-0"></ModalFooter>
                    </div>

                    <div className="col-md-6">
                        <ModalBody className="text-center">
                            <div className="pb-4">
                                <h3 className="text-center font-weight-bold">New To The Hobs?</h3>
                                <p className="text-center hobs-f14 p-0" style={{lineHeight:"1.4em"}}>
                                    By creating an account you can reference your purchases and have
                                    addresses to make checking out quick & easy and subscribe to emails 
                                    for exclusive Hobs offers.
                                </p>
                            </div>
                            <Link to='/register' onClick={this.props.toggle}>Sounds good, sign me up</Link>
                        </ModalBody>

                        <ModalFooter className="border-top-0"></ModalFooter>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default Login