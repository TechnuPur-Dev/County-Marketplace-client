import React from "react";
import Loader from "../Components/Loaderr";
import Topbar from "../Components/Topbar";
import Header from "../Components/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../Components/Footer";
import InfoSection from "../Components/InfoSection";
import star from "../public/imgs/template/icons/star.svg";
import bannerImg from "../public/imgs/page/shop/banner.png";
import img1 from "../public/imgs/page/product/img-gallery-1.jpg";
import img2 from "../public/imgs/page/product/img-gallery-2.jpg";
// import ReactImageZoom from "react-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import MultiRangeSlider from "@/Components/MultiRangeSlider";
import Zoom from "react-img-zoom";
import "react-img-zoom/src/style.css";
const ShopGrid = () => {

  return (
    <>
      <Loader />
      <ScrollToTop
        smooth={true}
        color="white"
        viewBox="0 0 16 16"
        width="22"
        height="22"
        svgPath="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        style={{ backgroundColor: "#405786", borderRadius: "50%" }}
      />
      <Topbar />
      <Header />
      <main className="main">
        <div className="section-box shop-template mt-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 order-first order-lg-last">
                <div className="banner-ads-top mb-30">
                  <a href="shop-single-product-3.html">
                    <img src={bannerImg.src} alt="Ecom" />
                  </a>
                </div>
                <div className="box-filters mt-0 pb-5 border-bottom">
                  <div className="row">
                    <div className="col-xl-2 col-lg-3 mb-10 text-lg-start text-center">
                      <a
                        className="btn btn-filter font-sm color-brand-3 font-medium"
                        href="#ModalFiltersForm"
                        data-bs-toggle="modal"
                      >
                        All Fillters
                      </a>
                    </div>
                    <div className="col-xl-10 col-lg-9 mb-10 text-lg-end text-center">
                      <span className="font-sm color-gray-900 font-medium border-1-right span">
                        Showing 1&ndash;16 of 17 results
                      </span>
                      <div className="d-inline-block">
                        <span className="font-sm color-gray-500 font-medium">
                          Sort by:
                        </span>
                        <div className="dropdown dropdown-sort border-1-right">
                          <button
                            className="btn dropdown-toggle font-sm color-gray-900 font-medium"
                            id="dropdownSort"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Latest products
                          </button>
                          <ul
                            className="dropdown-menu dropdown-menu-light"
                            aria-labelledby="dropdownSort"
                            style={{ margin: "0px" }}
                          >
                            <li>
                              <a className="dropdown-item active" href="#">
                                Latest products
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Oldest products
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Comments products
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="d-inline-block">
                        <span className="font-sm color-gray-500 font-medium">
                          Show
                        </span>
                        <div className="dropdown dropdown-sort border-1-right">
                          <button
                            className="btn dropdown-toggle font-sm color-gray-900 font-medium"
                            id="dropdownSort2"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-bs-display="static"
                          >
                            <span>30 items</span>
                          </button>
                          <ul
                            className="dropdown-menu dropdown-menu-light"
                            aria-labelledby="dropdownSort2"
                          >
                            <li>
                              <a className="dropdown-item active" href="#">
                                30 items
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                50 items
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                100 items
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="d-inline-block">
                        <a
                          className="view-type-grid mr-5 active"
                          href="shop-grid.html"
                        ></a>
                        <a className="view-type-list" href="shop-list.html"></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-20">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp3.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            Dell Optiplex 9020 Small Form Business Desktop
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp4.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            HP 24 All-in-One PC, Intel Core i3-1115G4
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp5.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            Gateway 23.8&quot; All-in-one Desktop, Fully
                            Adjustable
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp6.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            HP 22 All-in-One PC, Intel Pentium Silver J5040
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp7.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            HP Slim Desktop, Intel Celeron J4025, 4GB RAM
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp1.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            Class 4K UHD (2160P) LED Roku Smart TV HDR
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp2.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            Galaxy Tab S7 Plus 12.4&quot; 128GB Mystic Black
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp3.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            HP 11.6&quot; Chromebook, AMD A4, 4GB RAM, 32GB
                            Storage
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp4.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            MSI Optix G272 27&quot; Full HD LED Gaming LCD
                            Monitor
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp5.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            RCA 43&quot; Class 4K Ultra HD (2160P) HDR Roku
                            Smart
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp6.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            Bose Sport Earbuds True Wireless Headphones
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp7.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            ASUS VivoBook 15.6&quot; 1080p PC Laptops, Intel
                            Core i3
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp1.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            Apple Watch Series 7 GPS + Cellular, 41mm Midnight
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp2.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            Hisense 43&quot; Class 4K UHD LED XClass Smart TV
                            HDR
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp3.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            2022 Apple 10.9-inch iPad Air Wi-Fi 64GB - Silver
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp4.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            Chromecast with Google TV - Streaming Entertainment
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp5.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            LG 65&quot; Class 4K UHD Smart TV OLED A1 Series
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp6.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            HDR Smart Portable Projector - SP- 2022
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp7.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            Lenovo Legion 5i 15.6&quot; Laptop, Intel Core i5
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp1.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            Galaxy Tab A7 Lite, 8.7&quot; Tablet 32GB
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp2.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            Apple AirPods Pro with MagSafe Charging Case
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp3.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            2022 Apple iMac Retina 5K Display 8GB RAM, 256GB SSD
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp4.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            Razer Power Up Gaming Bundle V2 - Cynosa Lit
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp5.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            Seagate Portable 2TB External Hard Drive Portable
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp6.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            SanDisk 128GB Ultra microSDXC UHS-I Memory
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp7.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            Original HP 63XL Black High-yield Ink Cartridge
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp1.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            2022 Apple iMac Retina 5K Display 8GB RAM, 256GB SSD
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp2.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            Logitech C920x HD Pro Webcam, Full HD
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp3.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            HP 24mh FHD Monitor - Computer Monitor with
                            23.8-Inch
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp4.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            Logitech H390 Wired Headset, Stereo Headphones with
                            Noise
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp5.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            Logitech MK345 Wireless Combo Full-Sized Keyboard
                            with Palm
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-style-3">
                      <div className="card-grid-inner">
                        <div className="tools">
                          <a
                            className="btn btn-trend btn-tooltip mb-10"
                            href="#"
                            aria-label="Trend"
                            data-bs-placement="left"
                          ></a>
                          <a
                            className="btn btn-wishlist btn-tooltip mb-10"
                            href="shop-wishlist.html"
                            aria-label="Add To Wishlist"
                          ></a>
                          <a
                            className="btn btn-compare btn-tooltip mb-10"
                            href="shop-compare.html"
                            aria-label="Compare"
                          ></a>
                          <a
                            className="btn btn-quickview btn-tooltip"
                            aria-label="Quick view"
                            href="#ModalQuickview"
                            data-bs-toggle="modal"
                          ></a>
                        </div>
                        <div className="image-box">
                          <span className="label bg-brand-2">-17%</span>
                          <a href="shop-single-product.html">
                            <img
                              src="assets/imgs/page/homepage1/imgsp6.png"
                              alt="Ecom"
                            />
                          </a>
                        </div>
                        <div className="info-right">
                          <a
                            className="font-xs color-gray-500"
                            href="shop-vendor-single.html"
                          >
                            Apple
                          </a>
                          <br />
                          <a
                            className="color-brand-3 font-sm-bold"
                            href="shop-single-product.html"
                          >
                            Logitech Brio 4K Webcam, Ultra 4K HD Video Calling
                            2T Storage
                          </a>
                          <div className="rating">
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <img src={star.src} alt="Ecom" />
                            <span className="font-xs color-gray-500">(65)</span>
                          </div>
                          <div className="price-info">
                            <strong className="font-lg-bold color-brand-3 price-main">
                              $2856.3
                            </strong>
                            <span className="color-gray-500 price-line">
                              $3225.6
                            </span>
                          </div>
                          <div className="mt-20 box-btn-cart">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add To Cart
                            </a>
                          </div>
                          <ul className="list-features">
                            <li>27-inch (diagonal) Retina 5K display</li>
                            <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <nav>
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link page-prev" href="#"></a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link active" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        6
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link page-next" href="#"></a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3 order-last order-lg-first">
                <div className="sidebar-border mb-0">
                  <div className="sidebar-head">
                    <h6 className="color-gray-900">Product Categories</h6>
                  </div>
                  <div className="sidebar-content">
                    <ul className="list-nav-arrow">
                      <li>
                        <a href="shop-grid.html">
                          Computers &amp; Laptop
                          <span className="number">09</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">
                          Electric accessories<span className="number">12</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">
                          Mainboard &amp; CPU<span className="number">24</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">
                          Bluetooth devices<span className="number">34</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">
                          Mouse &amp; Keyboard<span className="number">65</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">
                          Wired Headphone<span className="number">15</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">
                          Gaming Gatgets<span className="number">76</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">
                          Smart watches<span className="number">89</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">
                          Cell Phones<span className="number">23</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">
                          Headphone<span className="number">98</span>
                        </a>
                      </li>
                    </ul>
                    <div>
                      <div className="collapse" id="moreMenu">
                        <ul className="list-nav-arrow">
                          <li>
                            <a href="shop-grid.html">
                              Home theater<span className="number">98</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid.html">
                              Cameras & drones
                              <span className="number">124</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid.html">
                              PC gaming<span className="number">56</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid.html">
                              Smart home<span className="number">87</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid.html">
                              Networking<span className="number">36</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a
                        className="link-see-more mt-5"
                        data-bs-toggle="collapse"
                        href="#moreMenu"
                        role="button"
                        aria-expanded="false"
                        aria-controls="moreMenu"
                      >
                        See More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sidebar-border mb-40">
                  <div className="sidebar-head">
                    <h6 className="color-gray-900">Products Filter</h6>
                  </div>
                  <div className="sidebar-content">
                    <h6 className="color-gray-900  mb-10">Price</h6>
                    <div className="box-slider-range">
                      <div className="row mb-20">
                        <div className="col-sm-12">
                          {/* <ReactSlider defaultValue={[4,20]}
                                className="slider"
                                trackClassName="tracker"
                                min={0} 
                                style
                                max={100}
                                minDistance={50}
                                step={50}
                                pearling={true}
                                renderThumb={(props)=>{
                                  return <div {...props} className="thumb"></div>
                                }}
                                renderTrack={(props)=>{
                                  return <div {...props} className="track"></div>
                                }}

                                /> */}
                          <MultiRangeSlider
                            minValue={10}
                            maxValue={30}
                            baseClassName="multi-range-slider"
                            subSteps={false}
                            style={{
                              border: "0",
                              boxShadow: "none",
                              color: "white",
                              backgroundColor: "white",
                            }}
                            ruler={false}
                            barInnerColor="#FD9636"
                            barLeftColor="white"
                            thumbLeftColor="#FD9636"
                            thumbRightColor="#FD9636"
                            min={0}
                            max={100}
                            step={5}
                            label={false}
                            preventWheel={false}
                            onChange={(e) => {
                              // handleInput(e);
                            }}
                          />
                        </div>
                      </div>
                      {/* <div className="row">
                        <div className="col-lg-12">
                          <label className="lb-slider font-sm color-gray-500">
                            Price Range:
                          </label>
                          <span className="min-value-money font-sm color-gray-1000"></span>
                          <label className="lb-slider font-sm font-medium color-gray-1000"></label>
                          -
                          <span className="max-value-money font-sm font-medium color-gray-1000"></span>
                        </div>
                        <div className="col-lg-12">
                          <input
                            className="form-control min-value"
                            type="hidden"
                            name="min-value"
                            value=""
                          />
                          <input
                            className="form-control max-value"
                            type="hidden"
                            name="max-value"
                            value=""
                          />
                        </div>
                      </div> */}
                    </div>
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" checked="checked" />
                          <span className="text-small">Free - $100</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">145</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$100 - $200</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">56</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$200 - $400</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">23</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$400 - $600</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">43</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$600 - $800</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">65</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Over $1000</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">56</span>
                      </li>
                    </ul>
                    <h6 className="color-gray-900 mt-20 mb-10">Brands</h6>
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" checked="checked" />
                          <span className="text-small">Apple</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">12</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Sony</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">34</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Toshiba</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">56</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Assus</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">78</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Samsung</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">23</span>
                      </li>
                    </ul>
                    <h6 className="color-gray-900 mt-20 mb-10">Color</h6>
                    <ul className="list-color">
                      <li>
                        <a className="color-red active" href="#"></a>
                        <span>Red</span>
                      </li>
                      <li>
                        <a className="color-green" href="#"></a>
                        <span>Green</span>
                      </li>
                      <li>
                        <a className="color-blue" href="#"></a>
                        <span>Blue</span>
                      </li>
                      <li>
                        <a className="color-purple" href="#"></a>
                        <span>Purple</span>
                      </li>
                      <li>
                        <a className="color-black" href="#"></a>
                        <span>Black</span>
                      </li>
                      <li>
                        <a className="color-gray" href="#"></a>
                        <span>Gray</span>
                      </li>
                      <li>
                        <a className="color-pink" href="#"></a>
                        <span>Pink</span>
                      </li>
                      <li>
                        <a className="color-brown" href="#"></a>
                        <span>Brown</span>
                      </li>
                      <li>
                        <a className="color-yellow" href="#"></a>
                        <span>Yellow</span>
                      </li>
                    </ul>
                    <a
                      className="btn btn-filter font-sm color-brand-3 font-medium mt-10"
                      href="#ModalFiltersForm"
                      data-bs-toggle="modal"
                    >
                      More Fillters
                    </a>
                  </div>
                </div>
                <div className="box-slider-item mb-30">
                  <div className="head pb-15 border-brand-2">
                    <h5 className="color-gray-900">Best seller</h5>
                  </div>
                  <div className="content-slider">
                    <div className="box-swiper slide-shop">
                      <div className="swiper-container swiper-best-seller">
                        <div className="swiper-wrapper pt-5">
                          <div className="swiper-slide">
                            <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                              <div className="image-box">
                                <span className="label bg-brand-2">-17%</span>
                                <a href="shop-single-product-3.html">
                                  <img
                                    src="assets/imgs/page/homepage2/camera.png"
                                    alt="Ecom"
                                  />
                                </a>
                              </div>
                              <div className="info-right">
                                <a
                                  className="color-brand-3 font-xs-bold"
                                  href="shop-single-product-3.html"
                                >
                                  HP Slim Desktop, Intel Celeron J4025, 4GB RAM
                                </a>
                                <div className="rating">
                                  <img src={star.src} alt="Ecom" />
                                  <img src={star.src} alt="Ecom" />
                                  <img src={star.src} alt="Ecom" />
                                  <img src={star.src} alt="Ecom" />
                                  <img src={star.src} alt="Ecom" />
                                  <span className="font-xs color-gray-500">
                                    {" "}
                                    (65)
                                  </span>
                                </div>
                                <div className="price-info">
                                  <strong className="font-md-bold color-brand-3 price-main">
                                    $150
                                  </strong>
                                  <span className="color-gray-500 font-sm price-line">
                                    $187
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                              <div className="image-box">
                                <a href="shop-single-product-3.html">
                                  <img
                                    src="assets/imgs/page/homepage2/clock.png"
                                    alt="Ecom"
                                  />
                                </a>
                              </div>
                              <div className="info-right">
                                <a
                                  className="color-brand-3 font-xs-bold"
                                  href="shop-single-product-3.html"
                                >
                                  Class 4K UHD (2160P) LED Roku Smart TV HDR
                                </a>
                                <div className="rating">
                                  <img src={star.src} alt="Ecom" />
                                  <img src={star.src} alt="Ecom" />
                                  <img src={star.src} alt="Ecom" />
                                  <img src={star.src} alt="Ecom" />
                                  <img src={star.src} alt="Ecom" />
                                  <span className="font-xs color-gray-500">
                                    {" "}
                                    (65)
                                  </span>
                                </div>
                                <div className="price-info">
                                  <strong className="font-md-bold color-brand-3 price-main">
                                    $2900
                                  </strong>
                                  <span className="color-gray-500 font-sm price-line">
                                    $3200
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="card-grid-style-2 card-grid-none-border border-bottom mb-10">
                              <div className="image-box">
                                <a href="shop-single-product-3.html">
                                  <img
                                    src="assets/imgs/page/homepage2/airpod.png"
                                    alt="Ecom"
                                  />
                                </a>
                              </div>
                              <div className="info-right">
                                <a
                                  className="color-brand-3 font-xs-bold"
                                  href="shop-single-product-3.html"
                                >
                                  HP 11.6&quot; Chromebook, AMD A4, 4GB RAM,
                                  32GB Storage
                                </a>
                                <div className="rating">
                                  <img src={star.src} alt="Ecom" />
                                  <img src={star.src} alt="Ecom" />
                                  <img src={star.src} alt="Ecom" />
                                  <img src={star.src} alt="Ecom" />
                                  <img src={star.src} alt="Ecom" />
                                  <span className="font-xs color-gray-500">
                                    {" "}
                                    (65)
                                  </span>
                                </div>
                                <div className="price-info">
                                  <strong className="font-md-bold color-brand-3 price-main">
                                    $160
                                  </strong>
                                  <span className="color-gray-500 font-sm price-line">
                                    $168
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="swiper-button-next swiper-button-next-style-2 swiper-button-next-bestseller"></div>
                      <div className="swiper-button-prev swiper-button-prev-style-2 swiper-button-prev-bestseller"></div> */}
                    </div>
                  </div>
                </div>
                <div className="box-slider-item">
                  <div className="head pb-15 border-brand-2">
                    <h5 className="color-gray-900">Product Tags</h5>
                  </div>
                  <div className="content-slider mb-50">
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Games
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Electronics
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Video
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Cellphone
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Indoor
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      VGA Card
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      USB
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Lightning
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Camera
                    </a>
                    <a className="btn btn-border" href="shop-grid.html">
                      Window
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Air Vent
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Bedroom
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Laptop
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Dashboard
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Keyboard
                    </a>
                  </div>
                </div>
                <div className="banner-right h-500 text-center mb-30">
                  <span className="text-no font-11">No.9</span>
                  <h5 className="font-23 mt-20">
                    Sensitive Touch
                    <br className="d-none d-lg-block" />
                    without fingerprint
                  </h5>
                  <p className="text-desc font-16 mt-15">
                    Smooth handle and accurate click
                  </p>
                  <a href="shop-single-product-2.html">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <InfoSection />
        <div
          className="modal fade"
          id="ModalFiltersForm"
          tabindex="-1"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content apply-job-form">
              <div className="modal-header">
                <h5 className="modal-title color-gray-1000 filters-icon">
                  Addvance Fillters
                </h5>
                <button
                  className="btn-close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-30">
                <div className="row">
                  <div className="col-w-1">
                    <h6 className="color-gray-900 mb-0">Brands</h6>
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" checked="checked" />
                          <span className="text-small">Apple</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Samsung</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Baseus</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Remax</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Handtown</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Elecom</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Razer</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Auto Focus</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Nillkin</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Logitech</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">ChromeBook</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="col-w-1">
                    <h6 className="color-gray-900 mb-0">Special offers</h6>
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">On sale</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" checked="checked" />
                          <span className="text-small">FREE shipping</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Big deals</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Shop Mall</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                    </ul>
                    <h6 className="color-gray-900 mb-0 mt-40">
                      Ready to ship in
                    </h6>
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">1 business day</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" checked="checked" />
                          <span className="text-small">
                            1&ndash;3 business days
                          </span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">in 1 week</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Shipping now</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="col-w-1">
                    <h6 className="color-gray-900 mb-0">Ordering options</h6>
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Accepts gift cards</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Customizable</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" checked="checked" />
                          <span className="text-small">
                            Can be gift-wrapped
                          </span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Installment 0%</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                    </ul>
                    <h6 className="color-gray-900 mb-0 mt-40">Rating</h6>
                    <ul className="list-checkbox">
                      <li className="mb-5">
                        <a href="#">
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                            (5 stars)
                          </span>
                        </a>
                      </li>
                      <li className="mb-5">
                        <a href="#">
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img
                            src="assets/imgs/template/icons/star-gray.svg"
                            alt="Ecom"
                          />
                          <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                            (4 stars)
                          </span>
                        </a>
                      </li>
                      <li className="mb-5">
                        <a href="#">
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img
                            src="assets/imgs/template/icons/star-gray.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star-gray.svg"
                            alt="Ecom"
                          />
                          <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                            (3 stars)
                          </span>
                        </a>
                      </li>
                      <li className="mb-5">
                        <a href="#">
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img
                            src="assets/imgs/template/icons/star-gray.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star-gray.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star-gray.svg"
                            alt="Ecom"
                          />
                          <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                            (2 stars)
                          </span>
                        </a>
                      </li>
                      <li className="mb-5">
                        <a href="#">
                          <img src={star.src} alt="Ecom" />
                          <img
                            src="assets/imgs/template/icons/star-gray.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star-gray.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star-gray.svg"
                            alt="Ecom"
                          />
                          <img
                            src="assets/imgs/template/icons/star-gray.svg"
                            alt="Ecom"
                          />
                          <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                            (1 star)
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-w-2">
                    <h6 className="color-gray-900 mb-0">Material</h6>
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Nylon (8)</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Tempered Glass (5)</span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" checked="checked" />
                          <span className="text-small">
                            Liquid Silicone Rubber (5)
                          </span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">
                            Aluminium Alloy (3)
                          </span>
                          <span className="checkmark"></span>
                        </label>
                      </li>
                    </ul>
                    <h6 className="color-gray-900 mb-20 mt-40">Product tags</h6>
                    <div>
                      <a className="btn btn-border mr-5" href="#">
                        Games
                      </a>
                      <a className="btn btn-border mr-5" href="#">
                        Electronics
                      </a>
                      <a className="btn btn-border mr-5" href="#">
                        Video
                      </a>
                      <a className="btn btn-border mr-5" href="#">
                        Cellphone
                      </a>
                      <a className="btn btn-border mr-5" href="#">
                        Indoor
                      </a>
                      <a className="btn btn-border mr-5" href="#">
                        VGA Card
                      </a>
                      <a className="btn btn-border mr-5" href="#">
                        USB
                      </a>
                      <a className="btn btn-border mr-5" href="#">
                        Lightning
                      </a>
                      <a className="btn btn-border mr-5" href="#">
                        Camera
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer justify-content-start pl-30">
                <a className="btn btn-buy w-auto" href="#">
                  Apply Fillter
                </a>
                <a className="btn font-sm-bold color-gray-500" href="#">
                  Reset Fillter
                </a>
              </div>
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
          <div className="modal-dialog modal-xl">
            <div className="modal-content apply-job-form">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="modal-body p-30">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="gallery-image">
                      <div className="galleries-2">
                        <div className="detail-gallery">
                          <div className="product-image-slider-2">
                            <Zoom
                              img={img2.src}
                              zoomScale={2}
                              width={400}
                              height={420}
                              transitionTime={0.5}
                            />
                          </div>
                        </div>
                        <div className="slider-nav-thumbnails-2">
                          <Swiper
                            slidesPerView={4}
                            loop={true}
                            pagination={{
                              clickable: true,
                            }}
                            spaceBetween={50}
                            calculateHeight={true}
                            modules={[Pagination]}
                            className="mySwiper"
                          >
                            <SwiperSlide>
                              {" "}
                              <div>
                                {" "}
                                <div className="item-thumb">
                                  <img src={img1.src} alt="product image" />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              {" "}
                              <div>
                                {" "}
                                <div className="item-thumb">
                                  <img src={img1.src} alt="product image" />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              {" "}
                              <div>
                                {" "}
                                <div className="item-thumb">
                                  <img src={img1.src} alt="product image" />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              {" "}
                              <div>
                                {" "}
                                <div className="item-thumb">
                                  <img src={img1.src} alt="product image" />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              {" "}
                              <div>
                                {" "}
                                <div className="item-thumb">
                                  <img src={img1.src} alt="product image" />
                                </div>
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                    </div>
                    <div className="box-tags">
                      <div className="d-inline-block mr-25">
                        <span className="font-sm font-medium color-gray-900">
                          Category:
                        </span>
                        <a className="link" href="#">
                          Smartphones
                        </a>
                      </div>
                      <div className="d-inline-block">
                        <span className="font-sm font-medium color-gray-900">
                          Tags:
                        </span>
                        <a className="link" href="#">
                          Blue
                        </a>
                        ,
                        <a className="link" href="#">
                          Smartphone
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="product-info">
                      <h5 className="mb-15">
                        SAMSUNG Galaxy S22 Ultra, 8K Camera & Video, Brightest
                        Display Screen, S Pen Pro
                      </h5>
                      <div className="info-by">
                        <span className="bytext color-gray-500 font-xs font-medium">
                          by
                        </span>
                        <a
                          className="byAUthor color-gray-900 font-xs font-medium"
                          href="shop-vendor-list.html"
                        >
                          {" "}
                          Ecom Tech
                        </a>
                        <div className="rating d-inline-block">
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <span className="font-xs color-gray-500 font-medium">
                            {" "}
                            (65 reviews)
                          </span>
                        </div>
                      </div>
                      <div className="border-bottom pt-10 mb-20"></div>
                      <div className="box-product-price">
                        <h3 className="color-brand-3 price-main d-inline-block mr-10">
                          $2856.3
                        </h3>
                        <span className="color-gray-500 price-line font-xl line-througt">
                          $3225.6
                        </span>
                      </div>
                      <div className="product-description mt-10 color-gray-900">
                        <ul className="list-dot">
                          <li>8k super steady video</li>
                          <li>Nightography plus portait mode</li>
                          <li>50mp photo resolution plus bright display</li>
                          <li>Adaptive color contrast</li>
                          <li>premium design & craftmanship</li>
                          <li>Long lasting battery plus fast charging</li>
                        </ul>
                      </div>
                      <div className="box-product-color mt-10">
                        <p className="font-sm color-gray-900">
                          Color:
                          <span className="color-brand-2 nameColor">
                            Pink Gold
                          </span>
                        </p>
                        <ul className="list-colors">
                          <li className="disabled">
                            <img
                              src="assets/imgs/page/product/img-gallery-1.jpg"
                              alt="Ecom"
                              title="Pink"
                            />
                          </li>
                          <li>
                            <img
                              src="assets/imgs/page/product/img-gallery-2.jpg"
                              alt="Ecom"
                              title="Gold"
                            />
                          </li>
                          <li>
                            <img
                              src="assets/imgs/page/product/img-gallery-3.jpg"
                              alt="Ecom"
                              title="Pink Gold"
                            />
                          </li>
                          <li>
                            <img
                              src="assets/imgs/page/product/img-gallery-4.jpg"
                              alt="Ecom"
                              title="Silver"
                            />
                          </li>
                          <li className="active">
                            <img
                              src="assets/imgs/page/product/img-gallery-5.jpg"
                              alt="Ecom"
                              title="Pink Gold"
                            />
                          </li>
                          <li className="disabled">
                            <img
                              src="assets/imgs/page/product/img-gallery-6.jpg"
                              alt="Ecom"
                              title="Black"
                            />
                          </li>
                          <li className="disabled">
                            <img
                              src="assets/imgs/page/product/img-gallery-7.jpg"
                              alt="Ecom"
                              title="Red"
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="box-product-style-size mt-10">
                        <div className="row">
                          <div className="col-lg-12 mb-10">
                            <p className="font-sm color-gray-900">
                              Style:
                              <span className="color-brand-2 nameStyle">
                                S22
                              </span>
                            </p>
                            <ul className="list-styles">
                              <li className="disabled" title="S22 Ultra">
                                S22 Ultra
                              </li>
                              <li className="active" title="S22">
                                S22
                              </li>
                              <li title="S22 + Standing Cover">
                                S22 + Standing Cover
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-12 mb-10">
                            <p className="font-sm color-gray-900">
                              Size:
                              <span className="color-brand-2 nameSize">
                                512GB
                              </span>
                            </p>
                            <ul className="list-sizes">
                              <li className="disabled" title="1GB">
                                1GB
                              </li>
                              <li className="active" title="512 GB">
                                512 GB
                              </li>
                              <li title="256 GB">256 GB</li>
                              <li title="128 GB">128 GB</li>
                              <li className="disabled" title="64GB">
                                64GB
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="buy-product mt-5">
                        <p className="font-sm mb-10">Quantity</p>
                        <div className="box-quantity">
                          <div className="input-quantity">
                            <input
                              className="font-xl color-brand-3"
                              type="text"
                              value="1"
                            />
                            <span className="minus-cart"></span>
                            <span className="plus-cart"></span>
                          </div>
                          <div className="button-buy">
                            <a className="btn btn-cart" href="shop-cart.html">
                              Add to cart
                            </a>
                            <a
                              className="btn btn-buy"
                              href="shop-checkout.html"
                            >
                              Buy now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ShopGrid;
