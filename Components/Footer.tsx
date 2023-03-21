import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 width-25 mb-30">
              <h4 className="mb-30 color-gray-1000">Contact</h4>
              <div className="font-md mb-20 color-gray-900"><strong className="font-md-bold">Address:</strong> 502 New Design
                Str, Melbourne, San Francisco, CA 94110, United States</div>
              <div className="font-md mb-20 color-gray-900"><strong className="font-md-bold">Phone:</strong> (+01) 123-456-789
              </div>
              <div className="font-md mb-20 color-gray-900"><strong className="font-md-bold">E-mail:</strong> <a
                  href="/cdn-cgi/l/email-protection" className="__cf_email__"
                  data-cfemail="24474b4a504547506441474b49094945564f41500a474b49">[email&#160;protected]</a></div>
              <div className="font-md mb-20 color-gray-900"><strong className="font-md-bold">Hours:</strong> 8:00 - 17:00, Mon -
                Sat</div>
              <div className="mt-30"><a className="icon-socials icon-facebook" href="#"></a><a
                  className="icon-socials icon-instagram" href="#"></a><a className="icon-socials icon-twitter" href="#"></a><a
                  className="icon-socials icon-linkedin" href="#"></a></div>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="mb-30 color-gray-1000">Make Money with Us</h4>
              <ul className="menu-footer">
                <li><a href="page-about-us.html">Mission &amp; Vision</a></li>
                <li><a href="page-about-us.html">Our Team</a></li>
                <li><a href="page-careers.html">Careers</a></li>
                <li><a href="#">Press &amp; Media</a></li>
                <li><a href="#">Advertising</a></li>
                <li><a href="#">Testimonials</a></li>
              </ul>
            </div>
            <div className="col-lg-3 width-16 mb-30">
              <h4 className="mb-30 color-gray-1000">Company</h4>
              <ul className="menu-footer">
                <li><a href="blog-2.html">Our Blog</a></li>
                <li><a href="#">Plans &amp; Pricing</a></li>
                <li><a href="#">Knowledge Base</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Office Center</a></li>
                <li><a href="blog.html">News &amp; Events</a></li>
              </ul>
            </div>
            <div className="col-lg-3 width-16 mb-30">
              <h4 className="mb-30 color-gray-1000">My account</h4>
              <ul className="menu-footer">
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Editor Help</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Live Chatting</a></li>
                <li><a href="page-contact.html">Contact Us</a></li>
                <li><a href="#">Support Center</a></li>
              </ul>
            </div>
            <div className="col-lg-3 width-23">
              <h4 className="mb-30 color-gray-1000">App &amp; Payment</h4>
              <div>
                <p className="font-md color-gray-900">Download our Apps and get extra 15% Discount on your first
                  Order&mldr;!</p>
                <div className="mt-20"><a className="mr-10" href="#"><img src={`../imgs/template/appstore.png`}
                      alt="Ecom"/></a><a href="#"><img src={`../imgs/template/google-play.png`} alt="Ecom"/></a></div>
                <p className="font-md color-gray-900 mt-20 mb-10">Secured Payment Gateways</p><img
                  src={`../imgs/template/payment-method.png`} alt="Ecom"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2">

        <div className="container">
          <div className="footer-bottom mt-20">
            <div className="row">
              <div className="col-lg-6 col-md-12 text-center text-lg-start"><span className="color-gray-900 font-sm">Copyright
                  &copy; 2022 Ecom Market. All rights reserved.</span></div>
              <div className="col-lg-6 col-md-12 text-center text-lg-end">
                <ul className="menu-bottom">
                  <li><Link className="font-sm color-gray-900" href={`/terms`}>Conditions of Use</Link></li>
                  <li><Link className="font-sm color-gray-900" href={`/terms`}>Privacy Notice</Link></li>
                  <li><Link className="font-sm color-gray-900" href={`/Careers`}>Interest-Based Ads</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
