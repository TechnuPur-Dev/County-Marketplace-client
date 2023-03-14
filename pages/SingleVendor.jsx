import React from 'react'
import Loader from '../Components/Loaderr'
import Topbar from '../Components/Topbar'
import Header from "../Components/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from '../Components/Footer';
import InfoSection from '../Components/InfoSection';
import star from '../public/imgs/template/icons/star.svg'
import featureVendor from '../public/imgs/page/vendor/featured.png'
import profilePic from '../public/imgs/page/vendor/fasfox.png'
import delivery from "../public/imgs/template/delivery.svg"
import support from "../public/imgs/template/support.svg"
import returnImg from "../public/imgs/template/return.svg"
import secure from "../public/imgs/template/secure.svg"
import img1 from "../public/imgs/page/product/img-gallery-1.jpg";
import Link from 'next/link';
import QuickModal from '@/Components/QuickModal';
const SingleVendor = (props) => {
  
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
              <li><Link className="font-xs color-gray-500" href={`/SingleVendor`}>Single Vendor</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <section className="section-box shop-template mt-30">
        <div className="container">
          <div className="d-flex box-banner-vendor">
            <div className="vendor-left">
              <div className="banner-vendor"><img src={featureVendor.src} alt="Ecom"/>
                <div className="d-flex box-info-vendor">
                  <div className="avarta"><img className="mb-5" src={profilePic.src} alt="Ecom"/><a className="btn btn-buy font-xs" href="shop-fullwidth.html">360 Products</a></div>
                  <div className="info-vendor">
                    <h4 className="mb-5">Fasfox Coporation</h4><span className="font-xs color-gray-500 mr-20">Member since 2012</span>
                    <div className="rating d-inline-block"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                  </div>
                  <div className="vendor-contact">
                    <div className="row">
                      <div className="col-xl-7 col-lg-12">
                        <div className="d-inline-block font-md color-gray-500 location mb-10">5171 W Campbell Ave undefined Kent, Utah 53127 United States</div>
                      </div>
                      <div className="col-xl-5 col-lg-12">
                        <div className="d-inline-block font-md color-gray-500 phone" style={{fontSize:"15px"}}>(+91) - 540-025-124553<br/>(+91) - 540-025-235688</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vendor-right">
              <div className="box-featured-product">
                <div className="item-featured">
                  <div className="featured-icon"><img src={delivery.src} alt="Ecom"/></div>
                  <div className="featured-info"><span className="font-sm-bold color-gray-1000">Free Delivery</span>
                    <p className="font-sm color-gray-500 font-medium">From all orders over $10</p>
                  </div>
                </div>
                <div className="item-featured">
                  <div className="featured-icon"><img src={support.src} alt="Ecom"/></div>
                  <div className="featured-info"><span className="font-sm-bold color-gray-1000">Support 24/7</span>
                    <p className="font-sm color-gray-500 font-medium">Shop with an expert</p>
                  </div>
                </div>
                <div className="item-featured">
                  <div className="featured-icon"><img src={returnImg.src}  alt="Ecom"/></div>
                  <div className="featured-info"><span className="font-sm-bold color-gray-1000">Return & Refund</span>
                    <p className="font-sm color-gray-500 font-medium">Free return over $200</p>
                  </div>
                </div>
                <div className="item-featured">
                  <div className="featured-icon"><img src={secure.src} alt="Ecom"/></div>
                  <div className="featured-info"><span className="font-sm-bold color-gray-1000">Secure payment</span>
                    <p className="font-sm color-gray-500 font-medium">100% Protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom mb-20 border-vendor"></div>
          <div className="row">
            <div className="col-lg-12">
              <div className="box-filters mt-0 pb-5 border-bottom">
                <div className="row">
                  <div className="col-xl-2 col-lg-3 mb-10 text-lg-start text-center"><a className="btn btn-filter font-sm color-brand-3 font-medium" href="#ModalFiltersForm" data-bs-toggle="modal">All Fillters</a></div>
                  <div className="col-xl-10 col-lg-9 mb-10 text-lg-end text-center"><span className="font-sm color-gray-900 font-medium border-1-right span">Showing 1&ndash;16 of 17 results</span>
                    <div className="d-inline-block"><span className="font-sm color-gray-500 font-medium">Sort by:</span>
                      <div className="dropdown dropdown-sort border-1-right">
                        <button className="btn dropdown-toggle font-sm color-gray-900 font-medium" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded="false">Latest products</button>
                        <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort" style={{margin: "0px"}}>
                          <li><a className="dropdown-item active" href="#">Latest products</a></li>
                          <li><a className="dropdown-item" href="#">Oldest products</a></li>
                          <li><a className="dropdown-item" href="#">Comments products</a></li>
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
                    <div className="d-inline-block"><a className="view-type-grid mr-5 active" href="shop-grid.html"></a><a className="view-type-list" href="shop-list.html"></a></div>
                  </div>
                </div>
              </div>
              <div className="list-products-5 mt-20">
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp3.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star </a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp4.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">2022 Apple iMac with Retina 5K Display 8GB RAM</a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp5.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star </a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp6.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">2022 Apple iMac with Retina 5K Display 8GB RAM</a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp7.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star </a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp3.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star </a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp4.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">2022 Apple iMac with Retina 5K Display 8GB RAM</a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp5.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star </a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp6.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">2022 Apple iMac with Retina 5K Display 8GB RAM</a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp7.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star </a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp3.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star </a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp4.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">2022 Apple iMac with Retina 5K Display 8GB RAM</a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp5.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star </a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp6.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">2022 Apple iMac with Retina 5K Display 8GB RAM</a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp7.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star </a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp3.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star </a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp4.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">2022 Apple iMac with Retina 5K Display 8GB RAM</a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp5.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star </a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp6.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">2022 Apple iMac with Retina 5K Display 8GB RAM</a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-grid-style-3">
                  <div className="card-grid-inner">
                    <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                    <div className="image-box"><span className="label bg-brand-2">-17%</span><a href="shop-single-product-2.html"><img src="assets/imgs/page/homepage1/imgsp7.png" alt="Ecom"/></a></div>
                    <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br/><a className="color-brand-3 font-sm-bold" href="shop-single-product-2.html">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star </a>
                      <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500">(65)</span></div>
                      <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                      <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                      <ul className="list-features">
                        <li>27-inch (diagonal) Retina 5K display</li>
                        <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                        <li>AMD Radeon Pro 5300 graphics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20">
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
            </div>
          </div>
        </div>
      </section>
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
         <QuickModal star={star} img1={img1} img2={img1} />
        </div>
      </main>
      <InfoSection/>
      <Footer/>
    </>
  )
}

export default SingleVendor
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