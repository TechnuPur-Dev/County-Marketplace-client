import React from 'react'

const ContactInfo = () => {
  return (
    <>
      <div className="box-contact-support pt-80 pb-50 background-gray-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-12 mx-auto">
                <div className="row">
                  <div className="col-lg-3 mb-30 text-center text-lg-start">
                    <h3 className="mb-5">We‘d love to here from you</h3>
                    <p className="font-sm color-gray-700">Chat with our friendly team</p>
                  </div>
                  <div className="col-lg-3 text-center mb-30">
                    <div className="box-image mb-20"><img src={`../imgs/page/contact/chat.svg`} alt="Ecom"/></div>
                    <h4 className="mb-5">Chat to sales</h4>
                    <p className="font-sm color-gray-700 mb-5">Speak to our team.</p><a className="font-sm color-gray-900" href="/cdn-cgi/l/email-protection#4635272a2335062325292b6825292b"><span className="__cf_email__" data-cfemail="a3d0c2cfc6d0e3c6c0ccce8dc0ccce">[email&#160;protected]</span></a>
                  </div>
                  <div className="col-lg-3 text-center mb-30">
                    <div className="box-image mb-20"><img src={`../imgs/page/contact/call.svg`} alt="Ecom"/></div>
                    <h4 className="mb-5">Call us</h4>
                    <p className="font-sm color-gray-700 mb-5">Mon-Fri from 8am to 5pm</p><a className="font-sm color-gray-900" href="tel:+1(555)000-0000">+1(555)000-0000</a>
                  </div>
                  <div className="col-lg-3 text-center mb-30">
                    <div className="box-image mb-20"><img src={`../imgs/page/contact/map.svg`} alt="Ecom"/></div>
                    <h4 className="mb-5">Visit us</h4>
                    <p className="font-sm color-gray-700 mb-5">Visit our office</p><span className="font-sm color-gray-900">205 North Michigan Avenue, Suite 810<br/>Chicago, 60601, USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
    </>
  )
}

export default ContactInfo
