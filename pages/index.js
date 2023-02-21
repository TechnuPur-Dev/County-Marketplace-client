import Head from "next/head";
import { Inter } from "@next/font/google";
import Banner from "../Components/Banner";
import BestSeller from "../Components/BestSeller";
import CategoriesSection from "../Components/CategoriesSection";
import DealsSection from "../Components/DealsSection";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import InfoSection from "../Components/InfoSection";
import Loader from "../Components/Loaderr";
import Topbar from "../Components/Topbar";
import TopBrands from "../Components/TopBrands";
import ScrollToTop from "react-scroll-to-top";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../public/imgs/page/product/img-gallery-1.jpg";
import img2 from "../public/imgs/page/product/img-gallery-2.jpg";
import star from "../public/imgs/template/icons/star.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
export default function Home() {
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
        <DealsSection />
        <InfoSection />
        <CategoriesSection />
        <Banner />
        <BestSeller />
        <TopBrands />
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
                            <InnerImageZoom src={img2.src} />
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
                                  <img
                                    src={`${img1.src}`}
                                    alt="product image"
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              {" "}
                              <div>
                                {" "}
                                <div className="item-thumb">
                                  <img
                                    src={`${img1.src}`}
                                    alt="product image"
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              {" "}
                              <div>
                                {" "}
                                <div className="item-thumb">
                                  <img
                                    src={`${img1.src}`}
                                    alt="product image"
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              {" "}
                              <div>
                                {" "}
                                <div className="item-thumb">
                                  <img
                                    src={`${img1.src}`}
                                    alt="product image"
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              {" "}
                              <div>
                                {" "}
                                <div className="item-thumb">
                                  <img
                                    src={`${img1.src}`}
                                    alt="product image"
                                  />
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
                          <img src={`${star.src}`} alt="Ecom" />
                          <img src={`${star.src}`} alt="Ecom" />
                          <img src={`${star.src}`} alt="Ecom" />
                          <img src={`${star.src}`} alt="Ecom" />
                          <img src={`${star.src}`} alt="Ecom" />
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
}
