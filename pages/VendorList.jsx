import React from 'react'
import Loader from '../Components/Loaderr'
import Topbar from '../Components/Topbar'
import Header from "../Components/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from '../Components/Footer';
import star from '../public/imgs/template/icons/star.svg'
import InfoSection from '../Components/InfoSection';
import img1 from "../public/imgs/page/product/img-gallery-1.jpg";
import Link from 'next/link';
import QuickModal from '@/Components/QuickModal';
const VendorListing =(props) => {
  
  return (
    <>
        <Loader data={props.categories}/>
      <ScrollToTop
        smooth={true}
        color="white"
        viewBox="0 0 16 16"
        width="22"
        height="22"
        svgPath="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        style={{ backgroundColor: "#405786", borderRadius: "50%" }}
      />
      <Topbar/>
       <Header categories={props.categories} />
      <main className="main">
      <div className="section-box">
        <div className="breadcrumbs-div">
          <div className="container">
            <ul className="breadcrumb">
              <li><Link className="font-xs color-gray-1000" href={`/`}>Home</Link></li>
              <li><Link className="font-xs color-gray-500" href={`/VendorList`}>Vendor listing</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <section className="section-box shop-template mt-0">
        <div className="container">
          <h2>Vendors Listing</h2>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-30">
              <p className="font-md color-gray-500">We have<span className="font-md-bold color-brand-3"> 780</span><span> vendors now</span></p>
            </div>
            <div className="col-lg-6 mb-30 text-end"><a className="font-sm color-gray-900 mr-30" href="#">Support Ticket</a><a className="font-sm color-gray-900 mr-30" href="#">Become an Affilate</a><Link className="btn btn-buy w-auto font-sm-bold" href={`/Register`}>Open a Shop</Link></div>
          </div>
          <div className="border-bottom pt-0 mb-30"></div>
          <div className="row">
            <div className="col-lg-9 order-first order-lg-last">
              <div className="box-filters mt-0 pb-5 border-bottom">
                <div className="row">
                  <div className="col-xl-2 col-lg-3 mb-10 text-lg-start text-center"><a className="btn btn-filter font-sm color-brand-3 font-medium" href="#ModalFiltersForm" data-bs-toggle="modal">All Fillters</a></div>
                  <div className="col-xl-10 col-lg-9 mb-10 text-lg-end text-center"><span className="font-sm color-gray-900 font-medium border-1-right span">Showing 1&ndash;16 of 17 results</span>
                    <div className="d-inline-block"><span className="font-sm color-gray-500 font-medium">Sort by:</span>
                      <div className="dropdown dropdown-sort border-1-right">
                        <button className="btn dropdown-toggle font-sm color-gray-900 font-medium" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded="false">Latest added</button>
                        <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort" style={{margin: "0px"}}>
                          <li><a className="dropdown-item active" href="#">Latest added</a></li>
                          <li><a className="dropdown-item" href="#">Oldest added</a></li>
                          <li><a className="dropdown-item" href="#">Comments added</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-inline-block"><span className="font-sm color-gray-500 font-medium">Show</span>
                      <div className="dropdown dropdown-sort border-1-right">
                        <button className="btn dropdown-toggle font-sm color-gray-900 font-medium" id="dropdownSort2" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><span>30 items</span></button>
                        <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort2">
                          <li><a className="dropdown-item active" href="#">30 items</a></li>
                          <li><a className="dropdown-item" href="#">50 items</a></li>
                          <li><a className="dropdown-item" href="#">100 items</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-inline-block"><a className="view-type-grid mr-5 active" href="shop-vendor-list.html"></a><a className="view-type-list" href="#"></a></div>
                  </div>
                </div>
              </div>
              <div className="row mt-20">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-vendor">
                    <div className="card-top-vendor">
                      <div className="card-top-vendor-left"><img src="assets/imgs/page/vendor/futur.png" alt="Ecom" />
                        <div className="rating"><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                      </div>
                      <div className="card-top-vendor-right"><a className="btn btn-gray" href="shop-vendor-single.html">360 Products</a>
                        <p className="font-xs color-gray-500 mt-10">Member since 2012</p>
                      </div>
                    </div>
                    <div className="text-center">
                     <a className="btn btn-cart btn-sm"  href="shop-vendor-single.html">More Info</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-vendor">
                    <div className="card-top-vendor">
                      <div className="card-top-vendor-left"><img src="assets/imgs/page/vendor/elmado.png" alt="Ecom"/>
                        <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                      </div>
                      <div className="card-top-vendor-right"><a className="btn btn-gray" href="shop-vendor-single.html">360 Products</a>
                        <p className="font-xs color-gray-500 mt-10">Member since 2012</p>
                      </div>
                    </div>
                    <div className="text-center">
                     <a className="btn btn-cart btn-sm"  href="shop-vendor-single.html">More Info</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-vendor">
                    <div className="card-top-vendor">
                      <div className="card-top-vendor-left"><img src="assets/imgs/page/vendor/costctrl.png" alt="Ecom"/>
                        <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                      </div>
                      <div className="card-top-vendor-right"><a className="btn btn-gray" href="shop-vendor-single.html">360 Products</a>
                        <p className="font-xs color-gray-500 mt-10">Member since 2012</p>
                      </div>
                    </div>
                    <div className="text-center">
                     <a className="btn btn-cart btn-sm"  href="shop-vendor-single.html">More Info</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-vendor">
                    <div className="card-top-vendor">
                      <div className="card-top-vendor-left"><img src="assets/imgs/page/vendor/fasfox.png" alt="Ecom"/>
                        <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                      </div>
                      <div className="card-top-vendor-right"><a className="btn btn-gray" href="shop-vendor-single.html">360 Products</a>
                        <p className="font-xs color-gray-500 mt-10">Member since 2012</p>
                      </div>
                    </div>
                    <div className="text-center">
                     <a className="btn btn-cart btn-sm"  href="shop-vendor-single.html">More Info</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-vendor">
                    <div className="card-top-vendor">
                      <div className="card-top-vendor-left"><img src="assets/imgs/page/vendor/elmado.png" alt="Ecom"/>
                        <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                      </div>
                      <div className="card-top-vendor-right"><a className="btn btn-gray" href="shop-vendor-single.html">360 Products</a>
                        <p className="font-xs color-gray-500 mt-10">Member since 2012</p>
                      </div>
                    </div>
                    <div className="text-center">
                     <a className="btn btn-cart btn-sm"  href="shop-vendor-single.html">More Info</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-vendor">
                    <div className="card-top-vendor">
                      <div className="card-top-vendor-left"><img src="assets/imgs/page/vendor/fasfox.png" alt="Ecom"/>
                        <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                      </div>
                      <div className="card-top-vendor-right"><a className="btn btn-gray" href="shop-vendor-single.html">360 Products</a>
                        <p className="font-xs color-gray-500 mt-10">Member since 2012</p>
                      </div>
                    </div>
                    <div className="text-center">
                     <a className="btn btn-cart btn-sm"  href="shop-vendor-single.html">More Info</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-vendor">
                    <div className="card-top-vendor">
                      <div className="card-top-vendor-left"><img src="assets/imgs/page/vendor/tropper.png" alt="Ecom"/>
                        <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                      </div>
                      <div className="card-top-vendor-right"><a className="btn btn-gray" href="shop-vendor-single.html">360 Products</a>
                        <p className="font-xs color-gray-500 mt-10">Member since 2012</p>
                      </div>
                    </div>
                    <div className="text-center">
                     <a className="btn btn-cart btn-sm"  href="shop-vendor-single.html">More Info</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-vendor">
                    <div className="card-top-vendor">
                      <div className="card-top-vendor-left"><img src="assets/imgs/page/vendor/asembly.png" alt="Ecom"/>
                        <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                      </div>
                      <div className="card-top-vendor-right"><a className="btn btn-gray" href="shop-vendor-single.html">360 Products</a>
                        <p className="font-xs color-gray-500 mt-10">Member since 2012</p>
                      </div>
                    </div>
                    <div className="text-center">
                     <a className="btn btn-cart btn-sm"  href="shop-vendor-single.html">More Info</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-vendor">
                    <div className="card-top-vendor">
                      <div className="card-top-vendor-left"><img src="assets/imgs/page/vendor/aslan.png" alt="Ecom"/>
                        <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                      </div>
                      <div className="card-top-vendor-right"><a className="btn btn-gray" href="shop-vendor-single.html">360 Products</a>
                        <p className="font-xs color-gray-500 mt-10">Member since 2012</p>
                      </div>
                    </div>
                    <div className="text-center">
                     <a className="btn btn-cart btn-sm"  href="shop-vendor-single.html">More Info</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-vendor">
                    <div className="card-top-vendor">
                      <div className="card-top-vendor-left"><img src="assets/imgs/page/vendor/market.png" alt="Ecom"/>
                        <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                      </div>
                      <div className="card-top-vendor-right"><a className="btn btn-gray" href="shop-vendor-single.html">360 Products</a>
                        <p className="font-xs color-gray-500 mt-10">Member since 2012</p>
                      </div>
                    </div>
                    <div className="text-center">
                     <a className="btn btn-cart btn-sm"  href="shop-vendor-single.html">More Info</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-vendor">
                    <div className="card-top-vendor">
                      <div className="card-top-vendor-left"><img src="assets/imgs/page/vendor/costctrl.png" alt="Ecom"/>
                        <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                      </div>
                      <div className="card-top-vendor-right"><a className="btn btn-gray" href="shop-vendor-single.html">360 Products</a>
                        <p className="font-xs color-gray-500 mt-10">Member since 2012</p>
                      </div>
                    </div>
                    <div className="text-center">
                     <a className="btn btn-cart btn-sm"  href="shop-vendor-single.html">More Info</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-vendor">
                    <div className="card-top-vendor">
                      <div className="card-top-vendor-left"><img src="assets/imgs/page/vendor/fasfox.png" alt="Ecom"/>
                        <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                      </div>
                      <div className="card-top-vendor-right"><a className="btn btn-gray" href="shop-vendor-single.html">360 Products</a>
                        <p className="font-xs color-gray-500 mt-10">Member since 2012</p>
                      </div>
                    </div>
                    <div className="text-center">
                     <a className="btn btn-cart btn-sm"  href="shop-vendor-single.html">More Info</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-vendor">
                    <div className="card-top-vendor">
                      <div className="card-top-vendor-left"><img src="assets/imgs/page/vendor/elmado.png" alt="Ecom"/>
                        <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                      </div>
                      <div className="card-top-vendor-right"><a className="btn btn-gray" href="shop-vendor-single.html">360 Products</a>
                        <p className="font-xs color-gray-500 mt-10">Member since 2012</p>
                      </div>
                    </div>
                    <div className="text-center">
                     <a className="btn btn-cart btn-sm"  href="shop-vendor-single.html">More Info</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-vendor">
                    <div className="card-top-vendor">
                      <div className="card-top-vendor-left"><img src="assets/imgs/page/vendor/fasfox.png" alt="Ecom"/>
                        <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                      </div>
                      <div className="card-top-vendor-right"><a className="btn btn-gray" href="shop-vendor-single.html">360 Products</a>
                        <p className="font-xs color-gray-500 mt-10">Member since 2012</p>
                      </div>
                    </div>
                    <div className="text-center">
                     <a className="btn btn-cart btn-sm"  href="shop-vendor-single.html">More Info</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-vendor">
                    <div className="card-top-vendor">
                      <div className="card-top-vendor-left"><img src="assets/imgs/page/vendor/tropper.png" alt="Ecom"/>
                        <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                      </div>
                      <div className="card-top-vendor-right"><a className="btn btn-gray" href="shop-vendor-single.html">360 Products</a>
                        <p className="font-xs color-gray-500 mt-10">Member since 2012</p>
                      </div>
                    </div>
                    <div className="text-center">
                     <a className="btn btn-cart btn-sm"  href="shop-vendor-single.html">More Info</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-vendor">
                    <div className="card-top-vendor">
                      <div className="card-top-vendor-left"><img src="assets/imgs/page/vendor/asembly.png" alt="Ecom"/>
                        <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                      </div>
                      <div className="card-top-vendor-right"><a className="btn btn-gray" href="shop-vendor-single.html">360 Products</a>
                        <p className="font-xs color-gray-500 mt-10">Member since 2012</p>
                      </div>
                    </div>
                    <div className="text-center">
                     <a className="btn btn-cart btn-sm"  href="shop-vendor-single.html">More Info</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-vendor">
                    <div className="card-top-vendor">
                      <div className="card-top-vendor-left"><img src="assets/imgs/page/vendor/aslan.png" alt="Ecom"/>
                        <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                      </div>
                      <div className="card-top-vendor-right"><a className="btn btn-gray" href="shop-vendor-single.html">360 Products</a>
                        <p className="font-xs color-gray-500 mt-10">Member since 2012</p>
                      </div>
                    </div>
                    <div className="text-center">
                     <a className="btn btn-cart btn-sm"  href="shop-vendor-single.html">More Info</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-vendor">
                    <div className="card-top-vendor">
                      <div className="card-top-vendor-left"><img src="assets/imgs/page/vendor/market.png" alt="Ecom"/>
                        <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                      </div>
                      <div className="card-top-vendor-right"><a className="btn btn-gray" href="shop-vendor-single.html">360 Products</a>
                        <p className="font-xs color-gray-500 mt-10">Member since 2012</p>
                      </div>
                    </div>
                    <div className="text-center">
                     <a className="btn btn-cart btn-sm"  href="shop-vendor-single.html">More Info</a>
                    </div>
                  </div>
                </div>
              </div>
              <nav>
                <ul className="pagination">
                  <li className="page-item"><a className="page-link page-prev" href="#"></a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link active" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">4</a></li>
                  <li className="page-item"><a className="page-link" href="#">5</a></li>
                  <li className="page-item"><a className="page-link" href="#">6</a></li>
                  <li className="page-item"><a className="page-link page-next" href="#"></a></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 order-last order-lg-first">
              <div className="sidebar-border">
                <div className="sidebar-head">
                  <h6 className="color-gray-900">Vendor by industry</h6>
                </div>
                <div className="sidebar-content">
                  <ul className="list-nav-arrow">
                    <li><a href="shop-vendor-list.html">Computers & Laptop<span className="number">09</span></a></li>
                    <li><a href="shop-vendor-list.html">Electric accessories<span className="number">12</span></a></li>
                    <li><a href="shop-vendor-list.html">Fashion & Beauty<span className="number">24</span></a></li>
                    <li><a href="shop-vendor-list.html">Furniture & Appliances<span className="number">34</span></a></li>
                    <li><a href="shop-vendor-list.html">Sports and Outdoors<span className="number">65</span></a></li>
                    <li><a href="shop-vendor-list.html">Food, condiments<span className="number">15</span></a></li>
                    <li><a href="shop-vendor-list.html">Book, Office supplies<span className="number">76</span></a></li>
                    <li><a href="shop-vendor-list.html">Children and mothers<span className="number">89</span></a></li>
                    <li><a href="shop-vendor-list.html">Cars, motorbikes<span className="number">23</span></a></li>
                    <li><a href="shop-vendor-list.html">Other<span className="number">98</span></a></li>
                  </ul>
                  <div>
                    <div className="collapse" id="moreMenu">
                      <ul className="list-nav-arrow">
                        <li><a href="shop-vendor-list.html">Home theater<span className="number">98</span></a></li>
                        <li><a href="shop-vendor-list.html">Cameras & drones<span className="number">124</span></a></li>
                        <li><a href="shop-vendor-list.html">PC gaming<span className="number">56</span></a></li>
                        <li><a href="shop-vendor-list.html">Smart home<span className="number">87</span></a></li>
                        <li><a href="shop-vendor-list.html">Networking<span className="number">36</span></a></li>
                      </ul>
                    </div><a className="link-see-more mt-5" data-bs-toggle="collapse" href="#moreMenu" role="button" aria-expanded="false" aria-controls="moreMenu">See More</a>
                  </div>
                </div>
              </div>
              <div className="box-slider-item">
                <div className="head pb-15 border-brand-2">
                  <h5 className="color-gray-900">Vendor by tags</h5>
                </div>
                <div className="content-slider mb-50"><a className="btn btn-border mr-5" href="shop-vendor-list.html">Games</a><a className="btn btn-border mr-5" href="shop-vendor-list.html">Electronics</a><a className="btn btn-border mr-5" href="shop-vendor-list.html">Video</a><a className="btn btn-border mr-5" href="shop-vendor-list.html">Cellphone</a><a className="btn btn-border mr-5" href="shop-vendor-list.html">Indoor</a><a className="btn btn-border mr-5" href="shop-vendor-list.html">VGA Card</a><a className="btn btn-border mr-5" href="shop-vendor-list.html">USB</a><a className="btn btn-border mr-5" href="shop-vendor-list.html">Lightning</a><a className="btn btn-border mr-5" href="shop-vendor-list.html">Camera</a><a className="btn btn-border" href="shop-vendor-list.html">Window</a><a className="btn btn-border mr-5" href="shop-vendor-list.html">Air Vent</a><a className="btn btn-border mr-5" href="shop-vendor-list.html">Bedroom</a><a className="btn btn-border mr-5" href="shop-vendor-list.html">Laptop</a><a className="btn btn-border mr-5" href="shop-vendor-list.html">Dashboard</a><a className="btn btn-border mr-5" href="shop-vendor-list.html">Keyboard</a></div>
              </div>
              <div className="box-slider-item">
                <div className="head pb-15 border-brand-2 mb-20">
                  <h5 className="color-gray-900">Make money with us</h5>
                </div>
                <div className="content-slider mb-50">
                  <div className="footer">
                    <ul className="menu-footer">
                      <li><a href="#">Open shop on Ecom</a></li>
                      <li><a href="#">Sell Your Services on Ecom</a></li>
                      <li><a href="#">Sell on Ecom Business</a></li>
                      <li><a href="#">Sell Your Apps on Ecom</a></li>
                      <li><a href="#">Become an Affilate</a></li>
                      <li><a href="#">Advertise Your Products</a></li>
                      <li><a href="#">Sell-Publish with Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InfoSection/>
      <div className="modal fade" id="ModalFiltersForm" tabindex="-1" aria-hidden="true" style={{display: "none"}}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content apply-job-form">
            <div className="modal-header">
              <h5 className="modal-title color-gray-1000 filters-icon">Addvance Fillters</h5>
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-30">
              <div className="row">
                <div className="col-w-1">
                  <h6 className="color-gray-900 mb-0">Brands</h6>
                  <ul className="list-checkbox">
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" checked="checked"/><span className="text-small">Apple</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">Samsung</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">Baseus</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">Remax</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">Handtown</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">Elecom</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">Razer</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">Auto Focus</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">Nillkin</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">Logitech</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">ChromeBook</span><span className="checkmark"></span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="col-w-1">
                  <h6 className="color-gray-900 mb-0">Special offers</h6>
                  <ul className="list-checkbox">
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">On sale</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" checked="checked"/><span className="text-small">FREE shipping</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">Big deals</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">Shop Mall</span><span className="checkmark"></span>
                      </label>
                    </li>
                  </ul>
                  <h6 className="color-gray-900 mb-0 mt-40">Ready to ship in</h6>
                  <ul className="list-checkbox">
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">1 business day</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" checked="checked"/><span className="text-small">1&ndash;3 business days</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">in 1 week</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">Shipping now</span><span className="checkmark"></span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="col-w-1">
                  <h6 className="color-gray-900 mb-0">Ordering options</h6>
                  <ul className="list-checkbox">
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">Accepts gift cards</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">Customizable</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" checked="checked"/><span className="text-small">Can be gift-wrapped</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">Installment 0%</span><span className="checkmark"></span>
                      </label>
                    </li>
                  </ul>
                  <h6 className="color-gray-900 mb-0 mt-40">Rating</h6>
                  <ul className="list-checkbox">
                    <li className="mb-5"><a href="#"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="ml-10 font-xs color-gray-500 d-inline-block align-top">(5 stars)</span></a></li>
                    <li className="mb-5"><a href="#"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src="assets/imgs/template/icons/star-gray.svg" alt="Ecom"/><span className="ml-10 font-xs color-gray-500 d-inline-block align-top">(4 stars)</span></a></li>
                    <li className="mb-5"><a href="#"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src="assets/imgs/template/icons/star-gray.svg" alt="Ecom"/><img src="assets/imgs/template/icons/star-gray.svg" alt="Ecom"/><span className="ml-10 font-xs color-gray-500 d-inline-block align-top">(3 stars)</span></a></li>
                    <li className="mb-5"><a href="#"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src="assets/imgs/template/icons/star-gray.svg" alt="Ecom"/><img src="assets/imgs/template/icons/star-gray.svg" alt="Ecom"/><img src="assets/imgs/template/icons/star-gray.svg" alt="Ecom"/><span className="ml-10 font-xs color-gray-500 d-inline-block align-top">(2 stars)</span></a></li>
                    <li className="mb-5"><a href="#"><img src={star.src} alt="Ecom"/><img src="assets/imgs/template/icons/star-gray.svg" alt="Ecom"/><img src="assets/imgs/template/icons/star-gray.svg" alt="Ecom"/><img src="assets/imgs/template/icons/star-gray.svg" alt="Ecom"/><img src="assets/imgs/template/icons/star-gray.svg" alt="Ecom"/><span className="ml-10 font-xs color-gray-500 d-inline-block align-top">(1 star)</span></a></li>
                  </ul>
                </div>
                <div className="col-w-2">
                  <h6 className="color-gray-900 mb-0">Material</h6>
                  <ul className="list-checkbox">
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">Nylon (8)</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">Tempered Glass (5)</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" checked="checked"/><span className="text-small">Liquid Silicone Rubber (5)</span><span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox"/><span className="text-small">Aluminium Alloy (3)</span><span className="checkmark"></span>
                      </label>
                    </li>
                  </ul>
                  <h6 className="color-gray-900 mb-20 mt-40">Product tags</h6>
                  <div><a className="btn btn-border mr-5" href="#">Games</a><a className="btn btn-border mr-5" href="#">Electronics</a><a className="btn btn-border mr-5" href="#">Video</a><a className="btn btn-border mr-5" href="#">Cellphone</a><a className="btn btn-border mr-5" href="#">Indoor</a><a className="btn btn-border mr-5" href="#">VGA Card</a><a className="btn btn-border mr-5" href="#">USB</a><a className="btn btn-border mr-5" href="#">Lightning</a><a className="btn btn-border mr-5" href="#">Camera</a></div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-start pl-30"><a className="btn btn-buy w-auto" href="#">Apply Fillter</a><a className="btn font-sm-bold color-gray-500" href="#">Reset Fillter</a></div>
          </div>
        </div>
      </div>
    {/* quickview modal */}
    <div
          className="modal fade"
          id="ModalQuickview"
          tabindex="-1"
          aria-hidden="true"
          style={{ display: "none" }}
        >
         <QuickModal star={star} img1={img1} img2={img1}/>
        </div>
     
      </main>
      <Footer/>
    </>
  )
}

export default VendorListing
export async function getServerSideProps(context) {
  var axios = require('axios');
  let categories = []
  var config2 = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://countydev92-001-site1.ftempurl.com/api/marketplace/GetCategories",
    headers: {},
  };

  try {
    const response = await axios(config2); // wait for the axios request to complete
    categories = response.data.payload;
  } catch (error) {
    console.log(error);
  }
  return {
    props: { categories }, // pass the populated products array as props
  };
}