import React from 'react'
import Loader from '../Components/Loaderr'
import Topbar from '../Components/Topbar'
import Header from "../Components/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from '../Components/Footer';
import star from '../public/imgs/template/icons/star.svg'
import img1 from "../public/imgs/page/product/img-gallery-1.jpg";
import Link from 'next/link';
import QuickModal from '@/Components/QuickModal';
const Cart = (props) => {
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
                <li><a className="font-xs color-gray-1000" href="index.html">Home</a></li>
                <li><a className="font-xs color-gray-500" href="shop-grid.html">Shop</a></li>
                <li><a className="font-xs color-gray-500" href="shop-cart.html">Cart</a></li>
              </ul>
            </div>
          </div>
        </div>
        <section className="section-box shop-template">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="box-carts">
                  <div className="head-wishlist">
                    <div className="item-wishlist">
                      <div className="wishlist-cb">
                        <input className="cb-layout cb-all" type="checkbox" />
                      </div>
                      <div className="wishlist-product"><span className="font-md-bold color-brand-3">Product</span></div>
                      <div className="wishlist-price"><span className="font-md-bold color-brand-3">Unit Price</span></div>
                      <div className="wishlist-status"><span className="font-md-bold color-brand-3">Quantity</span></div>
                      <div className="wishlist-action"><span className="font-md-bold color-brand-3">Subtotal</span></div>
                      <div className="wishlist-remove"><span className="font-md-bold color-brand-3">Remove</span></div>
                    </div>
                  </div>
                  <div className="content-wishlist mb-20">
                    <div className="item-wishlist">
                      <div className="wishlist-cb">
                        <input className="cb-layout cb-select" type="checkbox" />
                      </div>
                      <div className="wishlist-product">
                        <div className="product-wishlist">
                          <div className="product-image"><Link href={`/SingleProduct`}><img src="assets/imgs/page/product/img-sub.png" alt="Ecom" /></Link></div>
                          <div className="product-info"><Link href={`/SingleProduct`}>
                            <h6 className="color-brand-3">Dell Optiplex 9020 Small Form Business Desktop Tower PC</h6></Link>
                            <div className="rating"><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><span className="font-xs color-gray-500"> (65)</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="wishlist-price">
                        <h4 className="color-brand-3">$2.51</h4>
                      </div>
                      <div className="wishlist-status">
                        <div className="box-quantity">
                          <div className="input-quantity">
                            <input className="font-xl color-brand-3" type="text" value="1" /><span className="minus-cart"></span><span className="plus-cart"></span>
                          </div>
                        </div>
                      </div>
                      <div className="wishlist-action">
                        <h4 className="color-brand-3">$2.51</h4>
                      </div>
                      <div className="wishlist-remove"><a className="btn btn-delete" href="#"></a></div>
                    </div>
                    <div className="item-wishlist">
                      <div className="wishlist-cb">
                        <input className="cb-layout cb-select" type="checkbox" />
                      </div>
                      <div className="wishlist-product">
                        <div className="product-wishlist">
                          <div className="product-image"><Link href={`/SingleProduct`}><img src="assets/imgs/page/product/img-sub2.png" alt="Ecom" /></Link></div>
                          <div className="product-info"><Link href={`/SingleProduct`}>
                            <h6 className="color-brand-3">HP 24 All-in-One PC, Intel Core i3-1115G4, 4GB RAM</h6></Link>
                            <div className="rating"><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><span className="font-xs color-gray-500"> (65)</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="wishlist-price">
                        <h4 className="color-brand-3">$1.51</h4>
                      </div>
                      <div className="wishlist-status">
                        <div className="box-quantity">
                          <div className="input-quantity">
                            <input className="font-xl color-brand-3" type="text" value="1" /><span className="minus-cart" ></span><span className="plus-cart"></span>
                          </div>
                        </div>
                      </div>
                      <div className="wishlist-action">
                        <h4 className="color-brand-3">$1.51</h4>
                      </div>
                      <div className="wishlist-remove"><a className="btn btn-delete" href="#"></a></div>
                    </div>
                    <div className="item-wishlist">
                      <div className="wishlist-cb">
                        <input className="cb-layout cb-select" type="checkbox" />
                      </div>
                      <div className="wishlist-product">
                        <div className="product-wishlist">
                          <div className="product-image"><Link href={`/SingleProduct`}><img src="assets/imgs/page/product/img-sub3.png" alt="Ecom" /></Link></div>
                          <div className="product-info"><Link href={`/SingleProduct`}>
                            <h6 className="color-brand-3">Gateway 23.8&quot; All-in-one Desktop, Fully Adjustable Stand</h6></Link>
                            <div className="rating"><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><span className="font-xs color-gray-500"> (65)</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="wishlist-price">
                        <h4 className="color-brand-3">$3.51</h4>
                      </div>
                      <div className="wishlist-status">
                        <div className="box-quantity">
                          <div className="input-quantity">
                            <input className="font-xl color-brand-3" type="text" value="1" /><span className="minus-cart" ></span><span className="plus-cart"></span>
                          </div>
                        </div>
                      </div>
                      <div className="wishlist-action">
                        <h4 className="color-brand-3">$3.51</h4>
                      </div>
                      <div className="wishlist-remove"><a className="btn btn-delete" href="#"></a></div>
                    </div>
                  </div>
                  <div className="row mb-40">
                    <div className="col-lg-6 col-md-6 col-sm-6-col-6"><a className="btn btn-buy w-auto arrow-back mb-10" href="shop-grid.html">Continue shopping</a></div>
                    <div className="col-lg-6 col-md-6 col-sm-6-col-6 text-md-end"><a className="btn btn-buy w-auto update-cart mb-10" href="shop-cart.html">Update cart</a></div>
                  </div>
                  <div className="row mb-50">
                    <div className="col-lg-6 col-md-6">
                      <div className="box-cart-left">
                        <h5 className="font-md-bold mb-10">Calculate Shipping</h5><span className="font-sm-bold mb-5 d-inline-block color-gray-500">Flat rate:</span><span className="font-sm-bold d-inline-block color-brand-3">5%</span>
                        <div className="form-group">
                          <select className="form-control select-style1 color-gray-700">
                            <option value="1">USA</option>
                            <option value="1">EURO</option>
                          </select>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 mb-10">
                            <input className="form-control" placeholder="Stage / Country" />
                          </div>
                          <div className="col-lg-6 mb-10">
                            <input className="form-control" placeholder="PostCode / ZIP" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="box-cart-right p-20">
                        <h5 className="font-md-bold mb-10">Apply Coupon</h5><span className="font-sm-bold mb-5 d-inline-block color-gray-500">Using A Promo Code?</span>
                        <div className="form-group d-flex">
                          <input className="form-control mr-15" placeholder="Enter Your Coupon" />
                          <button className="btn btn-buy w-auto">Apply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="summary-cart">
                  <div className="border-bottom mb-10">
                    <div className="row">
                      <div className="col-6"><span className="font-md-bold color-gray-500">Subtotal</span></div>
                      <div className="col-6 text-end">
                        <h4>	$2.51</h4>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom mb-10">
                    <div className="row">
                      <div className="col-6"><span className="font-md-bold color-gray-500">Shipping</span></div>
                      <div className="col-6 text-end">
                        <h4>	Free</h4>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom mb-10">
                    <div className="row">
                      <div className="col-6"><span className="font-md-bold color-gray-500">Estimate for</span></div>
                      <div className="col-6 text-end">
                        <h6>United Kingdom</h6>
                      </div>
                    </div>
                  </div>
                  <div className="mb-10">
                    <div className="row">
                      <div className="col-6"><span className="font-md-bold color-gray-500">Total</span></div>
                      <div className="col-6 text-end">
                        <h4>	$2.51</h4>
                      </div>
                    </div>
                  </div>
                  <div className="box-button"><Link className="btn btn-buy" href={`/Checkout`}>Proceed To CheckOut</Link></div>
                </div>
              </div>
            </div>
            <h4 className="color-brand-3">You may also like</h4>
            <div className="list-products-5 mt-20 mb-40">
              <div className="card-grid-style-3">
                <div className="card-grid-inner">
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><Link href={`/SingleProduct`}><img src="assets/imgs/page/homepage1/imgsp3.png" alt="Ecom" /></Link></div>
                  <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Hisense</a><br /><Link className="color-brand-3 font-sm-bold" href={`/SingleProduct`}>Hisense 43&quot; Class 4K UHD LED XClass Smart TV HDR</Link>
                    <div className="rating"><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><span className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
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
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><Link href={`/SingleProduct`}><img src="assets/imgs/page/homepage1/imgsp4.png" alt="Ecom" /></Link></div>
                  <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br /><Link className="color-brand-3 font-sm-bold" href={`/SingleProduct`}>2022 Apple 10.9-inch iPad Air Wi-Fi 64GB - Silver</Link>
                    <div className="rating"><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><span className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
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
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a href={`/SingleProduct`}><img src="assets/imgs/page/homepage1/imgsp5.png" alt="Ecom" /></a></div>
                  <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">LG</a><br /><a className="color-brand-3 font-sm-bold" href={`/SingleProduct`}>LG 65&quot; Class 4K UHD Smart TV OLED A1 Series </a>
                    <div className="rating"><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><span className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
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
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a href={`/SingleProduct`}><img src="assets/imgs/page/homepage1/imgsp6.png" alt="Ecom" /></a></div>
                  <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Apple</a><br /><a className="color-brand-3 font-sm-bold" href={`/SingleProduct`}>Apple AirPods Pro with MagSafe Charging Case</a>
                    <div className="rating"><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><span className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
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
                  <div className="tools"><a className="btn btn-trend btn-tooltip mb-10" href="#" aria-label="Trend" data-bs-placement="left"></a><a className="btn btn-wishlist btn-tooltip mb-10" href="shop-wishlist.html" aria-label="Add To Wishlist"></a><a className="btn btn-compare btn-tooltip mb-10" href="shop-compare.html" aria-label="Compare"></a><a className="btn btn-quickview btn-tooltip" aria-label="Quick view" href="#ModalQuickview" data-bs-toggle="modal"></a></div>
                  <div className="image-box"><span className="label bg-brand-2">-17%</span><a href={`/SingleProduct`}><img src="assets/imgs/page/homepage1/imgsp7.png" alt="Ecom" /></a></div>
                  <div className="info-right"><a className="font-xs color-gray-500" href="shop-vendor-single.html">Razer</a><br /><a className="color-brand-3 font-sm-bold" href={`/SingleProduct`}>Razer Power Up Gaming Bundle V2 - Cynosa Lite</a>
                    <div className="rating"><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><span className="font-xs color-gray-500">(65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2856.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                    <div className="mt-20 box-btn-cart"><a className="btn btn-cart" href="shop-cart.html">Add To Cart</a></div>
                    <ul className="list-features">
                      <li>27-inch (diagonal) Retina 5K display</li>
                      <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                      <li>AMD Radeon Pro 5300 graphics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="color-brand-3">Recently viewed items</h4>
            <div className="row mt-40">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card-grid-style-2 card-grid-none-border hover-up">
                  <div className="image-box"><a href={`/SingleProduct`}><img src="assets/imgs/page/homepage1/imgsp1.png" alt="Ecom" /></a>
                  </div>
                  <div className="info-right"><span className="font-xs color-gray-500">HP</span><br /><a className="color-brand-3 font-xs-bold" href={`/SingleProduct`}>HP DeskJet 2755e Wireless Color All-in-One Printer</a>
                    <div className="rating"><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><span className="font-xs color-gray-500"> (65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2556.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card-grid-style-2 card-grid-none-border hover-up">
                  <div className="image-box"><a href={`/SingleProduct`}><img src="assets/imgs/page/homepage1/imgsp2.png" alt="Ecom" /></a>
                  </div>
                  <div className="info-right"><span className="font-xs color-gray-500">HP</span><br /><a className="color-brand-3 font-xs-bold" href={`/SingleProduct`}>Original HP 63XL Black High-yield Ink Cartridge</a>
                    <div className="rating"><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><span className="font-xs color-gray-500"> (65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2556.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card-grid-style-2 card-grid-none-border hover-up">
                  <div className="image-box"><a href={`/SingleProduct`}><img src="assets/imgs/page/homepage1/imgsp1.png" alt="Ecom" /></a>
                  </div>
                  <div className="info-right"><span className="font-xs color-gray-500">Logitech</span><br /><a className="color-brand-3 font-xs-bold" href={`/SingleProduct`}>Logitech H390 Wired Headset, Stereo Headphones</a>
                    <div className="rating"><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><span className="font-xs color-gray-500"> (65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2556.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card-grid-style-2 card-grid-none-border hover-up">
                  <div className="image-box"><a href={`/SingleProduct`}><img src="assets/imgs/page/homepage1/imgsp2.png" alt="Ecom" /></a>
                  </div>
                  <div className="info-right"><span className="font-xs color-gray-500">Logitech</span><br /><a className="color-brand-3 font-xs-bold" href={`/SingleProduct`}>Logitech MK345 Wireless Combo Full-Sized</a>
                    <div className="rating"><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><img src={star.src} alt="Ecom" /><span className="font-xs color-gray-500"> (65)</span></div>
                    <div className="price-info"><strong className="font-lg-bold color-brand-3 price-main">$2556.3</strong><span className="color-gray-500 price-line">$3225.6</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* quickview modal */}
        <div
          className="modal fade"
          id="ModalQuickview"
          tabindex="-1"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <QuickModal star={star} img1={img1} img2={img1} />

        </div>
      </main>
      <Footer />
    </>
  )
}

export default Cart
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