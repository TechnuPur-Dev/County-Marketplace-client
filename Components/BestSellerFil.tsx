import React from 'react'
import star from "../public/imgs/template/icons/star.svg";

const BestSellerFil = () => {
  return (
    <>
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
      
    </>
  )
}

export default BestSellerFil
