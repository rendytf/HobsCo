import React, { Component } from 'react'
import './../supports/Hobs.css'
import Images from './../supports/images/product_images/product_01.jpg'
import Logo01 from './../supports/images/brand_images/adidas.jpg'
import Logo02 from './../supports/images/brand_images/nike.jpg'
import Logo03 from './../supports/images/brand_images/ccs.jpg'
import Logo04 from './../supports/images/brand_images/dc.jpg'
import Logo05 from './../supports/images/brand_images/volcom.jpg'
import Logo06 from './../supports/images/brand_images/bones.jpg'
import Logo07 from './../supports/images/brand_images/girl.jpg'
import Logo08 from './../supports/images/brand_images/huf.jpg'
import Logo09 from './../supports/images/brand_images/rvca.jpg'
import Logo10 from './../supports/images/brand_images/thrasher.jpg'
import Logo11 from './../supports/images/brand_images/triangle.jpg'
import Logo12 from './../supports/images/brand_images/vans.jpg'
import Axios from 'axios'
import apiUrl from '../supports/constants/apiUrl'
import Loader from 'react-loader-spinner'
import { Link } from 'react-router-dom'

export class LandingPage extends Component {
    state = {
        data : null,
        bestSellerData : null
    }

    componentDidMount(){
        this.getAllProducts()
      
    }

    getAllProducts = () => {
        Axios.get(apiUrl + "products")
        .then((res) => {
            console.log(res.data)
            this.setState({data : res.data})
            this.getBestSellerProducts()
        })
        .catch((err) => {
            alert(err.message)
        })
    }


    getBestSellerProducts = () => {
        Axios.get(apiUrl + "transactions")
        .then((res) => {
            console.log(res.data)

            // count total 
            var sold = []
            res.data.forEach((val) => {
                val.detail.forEach((prod) => {
                    var isAda = false
                    var indexAda = null

                    // nyari prod udah ada di sold atau belum
                    for(var i =0 ; i < sold.length ; i ++){
                        if(sold[i].product_name === prod.product_name){
                            isAda = true
                            indexAda = i
                        }
                    }

                    if(isAda){
                        sold[indexAda].qty += prod.qty
                    }else{
                        sold.push(prod)
                    }
                })
            })

            sold.sort((a,b) => {
                return b.qty - a.qty
            })

           sold = sold.slice(0,4)
           sold.forEach((val,index) => {
                this.state.data.forEach((data) => {
                    if(val.product_name === data.name){
                        sold[index]['product_id'] = data.id
                    }
                })
           })
           console.log(sold)
        this.setState({bestsellerData : sold})
            
        })
        .catch((err) => {
            console.log(err)
        })
    }

    renderDataToJsx = () => {
        var jsx = this.state.data.map((val) => {
            if(val.discount){
                return(
                    <div className="mr-2">
                        <div className="card border-0" style={{width : "173px"}}>
                            <Link className="" to={'/detail-product/' + val.id}>
                                <img src={val.image1} className="" width="100%" alt="product"/>
                                <p className="hobs-main-dark font-weight-bold p-0 m-0">{val.name.slice(0,15) + '...'}</p>
                            </Link>
                            <p className="p-0 m-0 text-secondary">{val.discount}%Off</p>
                            <p className="hobs-main-dark p-0 m-0"><s>Rp. {val.price.toLocaleString('id-ID')}</s></p>
                            <p className="text-danger p-0 m-0">Rp. {(val.price - (val.price * (val.discount/100))).toLocaleString('id-ID')}</p>
                        </div>
                    </div>
                )
            }
            return null
        } )

        return jsx
    }

