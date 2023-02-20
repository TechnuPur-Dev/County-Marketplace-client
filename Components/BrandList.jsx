import microsoft from "../public/imgs/slider/logo/microsoft.svg";
import sony from "../public/imgs/slider/logo/sony.svg";
import acer from "../public/imgs/slider/logo/acer.svg";
import nokia from "../public/imgs/slider/logo/nokia.svg";
import assus from "../public/imgs/slider/logo/assus.svg";
import casio from "../public/imgs/slider/logo/casio.svg";
import dell from "../public/imgs/slider/logo/dell.svg";
import panasonic from "../public/imgs/slider/logo/panasonic.svg";
import vaio from "../public/imgs/slider/logo/vaio.svg";
import sharp from "../public/imgs/slider/logo/sharp.svg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import SwiperCore, { Pagination } from "swiper/core";
SwiperCore.use([Pagination]);
const BrandList = () => {
  return (
    <div className="section-box">
      <div className="container">
        <div className="list-brands list-none-border">
          <div className="box-swiper">
            <div className="swiper-container swiper-group-10">
              <div className="swiper-wrapper">
                <Swiper
                breakpoints= {{
                1360: {
                    slidesPerView: 9
                },
                1199: {
                    slidesPerView: 8
                },
                800: {
                    slidesPerView: 6
                },
                390: {
                    slidesPerView: 4
                },
                250: {
                    slidesPerView: 3,
                    slidesPerGroup: 1
                }
            }}
                  
                  
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={microsoft.src} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={sony.src} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={acer.src} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={nokia.src} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={assus.src} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={casio.src} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={dell.src} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={panasonic.src} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={vaio.src} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <a href="shop-grid.html">
                        <img src={sharp.src} alt="Ecom" />
                      </a>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandList;
