import axios from 'axios'
import React, { Component } from 'react'
import apiUrl from '../supports/constants/apiUrl'
import Images from './../supports/images/product_images/product_01.jpg'
import Loader from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class Clothings extends Component {
    state = {
        data : null,
        filteredData : null,
        modalFilterOpen : false,
        allBrands : null,
        allCategories : null
    }

    componentDidMount(){
        this.getAllProducts()
    }

    getAllProducts = () => {
        axios.get(apiUrl + "products")
        .then((res) => {
            var allBrand = []
            var allCategory = []
            res.data.forEach((val) => {
                if(!allBrand.includes(val.brand)){
                    allBrand.push(val.brand)
                }
                if(!allCategory.includes(val.category)){
                    allCategory.push(val.category)
                }
            })

            this.setState({data : res.data, filteredData : res.data, allBrands : allBrand, allCategories : allCategory})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onChangeSort = () => {
        const sortBy = this.refs.sort.value
        const data = this.state.data
        if(sortBy === 'higherPrice'){
            // sort dari harga terttinggi
            data.sort((a,b) => {
                return b.price - a.price
            })
        }else if(sortBy === 'lowerPrice'){
            // sort dari harga terendah
            data.sort((a,b) => {
                return a.price - b.price
            })
        }else if(sortBy === 'discount'){
            // ini dari discount tertinggi
            data.sort((a,b) => {
                return b.discount - a.discount
            })
        }else if(sortBy === 'sort'){
            // ubah le default
            data.sort((a,b) => {
                return a.id - b.id
            })
        }
        this.setState({filteredData : data})
    }

    renderDataToJsx = () => {
        return this.state.filteredData.map((val) => {
            return(
                <div className="col-6 mt-3 col-md-3">
                    <div className="border bg-white p-3 h-100">
                        <Link to={'/detail-product/' + val.id}>
                            <img className="hobs-clickable-el" src={val.image1} width="100%" alt="product"/>
                            <p className="hobs-main-dark hobs-clickable-el font-weight-bold p-0 m-0">
                                {val.name.slice(0,15) + '...'}
                            </p>
                        </Link>

                        {
                            val.discount ?
                                <span>
                                    <p className="text-danger p-0 m-0">{val.discount}% Off</p>
                                    <p className="p-0 m-0 text-secondary"><s>Rp. {val.price.toLocaleString('id-ID')}</s></p>
                                    <p className="hobs-main-dark p-0 m-0">Rp. {(val.price * (1 - val.discount/100)).toLocaleString('id-ID')}</p>
                                </span>
                            :
                                <span>
                                    <p className="text-danger p-0 m-0"></p>
                                    <p className="p-0 m-0 text-secondary"><s></s></p>
                                    <p className="hobs-main-dark p-0 m-0">Rp. {val.price.toLocaleString('id-ID')}</p>
                                </span>

                        }

                    </div>
                </div>
            )
        })
    }

    modalFilterSwitch = () => {
        this.setState({modalFilterOpen : !this.state.modalFilterOpen})
    }

    onApplyFilterClick = () => {
        // ambil value
        var category = this.refs.category.value
        var brand = this.refs.brand.value
        var filteredData = this.state.data
        if(!(category === 'all') || !(brand === 'all')){
            filteredData = this.state.data.filter((val) => {
                if(brand === 'all'){
                    return val.category === category
                }
                if(category === 'all'){
                    return val.brand === brand
                }
                return val.category === category && val.brand === brand
            })
        }

        this.setState({filteredData : filteredData, modalFilterOpen : false})
    }

    render() {
        return (
            <div>
                {/* Filter Modal */}
                <Modal centered={true} toggle={this.modalFilterSwitch} isOpen={this.state.modalFilterOpen}>
                    <ModalHeader toggle={this.modalFilterSwitch}>Filter By</ModalHeader>

                    <ModalBody>
                        <p className="p-0 m-0">Category</p>
                        <select ref='category' className="form-control mt-1">
                            <option value='all'>All Category</option>
                            {
                                this.state.allCategories ?
                                    this.state.allCategories.map((val) => {
                                        return(
                                            <option value={val}>{val}</option>
                                        )
                                    })
                                :
                                 null
                            }
                        </select>

                        <p className="p-0 mt-3">Brand</p>
                        <select ref='brand' className="form-control mt-1">
                            <option value='all'>All Brands</option>
                            {
                                this.state.allBrands ?
                                    this.state.allBrands.map((val) => {
                                        return(
                                            <option value={val}>{val}</option>
                                        )
                                    })
                                :
                                 null
                            }
                        </select>
                    </ModalBody>

                    <ModalFooter>
                        <input onClick={this.onApplyFilterClick} type="button" value="Apply" className="btn btn-info" />
                    </ModalFooter>
                </Modal>

                <div className="py-5 px-3 bg-light">
                    <div className="container mt-4">
                        <div className="text-right">
                            <span onClick={this.modalFilterSwitch} className="hobs-f14 text-secondary hobs-clickable-el">
                                Filter By
                                <FontAwesomeIcon icon={faChevronDown} size="xs" className="ml-2" />
                            </span>

                            <select ref='sort' onChange={this.onChangeSort} className="hobs-f14 text-secondary hobs-clickable-el border-0 ml-3">
                                <option value="sort">Sort by</option>
                                <option value="higherPrice">Higher-price</option>
                                <option value="lowerPrice">Lower-price</option>
                                <option value="discount">Discount</option>
                            </select>
                        </div>

                        <div className="row mt-4">
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
            </div>
        )
    }
}

export default Clothings
