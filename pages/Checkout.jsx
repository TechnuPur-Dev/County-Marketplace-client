import React from 'react'
import Loader from '../Components/Loaderr'
import Topbar from '../Components/Topbar'
import Header from "../Components/Header";
import ScrollToTop from "react-scroll-to-top";
import star from "../public/imgs/template/icons/star.svg";
import Footer from '../Components/Footer';
import InfoSection from '../Components/InfoSection';
import gpay from "../public/imgs/page/checkout/gpay.svg";
import paypal from "../public/imgs/page/checkout/paypal.svg";
import amazon from "../public/imgs/page/checkout/amazon.svg";
import Link from 'next/link';

const Checkout = (props) => {
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
      <Topbar/>
       <Header categories={props.categories} />
      <main className="main">
      <div className="section-box">
        <div className="breadcrumbs-div">
          <div className="container">
            <ul className="breadcrumb">
              <li><a className="font-xs color-gray-1000" href="index.html">Home</a></li>
              <li><a className="font-xs color-gray-500" href="shop-grid.html">Shop</a></li>
              <li><a className="font-xs color-gray-500" href="shop-cart.html">Checkout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <section className="section-box shop-template">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="box-border">
                <div className="box-payment"><a className="btn btn-gpay"><img src={gpay.src} alt="Ecom"/></a><a className="btn btn-paypal"><img src={paypal.src} alt="Ecom"/></a><a className="btn btn-amazon"><img src={amazon.src} alt="Ecom"/></a></div>
                <div className="border-bottom-4 text-center mb-20">
                  <div className="text-or font-md color-gray-500">Or</div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 mb-20">
                    <h5 className="font-md-bold color-brand-3 text-sm-start text-center">Contact information</h5>
                  </div>
                  <div className="col-lg-6 col-sm-6 mb-20 text-sm-end text-center"><span className="font-sm color-brand-3">Already have an account?</span><a className="font-sm color-brand-1" href="page-login.html"> Login</a></div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input className="form-control font-sm" type="text" placeholder="Email*"/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label className="font-sm color-brand-3" for="checkboxOffers">
                        <input className="checkboxOffer" id="checkboxOffers" type="checkbox"/>Keep me up to date on news and exclusive offers
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <h5 className="font-md-bold color-brand-3 mt-15 mb-20">Shipping address</h5>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input className="form-control font-sm" type="text" placeholder="First name*"/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input className="form-control font-sm" type="text" placeholder="Last name*"/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input className="form-control font-sm" type="text" placeholder="Address 1*"/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input className="form-control font-sm" type="text" placeholder="Address 2*"/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <select className="form-control font-sm select-style1 color-gray-700">
                        <option value="">Select an option...</option>
                        <option value="1">Option 1</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input className="form-control font-sm" type="text" placeholder="City*"/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input className="form-control font-sm" type="text" placeholder="PostCode / ZIP*"/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input className="form-control font-sm" type="text" placeholder="Company name"/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input className="form-control font-sm" type="text" placeholder="Phone*"/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-0">
                      <textarea className="form-control font-sm" placeholder="Additional Information" rows="5"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-20">
                <div className="col-lg-6 col-5 mb-20"><Link className="btn font-sm-bold color-brand-1 arrow-back-1" href={`/Cart`}>Return to Cart</Link></div>
                <div className="col-lg-6 col-7 mb-20 text-end"><Link className="btn btn-buy w-auto arrow-next" href={`/Checkout`}>Place an Order</Link></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box-border">
                <h5 className="font-md-bold mb-20">Your Order</h5>
                <div className="listCheckout">
                  <div className="item-wishlist">
                    <div className="wishlist-product">
                      <div className="product-wishlist">
                        <div className="product-image"><Link href={`/SingleProduct`}><img src="assets/imgs/page/product/img-sub.png" alt="Ecom"/></Link></div>
                        <div className="product-info"><Link href={`/SingleProduct`}>
                            <h6 className="color-brand-3">Gateway 23.8&quot; All-in-one Desktop, Fully Adjustable Stand</h6></Link>
                          <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="wishlist-status">
                      <h5 className="color-gray-500">x1</h5>
                    </div>
                    <div className="wishlist-price">
                      <h4 className="color-brand-3 font-lg-bold">$2.51</h4>
                    </div>
                  </div>
                  <div className="item-wishlist">
                    <div className="wishlist-product">
                      <div className="product-wishlist">
                        <div className="product-image"><Link href={`/SingleProduct`}><img src="assets/imgs/page/product/img-sub2.png" alt="Ecom"/></Link></div>
                        <div className="product-info"><Link href={`/SingleProduct`}>
                            <h6 className="color-brand-3">HP 24 All-in-One PC, Intel Core i3-1115G4, 4GB RAM</h6></Link>
                          <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="wishlist-status">
                      <h5 className="color-gray-500">x1</h5>
                    </div>
                    <div className="wishlist-price">
                      <h4 className="color-brand-3 font-lg-bold">$1.51</h4>
                    </div>
                  </div>
                  <div className="item-wishlist">
                    <div className="wishlist-product">
                      <div className="product-wishlist">
                        <div className="product-image"><Link href={`/SingleProduct`}><img src="assets/imgs/page/product/img-sub3.png" alt="Ecom"/></Link></div>
                        <div className="product-info"><Link href={`/SingleProduct`}>
                            <h6 className="color-brand-3">Dell Optiplex 9020 Small Form Business Desktop Tower PC</h6></Link>
                          <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="wishlist-status">
                      <h5 className="color-gray-500">x1</h5>
                    </div>
                    <div className="wishlist-price">
                      <h4 className="color-brand-3 font-lg-bold">$3.51</h4>
                    </div>
                  </div>
                </div>
                <div className="form-group d-flex mt-15">
                  <input className="form-control mr-15" placeholder="Enter Your Coupon"/>
                  <button className="btn btn-buy w-auto">Apply</button>
                </div>
                <div className="form-group mb-0">
                  <div className="row mb-10">
                    <div className="col-lg-6 col-6"><span className="font-md-bold color-brand-3">Subtotal</span></div>
                    <div className="col-lg-6 col-6 text-end"><span className="font-lg-bold color-brand-3">$6.51</span></div>
                  </div>
                  <div className="border-bottom mb-10 pb-5">
                    <div className="row">
                      <div className="col-lg-6 col-6"><span className="font-md-bold color-brand-3">Shipping</span></div>
                      <div className="col-lg-6 col-6 text-end"><span className="font-lg-bold color-brand-3">-</span></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-6"><span className="font-md-bold color-brand-3">Total</span></div>
                    <div className="col-lg-6 col-6 text-end"><span className="font-lg-bold color-brand-3">$6.51</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InfoSection/>
      </main>
      <Footer/>    
    </>
  )
}

export default Checkout
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