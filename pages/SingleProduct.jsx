import React from "react";
import Loader from "../Components/Loaderr";
import Topbar from "../Components/Topbar";
import Header from "../Components/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../Components/Footer";
import InfoSection from "../Components/InfoSection";
import star from "../public/imgs/template/icons/star.svg";
import img1 from "../public/imgs/page/product/img-gallery-1.jpg";
import img2 from "../public/imgs/page/product/img-gallery-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerAd from '../public/imgs/page/product/banner-ads.png';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { Mousewheel, Pagination } from "swiper";
import dynamic from "next/dynamic";
import QuickModal from "@/Components/QuickModal";
const SingleProduct = (props) => {
 
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
      <Topbar />
       <Header categories={props.categories} />
      <main className="main">
        <div className="section-box">
          <div className="breadcrumbs-div">
            <div className="container">
              <ul className="breadcrumb">
                <li>
                  <a className="font-xs color-gray-1000" href="index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a className="font-xs color-gray-500" href="shop-grid.html">
                    Electronics
                  </a>
                </li>
                <li>
                  <a className="font-xs color-gray-500" href="shop-grid.html">
                    Cell phone
                  </a>
                </li>
                <li>
                  <a className="font-xs color-gray-500" href="shop-grid.html">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="section-box shop-template">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="gallery-image">
                  <div className="galleries">
                    <div className="detail-gallery">
                      <label className="label">-17%</label>
                      <div className="product-image-slider">
                      <InnerImageZoom src={img2.src} />
                       </div>
                    </div>

                   
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
              <div className="col-lg-6">
                <h3 className="color-brand-3 mb-25">
                  Samsung 36 French door 28 cu. ft. Smart Energy Star
                  Refrigerator
                </h3>
                <span className="bytext">by</span>
                <a className="byAUthor" href="shop-vendor-single.html">
                  {" "}
                  Ecom Tech
                </a>
                <div className="rating mt-5">
                  <img src={star.src} alt="Ecom" />
                  <img src={star.src} alt="Ecom" />
                  <img src={star.src} alt="Ecom" />
                  <img src={star.src} alt="Ecom" />
                  <img src={star.src} alt="Ecom" />
                  <span className="font-xs color-gray-500"> (65)</span>
                </div>
                <div className="border-bottom pt-20 mb-40"></div>
                <div className="box-product-price">
                  <h3 className="color-brand-3 price-main d-inline-block mr-10">
                    $2856.3
                  </h3>
                  <span className="color-gray-500 price-line font-xl line-througt">
                    $3225.6
                  </span>
                </div>
                <div className="product-description mt-20 color-gray-900">
                  – Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />– Nulla sit amet diam elementum, vehicula elit nec,
                  accumsan velit.
                  <br />– Integer consectetur lacus nec vestibulum auctor.
                  <br />– Nulla suscipit tellus vel sem rhoncus auctor.
                </div>
                <div className="buy-product mt-20">
                  <p className="font-sm mb-20">Quantity</p>
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
                      <a className="btn btn-buy" href="shop-checkout.html">
                        Buy now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-bottom pt-30 mb-20"></div>
                <a className="mr-30" href="shop-wishlist.html">
                  <span className="btn btn-wishlist mr-5 opacity-100 transform-none"></span>
                  <span className="font-md color-gray-900">Add to Wish list</span>
                </a>
                <a href="shop-compare.html">
                  <span className="btn btn-compare mr-5 opacity-100 transform-none"></span>
                  <span className="font-md color-gray-900">Add to Compare</span>
                </a>
                <div className=" mt-10 font-md color-gray-900">
                 
                 
                 
                  
                  
                  <span className="font-md color-gray-900">  Tags: Blue, Smartphone</span>
                 
                </div>
                
              </div>
            </div>
            <div className="border-bottom pt-20 mb-40"></div>
            <h4 className="color-brand-3 mb-20">Frequently Bought Together</h4>
            <div className="box-bought-together">
              <div className="box-product-bought">
                <div className="product-bought">
                  <img
                    src="assets/imgs/page/product/img-bought.png"
                    alt="Ecom"
                  />
                </div>
                <div className="product-bought">
                  <img
                    src="assets/imgs/page/product/img-bought2.png"
                    alt="Ecom"
                  />
                </div>
              </div>
              <div className="price-bought">
                <h3 className="color-brand-3 mr-10">$2856.3</h3>
                <span className="font-lg color-gray-900">(3 items)</span>
                <div className="box-btn-add-cart">
                  <a className="btn btn-cart" href="shop-cart.html">
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <label className="cb-container-2">
              <input type="checkbox" checked="checked" />
              <span className="font-md color-brand-3">
                <strong>This item:</strong>iPhone 12 Pro Max 128GB Pacific Blue
                - $1,099.00
              </span>
              <span className="checkmark"></span>
            </label>
            <label className="cb-container-2">
              <input type="checkbox" checked="checked" />
              <span className="font-md color-brand-3">
                Apple AirPods Pro, Active Noise Cancellation, Custom Fit -
                $197.00
              </span>
              <span className="checkmark"></span>
            </label>
            <label className="cb-container-2">
              <input type="checkbox" checked="checked" />
              <span className="font-md color-brand-3">
                Apple iMac 24 All-In-One Computer, Apple M1, 8GB RAM, 512GB
                SSD, macOS Big Sur, Green, MGPJ3LL/A - $1,599.00
              </span>
              <span className="checkmark"></span>
            </label>
            <div className="border-bottom pt-30 mb-10"></div>
          </div>
        </section>
        <section className="section-box shop-template">
          <div className="container">
            <div className="pt-30 mb-10">
              <ul className="nav nav-tabs nav-tabs-product" role="tablist">
                <li>
                  <a
                    className="active"
                    href="#tab-description"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-description"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-specification"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-specification"
                    aria-selected="true"
                  >
                    Specification
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-additional"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-additional"
                    aria-selected="true"
                  >
                    Additional information
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-reviews"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-reviews"
                    aria-selected="true"
                  >
                    Reviews (2)
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-vendor"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-vendor"
                    aria-selected="true"
                  >
                    Vendor
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade active show"
                  id="tab-description"
                  role="tabpanel"
                  aria-labelledby="tab-description"
                >
                  <div className="display-text-short">
                    <p>
                      It is a paradisematic country, in which roasted parts of
                      sentences fly into your mouth. Even the all-powerful
                      Pointing has no control about the blind texts it is an
                      almost unorthographic life One day however a small line of
                      blind text by the name of Lorem Ipsum decided to leave for
                      the far World of Grammar. The Big Oxmox advised her not to
                      do so, because there were thousands of bad Commas, wild
                      Question Marks and devious Semikoli, but the Little Blind
                      Text didn’t listen. She packed her seven versalia, put her
                      initial into the belt and made herself on the way.
                    </p>
                    <p>
                      When she reached the first hills of the Italic Mountains,
                      she had a last view back on the skyline of her hometown
                      Bookmarksgrove, the headline of Alphabet Village and the
                      subline of her own road, the Line Lane. Pityful a rethoric
                      question ran over her cheek, then she continued her way.
                      On her way she met a copy. The copy warned the Little
                      Blind Text, that where it came from it would have been
                      rewritten a thousand times and everything that was left
                      from its origin would be the word “and” and the Little
                      Blind Text should turn around and return to its own, safe
                      country. It is a paradisematic country, in which roasted
                      parts of sentences fly into your mouth. Even the
                      all-powerful Pointing has no control about the blind texts
                      it is an almost unorthographic life One day however a
                      small line of blind text by the name of Lorem Ipsum
                      decided to leave for the far World of Grammar.
                    </p>
                    <p>
                      <img
                        src="assets/imgs/page/product/product-banner.jpg"
                        alt="Ecom"
                      />
                    </p>
                    <p>
                      It is a paradisematic country, in which roasted parts of
                      sentences fly into your mouth. Even the all-powerful
                      Pointing has no control about the blind texts it is an
                      almost unorthographic life One day however a small line of
                      blind text by the name of Lorem Ipsum decided to leave for
                      the far World of Grammar. The Big Oxmox advised her not to
                      do so, because there were thousands of bad Commas, wild
                      Question Marks and devious Semikoli, but the Little Blind
                      Text didn’t listen. She packed her seven versalia, put her
                      initial into the belt and made herself on the way.
                    </p>
                    <p>
                      <img
                        src="assets/imgs/page/product/product-banner-2.jpg"
                        alt="Ecom"
                      />
                    </p>
                    <p>
                      When she reached the first hills of the Italic Mountains,
                      she had a last view back on the skyline of her hometown
                      Bookmarksgrove, the headline of Alphabet Village and the
                      subline of her own road, the Line Lane. Pityful a rethoric
                      question ran over her cheek, then she continued her way.
                      On her way she met a copy. The copy warned the Little
                      Blind Text, that where it came from it would have been
                      rewritten a thousand times and everything that was left
                      from its origin would be the word “and” and the Little
                      Blind Text should turn around and return to its own, safe
                      country.
                    </p>
                  </div>
                  <div className="mt-20 text-center">
                    <a href='#' className="btn btn-border font-sm-bold pl-80 pr-80 btn-expand-more">
                      More Details
                    </a>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-specification"
                  role="tabpanel"
                  aria-labelledby="tab-specification"
                >
                  <h5 className="mb-25">Specification</h5>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <tr>
                        <td>Mode</td>
                        <td>#SK10923</td>
                      </tr>
                      <tr>
                        <td>Brand</td>
                        <td>SamSung</td>
                      </tr>
                      <tr>
                        <td>Size</td>
                        <td>6</td>
                      </tr>
                      <tr>
                        <td>Finish</td>
                        <td>Pacific Blue</td>
                      </tr>
                      <tr>
                        <td>Origin of Country</td>
                        <td>United States</td>
                      </tr>
                      <tr>
                        <td>Manufacturer</td>
                        <td>USA</td>
                      </tr>
                      <tr>
                        <td>Released Year</td>
                        <td>2022</td>
                      </tr>
                      <tr>
                        <td>Warranty</td>
                        <td>International</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-additional"
                  role="tabpanel"
                  aria-labelledby="tab-additional"
                >
                  <h5 className="mb-25">Additional information</h5>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <td>Weight</td>
                          <td>
                            <p>0.240 kg</p>
                          </td>
                        </tr>
                        <tr>
                          <td>Dimensions</td>
                          <td>
                            <p>0.74 x 7.64 x 16.08 cm</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-reviews"
                  role="tabpanel"
                  aria-labelledby="tab-reviews"
                >
                  <div className="comments-area">
                    <div className="row">
                      <div className="col-lg-8">
                        <h4 className="mb-30 title-question">
                          Customer questions &amp; answers
                        </h4>
                        <div className="comment-list">
                          <div className="single-comment justify-content-between d-flex mb-30 hover-up">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb text-center">
                                <img
                                  src="assets/imgs/page/product/author-2.png"
                                  alt="Ecom"
                                />
                                <a className="font-heading text-brand" href="#">
                                  Sienna
                                </a>
                              </div>
                              <div className="desc">
                                <div className="d-flex justify-content-between mb-10">
                                  <div className="d-flex align-items-center">
                                    <span className="font-xs color-gray-700">
                                      December 4, 2022 at 3:12 pm
                                    </span>
                                  </div>
                                  <div className="product-rate d-inline-block">
                                    <div
                                      className="product-rating"
                                      style={{ width: "100%" }}
                                    ></div>
                                  </div>
                                </div>
                                <p className="mb-10 font-sm color-gray-900">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Delectus, suscipit
                                  exercitationem accusantium obcaecati quos
                                  voluptate nesciunt facilis itaque modi commodi
                                  dignissimos sequi repudiandae minus ab
                                  deleniti totam officia id incidunt?
                                  <a className="reply" href="#">
                                    {" "}
                                    Reply
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="single-comment justify-content-between d-flex mb-30 ml-30 hover-up">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb text-center">
                                <img
                                  src="assets/imgs/page/product/author-3.png"
                                  alt="Ecom"
                                />
                                <a className="font-heading text-brand" href="#">
                                  Brenna
                                </a>
                              </div>
                              <div className="desc">
                                <div className="d-flex justify-content-between mb-10">
                                  <div className="d-flex align-items-center">
                                    <span className="font-xs color-gray-700">
                                      December 4, 2022 at 3:12 pm
                                    </span>
                                  </div>
                                  <div className="product-rate d-inline-block">
                                    <div
                                      className="product-rating"
                                      style={{ width: "80%" }}
                                    ></div>
                                  </div>
                                </div>
                                <p className="mb-10 font-sm color-gray-900">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Delectus, suscipit
                                  exercitationem accusantium obcaecati quos
                                  voluptate nesciunt facilis itaque modi commodi
                                  dignissimos sequi repudiandae minus ab
                                  deleniti totam officia id incidunt?
                                  <a className="reply" href="#">
                                    {" "}
                                    Reply
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="single-comment justify-content-between d-flex hover-up">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb text-center">
                                <img
                                  src="assets/imgs/page/product/author-4.png"
                                  alt="Ecom"
                                />
                                <a className="font-heading text-brand" href="#">
                                  Gemma
                                </a>
                              </div>
                              <div className="desc">
                                <div className="d-flex justify-content-between mb-10">
                                  <div className="d-flex align-items-center">
                                    <span className="font-xs color-gray-700">
                                      December 4, 2022 at 3:12 pm
                                    </span>
                                  </div>
                                  <div className="product-rate d-inline-block">
                                    <div
                                      className="product-rating"
                                      style={{ width: "80%" }}
                                    ></div>
                                  </div>
                                </div>
                                <p className="mb-10 font-sm color-gray-900">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Delectus, suscipit
                                  exercitationem accusantium obcaecati quos
                                  voluptate nesciunt facilis itaque modi commodi
                                  dignissimos sequi repudiandae minus ab
                                  deleniti totam officia id incidunt?
                                  <a className="reply" href="#">
                                    {" "}
                                    Reply
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <h4 className="mb-30 title-question">Customer reviews</h4>
                        <div className="d-flex mb-30">
                          <div className="product-rate d-inline-block mr-15">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                          <h6>4.8 out of 5</h6>
                        </div>
                        <div className="progress">
                          <span>5 star</span>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            50%
                          </div>
                        </div>
                        <div className="progress">
                          <span>4 star</span>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            25%
                          </div>
                        </div>
                        <div className="progress">
                          <span>3 star</span>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "45%" }}
                            aria-valuenow="45"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            45%
                          </div>
                        </div>
                        <div className="progress">
                          <span>2 star</span>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "65%" }}
                            aria-valuenow="65"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            65%
                          </div>
                        </div>
                        <div className="progress mb-30">
                          <span>1 star</span>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "85%" }}
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            85%
                          </div>
                        </div>
                        <a className="font-xs text-muted" href="#">
                          How are ratings calculated?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-vendor"
                  role="tabpanel"
                  aria-labelledby="tab-vendor"
                >
                  <div className="vendor-logo d-flex mb-30">
                    <img src="assets/imgs/page/product/futur.png" alt="" />
                    <div className="vendor-name ml-15">
                      <h6>
                        <a href="shop-vendor-single.html">Futur Tech.</a>
                      </h6>
                      <div className="product-rate-cover text-end">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (32 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul className="contact-infor mb-50">
                    <li>
                      <img
                        src="assets/imgs/page/product/icon-location.svg"
                        alt=""
                      />
                      <strong>Address:</strong>
                      <span>
                        {" "}
                        5171 W Campbell Ave undefined Kent, Utah 53127 United
                        States
                      </span>
                    </li>
                    <li>
                      <img
                        src="assets/imgs/page/product/icon-contact.svg"
                        alt=""
                      />
                      <strong>Contact Seller:</strong>
                      <span> (+91) - 540-025-553</span>
                    </li>
                  </ul>
                  <div className="d-flex mb-25">
                    <div className="mr-30">
                      <p className="color-brand-1 font-xs">Rating</p>
                      <h4 className="mb-0">92%</h4>
                    </div>
                    <div className="mr-30">
                      <p className="color-brand-1 font-xs">Ship on time</p>
                      <h4 className="mb-0">100%</h4>
                    </div>
                    <div>
                      <p className="color-brand-1 font-xs">Chat response</p>
                      <h4 className="mb-0">89%</h4>
                    </div>
                  </div>
                  <p className="font-sm color-gray-500 mb-15">
                    Noodles &amp; Company is an American fast-casual restaurant
                    that offers international and American noodle dishes and
                    pasta in addition to soups and salads. Noodles &amp; Company
                    was founded in 1995 by Aaron Kennedy and is headquartered in
                    Broomfield, Colorado. The company went public in 2013 and
                    recorded a $457 million revenue in 2017.In late 2018, there
                    were 460 Noodles &amp; Company locations across 29 states
                    and Washington, D.C.
                  </p>
                  <p className="font-sm color-gray-500">
                    Proin congue dapibus rhoncus. Curabitur ipsum orci,
                    malesuada in porttitor a, porttitor quis diam. Nunc at arcu
                    ut turpis facilisis volutpat. Proin tristique, mauris non
                    gravida dignissim, purus mauris malesuada tellus, in
                    tincidunt orci enim eget ligula. Quisque bibendum, ipsum id
                    malesuada placerat, purus felis vehicula risus, vel
                    fringilla justo erat ullamcorper ligula. Fusce congue
                    ullamcorper ligula, at commodo turpis molestie vel.
                  </p>
                </div>
                <div className="border-bottom pt-30 mb-50"></div>
                <h4 className="color-brand-3">Related Products</h4>
                <div className="list-products-5 mt-20">
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
                        <a href="shop-single-product-2.html">
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
                          Dell
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          Dell Optiplex 9020 Small Form Business Desktop Tower
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
                          <span className="color-gray-500 price-line">$3225.6</span>
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
                        <a href="shop-single-product-2.html">
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
                          HP
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          HP 24 All-in-One PC, Intel Core i3-1115G4, 4GB RAM
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
                          <span className="color-gray-500 price-line">$3225.6</span>
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
                        <a href="shop-single-product-2.html">
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
                          Gateway
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
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
                          <span className="color-gray-500 price-line">$3225.6</span>
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
                        <a href="shop-single-product-2.html">
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
                          HP
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          HP 22 All-in-One PC, Intel Pentium Silver J5040, 4GB
                          RAM
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
                          <span className="color-gray-500 price-line">$3225.6</span>
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
                        <a href="shop-single-product-2.html">
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
                          Sceptre
                        </a>
                        <br />
                        <a
                          className="color-brand-3 font-sm-bold"
                          href="shop-single-product-2.html"
                        >
                          Sceptre 24&quot; Professional Thin 75Hz 1080p LED
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
                          <span className="color-gray-500 price-line">$3225.6</span>
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
                <div className="border-bottom pt-20 mb-40"></div>
                <h4 className="color-brand-3">You may also like</h4>
                <div className="list-products-5 mt-20">
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
                        <a href="shop-single-product-3.html">
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
                          href="shop-single-product-3.html"
                        >
                          HP DeskJet 2755e Wireless Color All-in-One Printer
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
                          <span className="color-gray-500 price-line">$3225.6</span>
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
                        <a href="shop-single-product-3.html">
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
                          href="shop-single-product-3.html"
                        >
                          Razer Power Up Gaming Bundle V2 - Cynosa Lite
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
                          <span className="color-gray-500 price-line">$3225.6</span>
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
                        <a href="shop-single-product-3.html">
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
                          href="shop-single-product-3.html"
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
                          <span className="color-gray-500 price-line">$3225.6</span>
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
                        <a href="shop-single-product-3.html">
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
                          href="shop-single-product-3.html"
                        >
                          SAMSUNG Galaxy Tab A7 Lite, 8.7&quot; Tablet 32GB
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
                          <span className="color-gray-500 price-line">$3225.6</span>
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
                        <a href="shop-single-product-3.html">
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
                          href="shop-single-product-3.html"
                        >
                          HP 24mh FHD Monitor - Computer Monitor
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
                          <span className="color-gray-500 price-line">$3225.6</span>
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
                <div className="border-bottom pt-20 mb-40"></div>
                <h4 className="color-brand-3">Recently viewed items</h4>
                <div className="row mt-40">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card-grid-style-2 card-grid-none-border hover-up">
                      <div className="image-box">
                        <a href="shop-single-product-3.html">
                          <img
                            src="assets/imgs/page/homepage1/imgsp1.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <span className="font-xs color-gray-500">Apple</span>
                        <br />
                        <a
                          className="color-brand-3 font-xs-bold"
                          href="shop-single-product-3.html"
                        >
                          SAMSUNG Galaxy Tab A7 Lite, 8.7&quot; Tablet 32GB
                        </a>
                        <div className="rating">
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <span className="font-xs color-gray-500"> (65)</span>
                        </div>
                        <div className="price-info">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2556.3
                          </strong>
                          <span className="color-gray-500 price-line">$3225.6</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card-grid-style-2 card-grid-none-border hover-up">
                      <div className="image-box">
                        <a href="shop-single-product-3.html">
                          <img
                            src="assets/imgs/page/homepage1/imgsp2.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <span className="font-xs color-gray-500">Apple</span>
                        <br />
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
                          <span className="font-xs color-gray-500"> (65)</span>
                        </div>
                        <div className="price-info">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2556.3
                          </strong>
                          <span className="color-gray-500 price-line">$3225.6</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card-grid-style-2 card-grid-none-border hover-up">
                      <div className="image-box">
                        <a href="shop-single-product-3.html">
                          <img
                            src="assets/imgs/page/homepage1/imgsp1.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <span className="font-xs color-gray-500">Apple</span>
                        <br />
                        <a
                          className="color-brand-3 font-xs-bold"
                          href="shop-single-product-3.html"
                        >
                          HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch
                        </a>
                        <div className="rating">
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <span className="font-xs color-gray-500"> (65)</span>
                        </div>
                        <div className="price-info">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2556.3
                          </strong>
                          <span className="color-gray-500 price-line">$3225.6</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card-grid-style-2 card-grid-none-border hover-up">
                      <div className="image-box">
                        <a href="shop-single-product-3.html">
                          <img
                            src="assets/imgs/page/homepage1/imgsp2.png"
                            alt="Ecom"
                          />
                        </a>
                      </div>
                      <div className="info-right">
                        <span className="font-xs color-gray-500">Apple</span>
                        <br />
                        <a
                          className="color-brand-3 font-xs-bold"
                          href="shop-single-product-3.html"
                        >
                          Logitech H390 Wired Headset, Stereo Headphones
                        </a>
                        <div className="rating">
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <span className="font-xs color-gray-500"> (65)</span>
                        </div>
                        <div className="price-info">
                          <strong className="font-lg-bold color-brand-3 price-main">
                            $2556.3
                          </strong>
                          <span className="color-gray-500 price-line">$3225.6</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-bottom pt-20 mb-40"></div>
                <h4 className="color-brand-3">Similar products to compare</h4>
                <div className="list-products-5 mt-20">
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
                        <a href="shop-single-product-3.html">
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
                          href="shop-single-product-3.html"
                        >
                          Logitech MK345 Wireless Combo Full-Sized Keyboard
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
                          <span className="color-gray-500 price-line">$3225.6</span>
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
                        <a href="shop-single-product-3.html">
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
                          href="shop-single-product-3.html"
                        >
                          Logitech Brio 4K Webcam, Ultra 4K HD Video Calling
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
                          <span className="color-gray-500 price-line">$3225.6</span>
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
                        <a href="shop-single-product-3.html">
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
                          href="shop-single-product-3.html"
                        >
                          HP 24mh FHD Monitor - Computer Monitor
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
                          <span className="color-gray-500 price-line">$3225.6</span>
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
                        <a href="shop-single-product-3.html">
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
                          href="shop-single-product-3.html"
                        >
                          2022 Apple iMac with Retina 5K Display 8GB RAM
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
                          <span className="color-gray-500 price-line">$3225.6</span>
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
                        <a href="shop-single-product-3.html">
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
                          href="shop-single-product-3.html"
                        >
                          Seagate Portable 2TB External Hard Drive
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
                          <span className="color-gray-500 price-line">$3225.6</span>
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
            </div>
          </div>
        </section>
        <div className="container mt-20 mb-20">
          <div className="text-center">
            <a href="#">
              <img src={bannerAd.src} alt="Ecom" />
            </a>
          </div>
        </div>
        <InfoSection />
        <div
          className="modal fade"
          id="ModalFiltersForm"
          tabIndex="-1"
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
                    <h6 className="color-gray-900 mb-0 mt-40">Ready to ship in</h6>
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
                          <span className="text-small">Can be gift-wrapped</span>
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
                          <span className="text-small">Aluminium Alloy (3)</span>
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
          tabIndex="-1"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <QuickModal star={star} img1={img1} img2={img2}/>
        </div>
      </main>
      <Footer />
     
    </>
  );
};

export default dynamic (() => Promise.resolve(SingleProduct), {ssr: false})
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