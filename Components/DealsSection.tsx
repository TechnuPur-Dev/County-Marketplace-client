import React, { useState } from "react";
// import banner2 from "../imgs/page/homepage6/banner2.png";
import { Swiper, SwiperSlide } from "swiper/react";
// import '../css/navigation.min.css'
const DealsSection = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  return (
    <section className="section-box mt-35">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="banner-left" style={{ backgroundImage: "url(../imgs/page/homepage6/banner1.png)" }}>
              <div className="box-adsolute-banner">
                <h5 className="color-gray-900">Grocery</h5>
                <a className="btn btn-link-brand-2 text-capitalize">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-30">
            <div className="box-swiper">
              <div className="swiper-container swiper-banner-1">
                <Swiper
                  slidesPerView={1}
                  slidesPerGroup={1}
                  spaceBetween={0}
                  loop={true}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                  }}
                  autoplay={{ delay: 10000 }}
                  onSwiper={(swiper) => setSwiperRef(swiper)}
                  className="mySwiper"
                >
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="banner-middle"
                      style={{ backgroundImage: `url(../imgs/page/homepage6/banner2.png)` }}
                    >
                      <div className="box-adsolute-banner">
                        <h6 className="color-gray-900 mb-10">
                          Big & Fresh Offers
                        </h6>
                        <h2 className="color-gray-1000 mb-5">Kids</h2>
                        <h6 className="sale-tag">Sale On This Weekend</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="banner-middle"
                      style={{ backgroundImage: `url(../imgs/page/homepage6/banner2.png)` }}
                    >
                      <div className="box-adsolute-banner">
                        <h6 className="color-gray-900 mb-10">
                          Big & Fresh Offers
                        </h6>
                        <h2 className="color-gray-1000 mb-5">Games</h2>
                        <h6 className="sale-tag">Sale On This Weekend</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="banner-middle"
                      style={{ backgroundImage: `url(../imgs/page/homepage6/banner2.png)` }}
                    >
                      <div className="box-adsolute-banner">
                        <h6 className="color-gray-900 mb-10">
                          Big & Fresh Offers
                        </h6>
                        <h2 className="color-gray-1000 mb-5">Electronics</h2>
                        <h6 className="sale-tag">Sale On This Weekend</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="banner-middle"
                      style={{ backgroundImage: `url(../imgs/page/homepage6/banner2.png)` }}
                    >
                      <div className="box-adsolute-banner">
                        <h6 className="color-gray-900 mb-10">
                          Big & Fresh Offers
                        </h6>
                        <h2 className="color-gray-1000 mb-5">
                          Medicine & Fitness
                        </h2>
                        <h6 className="sale-tag">Sale On This Weekend</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="banner-middle"
                      style={{ backgroundImage: `url(../imgs/page/homepage6/banner2.png)` }}
                    >
                      <div className="box-adsolute-banner">
                        <h6 className="color-gray-900 mb-10">
                          Big & Fresh Offers
                        </h6>
                        <h2 className="color-gray-1000 mb-5">Fashion</h2>
                        <h6 className="sale-tag">Sale On This Weekend</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="banner-middle"
                      style={{ backgroundImage: `url(../imgs/page/homepage6/banner2.png)` }}
                    >
                      <div className="box-adsolute-banner">
                        <h6 className="color-gray-900 mb-10">
                          Big & Fresh Offers
                        </h6>
                        <h2 className="color-gray-1000 mb-5">Food Court</h2>
                        <h6 className="sale-tag">Sale On This Weekend</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="banner-middle"
                      style={{ backgroundImage: `url(../imgs/page/homepage6/banner2.png)` }}
                    >
                      <div className="box-adsolute-banner">
                        <h6 className="color-gray-900 mb-10">
                          Big & Fresh Offers
                        </h6>
                        <h2 className="color-gray-1000 mb-5">
                          Automotive & Agriculture
                        </h2>
                        <h6 className="sale-tag">Sale On This Weekend</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div
                  className="  btn-next swiper-button-next-style-4"
                  onClick={nextHandler}
                ></div>
                <div
                  className=" btn-prev swiper-button-prev-style-4"
                  onClick={prevHandler}
                ></div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="banner-right-home6">
              <div className="box-adsolute-banner">
                <h5 className="color-gray-900">Services</h5>
                <a className="btn btn-link-brand-2 text-capitalize">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
