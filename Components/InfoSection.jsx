import React from 'react'
const InfoSection = () => {
  return (
    <div className="section-box mt-0 mb-25">
    <div className="container">
      <ul className="list-col-5">
        <li className="help-item">
          <div className="item-list">
            <div className="icon-left"><img src={`../imgs/template/delivery.svg`} alt="Ecom"/></div>
            <div className="info-right">
              <h5 className="font-lg-bold color-gray-100">Free Delivery</h5>
              <p className="font-sm color-gray-500">Over orders $10</p>
              {/* <!-- <p className="font-sm color-gray-500">From all orders over $10</p> --> */}
            </div>
          </div>
        </li>
        <li className="help-item">
          <div className="item-list">
            <div className="icon-left"><img src={`../imgs/template/support.svg`} alt="Ecom"/></div>
            <div className="info-right">
              <h5 className="font-lg-bold color-gray-100">Support 24/7</h5>
              <p className="font-sm color-gray-500">Shop with an expert</p>
            </div>
          </div>
        </li>
        <li className="help-item">
          <div className="item-list">
            <div className="icon-left"><img src={`../imgs/template/voucher.svg`} alt="Ecom"/></div>
            <div className="info-right">
              <h5 className="font-lg-bold color-gray-100">Gift voucher</h5>
              <p className="font-sm color-gray-500">Refer a friend</p>
            </div>
          </div>
        </li>
        <li className="help-item">
          <div className="item-list">
            <div className="icon-left"><img src={`../imgs/template/return.svg`} alt="Ecom"/></div>
            <div className="info-right">
              <h5 className="font-lg-bold color-gray-100">Return &amp; Refund</h5>
              <p className="font-sm color-gray-500">Over $200</p>
              {/* <!-- <p className="font-sm color-gray-500">Free return over $200</p> --> */}
            </div>
          </div>
        </li>
        <li className="help-item">
          <div className="item-list">
            <div className="icon-left"><img src={`../imgs/template/secure.svg`} alt="Ecom"/></div>
            <div className="info-right">
              <h5 className="font-lg-bold color-gray-100">Secure payment</h5>
              <p className="font-sm color-gray-500">100% Protected</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default InfoSection