    render() {
        return (
            <div>
                {/* Jumbotron Section */}
                <div className="hobs-bg-secondary hobs-jumbotron p-5">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-md-5 text-center text-md-left"></div>
                        </div>
                    </div>
                </div>

                {/* Brand Section */}
                <div className="py-4">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-4 col-sm-2 col-md-2 col-lg-1 mt-3 mt-md-0 h-100">
                                <img className="mx-2" width="72px" height="55px" src={Logo01} alt="brand-logo"/>
                            </div>
                            <div className="col-4 col-sm-2 col-md-2 col-lg-1 mt-3 mt-md-0 h-100">
                                <img className="mx-2" width="72px" height="55px" src={Logo02} alt="brand-logo"/>
                            </div>
                            <div className="col-4 col-sm-2 col-md-2 col-lg-1 mt-3 mt-md-0 h-100">
                                <img className="mx-2" width="72px" height="55px" src={Logo03} alt="brand-logo"/>
                            </div>
                            <div className="col-4 col-sm-2 col-md-2 col-lg-1 mt-3 mt-md-0 h-100">
                                <img className="mx-2" width="72px" height="55px" src={Logo04} alt="brand-logo"/>
                            </div>
                            <div className="col-4 col-sm-2 col-md-2 col-lg-1 mt-3 mt-md-0 h-100">
                                <img className="mx-2" width="72px" height="55px" src={Logo05} alt="brand-logo"/>
                            </div>
                            <div className="col-4 col-sm-2 col-md-2 col-lg-1 mt-3 mt-md-0 h-100">
                                <img className="mx-2" width="72px" height="55px" src={Logo06} alt="brand-logo"/>
                            </div>
                            <div className="col-4 col-sm-2 col-md-2 col-lg-1 mt-3 mt-md-0 h-100">
                                <img className="mx-2" width="72px" height="55px" src={Logo07} alt="brand-logo"/>
                            </div>
                            <div className="col-4 col-sm-2 col-md-2 col-lg-1 mt-3 mt-md-0 h-100">
                                <img className="mx-2" width="72px" height="55px" src={Logo08} alt="brand-logo"/>
                            </div>
                            <div className="col-4 col-sm-2 col-md-2 col-lg-1 mt-3 mt-md-0 h-100">
                                <img className="mx-2" width="72px" height="55px" src={Logo09} alt="brand-logo"/>
                            </div>
                            <div className="col-4 col-sm-2 col-md-2 col-lg-1 mt-3 mt-md-0 h-100">
                                <img className="mx-2" width="72px" height="55px" src={Logo10} alt="brand-logo"/>
                            </div>
                            <div className="col-4 col-sm-2 col-md-2 col-lg-1 mt-3 mt-md-0 h-100">
                                <img className="mx-2" width="72px" height="55px" src={Logo11} alt="brand-logo"/>
                            </div>
                            <div className="col-4 col-sm-2 col-md-2 col-lg-1 mt-3 mt-md-0 h-100">
                                <img className="mx-2" width="72px" height="55px" src={Logo12} alt="brand-logo"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Promo Section */}
                <div className="py-5 px-3 px-md-0">
                    <div className="container mt-4 border pt-3">
                        <h3>New Arrivals</h3>
                        <div className="hobs-scrolling-wrapper row flex-row flex-nowrap mt-4 p-3">
                            {
                                this.state.data === null ? 
                                <div className="col-12 my-5">
                                    <Loader className='text-center p-0 m-0' type="ThreeDots" color="#364f6b" height={40} width={40} />
                                    <p className='text-center'>loading</p>
                                </div>
                                : 
                                this.renderDataToJsx()
                            }
                            
                        </div>
                    </div>
                </div>

                {/* Bestseller Section */}
                <div className="py-5 px-3 bg-light">
                    <div className="container mt-4">
                        <h3 className="p-0 m-0">Bestsller</h3>
                        <p>Get our Bestseller Products This Month</p>
                        
                        <div className="row mt-4">
                            <div className="col-6 mt-3 mt-md-0 col-md-3">
                                <div className="border bg-white p-3">
                                    <img src={Images} width="100%" alt="product"/>
                                    <p className="hobs-main-dark font-weight-bold p-0 m-0">Product Name</p>
                                    <p className="p-0 m-0 text-secondary"><s>Rp. 100000</s></p>
                                    <p className="hobs-main-dark p-0 m-0">Rp. 70000</p>
                                    <p className="text-danger p-0 m-0">30% Off</p>
                                </div>
                            </div>
                            <div className="col-6 mt-3 mt-md-0 col-md-3">
                                <div className="border bg-white p-3">
                                    <img src={Images} width="100%" alt="product"/>
                                    <p className="hobs-main-dark font-weight-bold p-0 m-0">Product Name</p>
                                    <p className="p-0 m-0 text-secondary"><s>Rp. 100000</s></p>
                                    <p className="hobs-main-dark p-0 m-0">Rp. 70000</p>
                                    <p className="text-danger p-0 m-0">30% Off</p>
                                </div>
                            </div>
                            <div className="col-6 mt-3 mt-md-0 col-md-3">
                                <div className="border bg-white p-3">
                                    <img src={Images} width="100%" alt="product"/>
                                    <p className="hobs-main-dark font-weight-bold p-0 m-0">Product Name</p>
                                    <p className="p-0 m-0 text-secondary"><s>Rp. 100000</s></p>
                                    <p className="hobs-main-dark p-0 m-0">Rp. 70000</p>
                                    <p className="text-danger p-0 m-0">30% Off</p>
                                </div>
                            </div>
                            <div className="col-6 mt-3 mt-md-0 col-md-3">
                                <div className="border bg-white p-3">
                                    <img src={Images} width="100%" alt="product"/>
                                    <p className="hobs-main-dark font-weight-bold p-0 m-0">Product Name</p>
                                    <p className="p-0 m-0 text-secondary"><s>Rp. 100000</s></p>
                                    <p className="hobs-main-dark p-0 m-0">Rp. 70000</p>
                                    <p className="text-danger p-0 m-0">30% Off</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Banner Section Email Subscription */}
                <div className=" py-5">
                    <div className="container hobs-bg-banner p-5 mt-4">
                        <h3 className="text-white text-center">Subscribe to our newslater !!</h3>
                        <p className="text-white text-center">Get interested offer from us</p>

                        <div className="text-center">
                            <input type="button" className="btn btn-light" value="Subscribe Now !!" />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default LandingPage
