import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Axios from 'axios'
import React, { Component } from 'react'
import apiUrl from '../supports/constants/apiUrl'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'
import emailValidator from '../supports/functions/emailValidator'
import phoneNumberValidator from '../supports/functions/phoneNumberValidator'

export class Register extends Component {
    state = {
        errorMessage : "",
        loginOpen : false
    }

    onSubmitBtnClick = () => {
        //get value from input
        var value = this.refs.emailOrPhone.value
        
        if(Number(value[0]) >= 0){
            var phoneValidatorResult = phoneNumberValidator(value)
            if(phoneValidatorResult === true){
                this.sendDataToApi({phone : value, email : ""})
                // kirim ke api
            }else {
                this.setState({errorMessage : phoneValidatorResult})
                // munculin error message
            }
        }else{
            if(emailValidator(value) === true){
                this.sendDataToApi({email : value, phone : ""})
                // kirim ke api
            }else {
                this.setState({errorMessage : 'Email format wrong !!'})
                // munculin error message
            }
        }

        // validasi input
        // kirim ke api
    }

    sendDataToApi = (data) => {
        var dataToSend = data
        dataToSend.password = ''

        var dataType = data.phone ? 'phone' : 'email'
        var dataValue = data.phone ? data.phone : data.email

        console.log(dataType)
        console.log(dataValue)

        Axios.get(apiUrl + 'users?' + dataType + '=' + dataValue)
        .then((res) => {
            if(res.data.length === 0){
                Axios.post(apiUrl + 'users' , dataToSend)
                .then((res) => {
                    console.log(res)
                    alert('register success')
                    window.location = '/create-password/' + res.data.id
                    localStorage.setItem('id',res.data.id)
                })
                .catch((err) => {
                    this.setState({errorMessage : err.message})
                })
                // available
            }else {
                this.setState({errorMessage : dataType + ' Already taken, try another !!!!'})
            }
        })
        .catch((err) => {
            this.setState({errorMessage : err.message})
        })
    }

    render() {
        return (
            <div className="container my-5">
                <div className="row justify-content-center">
                    {/* Register Section */}
                    <div className="col-6 pt-5 pt-md-0">
                        <h2 className="text-center font-weight-bold mb-3">Create Account</h2>
                        <p className="hobs-f15 text-center">
                        By creating an account you can reference your purchases and
                        have addresses to make checking out quick & easy and subscribe 
                        to emails for exclusive Hobs Co!
                        </p>

                        <div className="row my-4">
                            <div className="col-lg-4 col-md-6 col-sm-4 mb-4 mb-md-0">
                                <button className="btn btn-primary btn-block">Facebook login</button>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-4 mb-4 mb-md-0">
                                <button className="btn btn-info btn-block">Twitter login</button>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-4 mb-4 mb-md-0">
                                <button className="btn btn-danger btn-block">Google login</button>
                            </div>
                        </div>

                        <h4 className="mb-4">Or using form below</h4>

                        {
                            this.state.errorMessage ?
                                <div className="alert alert-danger my-3"> {this.state.errorMessage} </div>
                            :
                            null
                        }

                        <form className="mb-3">
                            <input type="text" ref='emailOrPhone' className="form-control" placeholder="Email / Phone Number" />
                        </form>

                        <div className="text-center mb-4">
                            <input onClick={this.onSubmitBtnClick} type="button" className="btn btn-block btn-primary" value="Submit" />
                        </div>

                        <Login 
                            loginOpen={this.state.loginOpen} 
                            toggle={() => this.setState({loginOpen : false})}
                        />

                        <p className="text-center">
                            Already have an account? 
                            <Link onClick={() => this.setState({loginOpen : true})}> Log in here</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register

// bisa menggunakan validator js
