import Axios from 'axios'
import React, { Component } from 'react'
import apiUrl from '../supports/constants/apiUrl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export class CreatePassword extends Component {
    state = {
        eyePass : true,
        eyeConfirm : true
    }

    onSubmitBtnClick = () => {
        // get value
        let pass = this.refs.pass.value
        let passConfirm = this.refs.passConfirm.value

        if(pass && passConfirm){
            var id = this.props.location.pathname.split('/')[2]
    
            // check input 1 dan 2 harus sama
            if(pass === passConfirm) {
                Axios.patch(apiUrl + 'users/' + id, {password : pass})
                .then((res) => {
                    console.log(res)
                    alert('create password success')
                    window.location = '/'
                })
                .catch((err) => {
                    console.log(err)
                })
                // kirim ke api
            }else {
                alert("Password and confirm password didn't match")
            }
        } // password harus lebih dari 8 digit
    }

    render() {
        return (
            <div className="py-5 px-3">
                <h1 className="text-center">Create Your Password Here!!</h1>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-4 hobs-bg-banner rounded p-5">
                        <div className="input-group">
                            <input type={this.state.eyePass ? 'password' : 'text'} ref='pass' className="hobs-form-control form-control border-right-0" placeholder="Enter password" />
                            <div className="input-group-append">
                                <span className="input-group-text bg-white">
                                    <FontAwesomeIcon icon={faEye} onClick={() => this.setState({eyePass : !this.state.eyePass})} />
                                </span>
                            </div>
                        </div>

                        <div className="input-group mt-3">
                            <input type={this.state.eyeConfirm? 'password' : 'text'} ref='passConfirm' className="hobs-form-control form-control border-right-0" placeholder="Confirm password" />
                            <div className="input-group-append">
                                <span className="input-group-text bg-white">
                                    <FontAwesomeIcon icon={faEye} onClick={() => this.setState({eyeConfirm : !this.state.eyeConfirm})} />
                                </span>
                            </div>
                        </div>

                        <input onClick={this.onSubmitBtnClick} type="button" value="Submit" className="btn btn-light w-100 mt-4" />
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePassword
