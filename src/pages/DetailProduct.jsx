import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import Axios from 'axios';
import apiUrl from '../supports/constants/apiUrl';
import Loading from '../components/Loading'
import Login from './Login';


export class DetailProduct extends Component {
    state = {
        data : null,
        selectedPhoto : null,
        isLogin : false,
        loginOpen : false
    }

    componentDidMount(){
        window.scrollTo(0,0)
        this.getDataProductsById()
        this.getLoginStatus()
    }

    getLoginStatus = () => {
        const id = localStorage.getItem('id')
        if(id){
            this.setState({isLogin : true})
        }else{
            this.setState({isLogin:  false})
        }
    }

    getDataProductsById = () => {
        // console.log(this.props.location.pathname.split('/')[2])
        var id = this.props.match.params.bebas
        Axios.get(apiUrl + "products/" + id)
        .then((res) => {
            console.log(res.data)
            this.setState({data : res.data,selectedPhoto : res.data.image1})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onAddToCartBtn = () => {
        var id = localStorage.getItem('id')
        if(id){

        }else {
            this.setState({loginOpen : true})
        }
    }

    onAddWishlistBtn = () => {
        var id = localStorage.getItem('id')
        if(id){

        }else {
            this.setState({loginOpen : true})
        }
    }

    onAddToCartClick = () => {
        const data = {
            id_user : Number(localStorage.getItem('id')),
            id_product : Number(this.props.match.params.bebas),
            qty : 1
        }

        if(data.id_user && data.id_product && data.qty){
            Axios.get(apiUrl + 'carts?id_user=' + data.id_user + '&id_product=' + data.id_product)
            .then((res) => {
                if(res.data.length === 0){
                    Axios.post(apiUrl + 'carts' , data)
                    .then((res) => {
                        if(res.status === 201){
                            alert("Add to cart success");
                            window.location = '/cart'
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                }else{
                    var qty = res.data[0].qty + 1
                    Axios.patch(apiUrl + 'carts/' + res.data[0].id , {qty : qty})
                    .then((res) => {
                        if(res.status === 200){
                            alert("qty updated");
                            window.location = '/cart'
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                }
            })
        }
    }

    render() {
        if(this.state.data === null) {
            return (
                <Loading />
            )
        }
        return (
            <div className="py-5">
                <Login 
                    loginOpen={this.state.loginOpen} 
                    toggle={() => this.setState({loginOpen : false})}
                />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="hobs-product-gallery">
                                <div className="d-block text-center">
                                    <img src={this.state.selectedPhoto} alt="" width="75%" />
                                </div>
                                <ul className="hobs-product-tumbnails">
                                    <li>
                                        <span>
                                            <img className={this.state.selectedPhoto === this.state.data.image1 ? 'hobs-clickable-el border p-1' : 'hobs-clickable-el p-1'} onClick={() =>this.setState({selectedPhoto : this.state.data.image1})} src={this.state.data.image1} alt="" width="75%" />
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <img className={this.state.selectedPhoto === this.state.data.image2 ? 'hobs-clickable-el border p-1' : 'hobs-clickable-el p-1'} onClick={() =>this.setState({selectedPhoto : this.state.data.image2})} src={this.state.data.image2} alt="" width="75%" />
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="hobs-product-shop">
                                <h3 className="font-weight-bold">{this.state.data.name}</h3>

                                {
                                    this.state.data.discount ?
                                        <div className='py-4'>
                                            <h3 className="text-info">
                                                <span className="text-muted mr-3">
                                                    <s>Rp {this.state.data.price.toLocaleString('id-ID')} </s>
                                                </span>
                                                Rp {(this.state.data.price - (this.state.data.price * (this.state.data.discount/100))).toLocaleString('id-ID')}
                                            </h3>
                                        </div>
                                    :   
                                        <div className="py-4">
                                            <h3 className="text-info">
                                                Rp {(this.state.data.price - (this.state.data.price * (this.state.data.discount/100))).toLocaleString('id-ID')}
                                            </h3>
                                        </div>
                                }

                                <div className="hobs-details-size pb-4">
                                    <h5 className="d-block mb-3">Size :</h5>
                                    <ul className="list-unstyled">
                                        <li className="d-inline-block mr-2">
                                            <span className="d-inline-block bg-light border py-2 px-3">S</span>
                                        </li>
                                        <li className="d-inline-block mr-2">
                                            <span className="d-inline-block bg-light border py-2 px-3">M</span>
                                        </li>
                                        <li className="d-inline-block mr-2">
                                            <span className="d-inline-block bg-light border py-2 px-3">L</span>
                                        </li>
                                        <li className="d-inline-block mr-2">
                                            <span className="d-inline-block bg-light border py-2 px-3">XL</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="pb-4">
                                    <h5 className="d-block">
                                        Stock :
                                        <span className="ml-2">{this.state.data.Stock} Pcs</span>
                                    </h5>
                                </div>

                                <hr className="pb-3" />

                                <h6 className="font-weight-light sporteens-font-14">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Reiciendis, vero ipsum fuga delectus quasi, voluptates eos
                                    aut fugiat impedit praesentium rerum exercitationem eaque quidem?
                                    Ipsam fuga similique magnam blanditiis est?
                                </h6>

                                <div className="row pt-4">
                                    <div className="col-5 col-md-6">
                                        <input type="button" onClick={this.onAddToCartBtn} value="Add To Cart" className="btn btn-primary w-100"/>
                                    </div>
                                    <div className="col-5 col-md-6">
                                        <div onClick={this.onAddWishlistBtn} className='py-2 d-inline-block h-100 hobs-clickable-el'>
                                            <FontAwesomeIcon icon={faHeart}  className='text-danger'/>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* <h3>{this.state.data.name}</h3>
                            <span>Terjual 5 produk</span>

                            {
                                this.state.data.discount ? 
                                <span className='pt-3'>
                                    
                                    <h3 className="text-danger pt-3">  Rp.{(this.state.data.price - (this.state.data.price * (this.state.data.discount/100))).toLocaleString('id-ID')}  <span className='sporteens-font-14 sporteens-main-dark'><s>Rp {this.state.data.price.toLocaleString('id-ID')} </s></span></h3>
                                </span>
                                :
                                <h3 className="text-danger pt-3">  Rp.{(this.state.data.price - (this.state.data.price * (this.state.data.discount/100))).toLocaleString('id-ID')}</h3>
                            }
                            <hr className="mt-3" />

                            <h5 className="font-weight-bold">Stock</h5>
                            <h5 className="font-weight-light text-secondary sporteens-font-12">{this.state.data.Stock} Pcs</h5>
                            <h5 className="font-weight-bold">Berat</h5>
                            <h5 className="font-weight-light text-secondary sporteens-font-12">200 Gram</h5>
                            <hr className="mt-3" />
                            <h5 className="font-weight-bold">Deskripsi : </h5>
                            <h6 className="font-weight-light sporteens-font-14">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Reiciendis, vero ipsum fuga delectus quasi, voluptates eos
                                aut fugiat impedit praesentium rerum exercitationem eaque quidem?
                                Ipsam fuga similique magnam blanditiis est?
                            </h6>

                            <div className="row pt-3">
                                <div className="col-5 col-md-6">
                                    <input type="button" onClick={this.onAddToCartBtn} value="Add To Cart" className="btn btn-primary w-100"/>
                                </div>
                                <div className="col-5 col-md-6">
                                    <div onClick={this.onAddWishlistBtn} className='py-2 d-inline-block h-100 hobs-clickable-el'>
                                        <FontAwesomeIcon icon={faHeart}  className='text-danger'/>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailProduct
