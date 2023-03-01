import React from 'react'
import banner from '../public/imgs/page/homepage8/ads1.png'
const Banner = () => {
  return (
    <div className="section-box mt-30 mb-50">
      <div className="container">
        <div className="box-ads-2 box-ads-3"> <img src={`${banner.src}`} alt="Ecom"/>
          <div className="ads-info">
            <h6 className="color-white mb-5">Best Book Colletion</h6>
            <h3 className="color-white mb-15">Let’s Change Things Inspire Book</h3>
            <a className="btn btn-brand-2 btn-arrow-right">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
