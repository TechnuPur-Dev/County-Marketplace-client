import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Loader from "../Components/Loaderr";
import Topbar from "../Components/Topbar";
import Header from "../Components/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../Components/Footer";
import InfoSection from "../Components/InfoSection";
import star from "../public/imgs/template/icons/star.svg";
import greyStar from "../public//imgs/template/icons/star-gray.svg"
import bannerImg from "../public/imgs/page/shop/banner.png";
import img1 from "../public/imgs/page/product/img-gallery-1.jpg";
import img2 from "../public/imgs/page/product/img-gallery-2.jpg";
import MultiRangeSlider from "@/Components/MultiRangeSlider";
import QuickModal from "@/Components/QuickModal";
import Link from "next/link";
import Banner from "@/Components/Banner";
const ShopGrid = (props) => {
  console.log(props, 'props');
  var axios = require('axios');
  const router = useRouter();
  const [bannerData, setBannerData] = useState(props?.banners)
  let [proFilters, setProFilters] = useState({
    page_size: router.query.page_size || 30,
    page_number: router.query.page_number || 1,
    search_string: router.query.search_string || -1,
    sort_column: router.query.sort_column || 'product_name',
    sort_order: router.query.sort_order || 'ASC',
    categories_ids: router.query.categories_ids || -1,
    brands_ids: router.query.brands_ids || -1,
    price_from: Math.trunc(router.query.price_from) || 0.00,
    price_to: Math.trunc(router.query.price_to) || 100.00,
    waranty_duration_ids: router.query.waranty_duration_ids || -1,
    vendor_id: router.query.vendor_id || -1
  })
  const [getPro, setgetPro] = useState(props?.products)
  const [proCatg, setProCatg] = useState(props?.categories)
  let pagination = [1, 2, 3, 4, 5, 6]
  console.log(router, 'urll')
  const getProducts = (a) => {
    router.push(router.asPath, `/ShopGrid?${a}`);
    let filter = router.query;
    var config = {
      method: 'get',
      url: `http://countydev92-001-site1.ftempurl.com/api/marketplace/getProductsFiltered?${a}`,
      // headers: {
      //   'Authorization': 'Bearer N59Ag_m1BMrcMDIcd0pnS_DewxEyc4Qs_XIBl1zCLv3ZnKpkEd4usksRUWGxmHL0n7lQF5QltkvRLnGvGNOuZNiB-5kdd-HzarGbmdTmWFHbemWQbrXti59NJbBGhjS3sxX0RwQWUzyHDmgD17r6AIUfsLAUNotNzKCy3bgJhF5hy8U2ay9Lg7eSo4LEhfd0xTTLyekNusqziIJ7vOWp1sQraoyMD9cSE_CQjQCWkm4GG18hTZP_lAXFAtR5LVqbGC2zpgVk2b-iSlODO2TlgzwfiLF7UDEeNV-QAlng36N0733nOcI2Xj0bOXmxNJ8HmNBotrgRYBCs73ehQwSzDweZJKG_ez42YAW-bT5aNvf8S-tJv3ID4vItgMvoX5p5VEKVbVt9PDqzz0OTnDALNQ'
      // }
    };

    axios(config)
      .then(function (response) {
        console.log(filter, response.data.payload)
        setgetPro(response.data.payload)
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  const applyFilters = (name, value) => {
    setProFilters({
      ...proFilters,
      [name]: value
    })

  }
  // console.log(getPro,props,'propss');
  //  console.log(getPro,'helloo');
  //  const router = useRouter();
  // const data = router.query;
  // console.log(data)
  // useEffect(() => {

  //   var axios = require('axios');
  //     let  products=[];
  //     var config = {
  //       method: 'get',
  //     maxBodyLength: Infinity,
  //       url: 'http://countydev92-001-site1.ftempurl.com/api/marketplace/getProductsFiltered?page_size=30&page_number=1&search_string=-1&sort_column=product_name&sort_order=ASC&categories_ids=-1&brands_ids=-1&price_from=0.00&price_to=1000.00&waranty_duration_ids=-1&vendor_id=-1\n',
  //       headers: { 
  //         'Authorization': 'Bearer N59Ag_m1BMrcMDIcd0pnS_DewxEyc4Qs_XIBl1zCLv3ZnKpkEd4usksRUWGxmHL0n7lQF5QltkvRLnGvGNOuZNiB-5kdd-HzarGbmdTmWFHbemWQbrXti59NJbBGhjS3sxX0RwQWUzyHDmgD17r6AIUfsLAUNotNzKCy3bgJhF5hy8U2ay9Lg7eSo4LEhfd0xTTLyekNusqziIJ7vOWp1sQraoyMD9cSE_CQjQCWkm4GG18hTZP_lAXFAtR5LVqbGC2zpgVk2b-iSlODO2TlgzwfiLF7UDEeNV-QAlng36N0733nOcI2Xj0bOXmxNJ8HmNBotrgRYBCs73ehQwSzDweZJKG_ez42YAW-bT5aNvf8S-tJv3ID4vItgMvoX5p5VEKVbVt9PDqzz0OTnDALNQ'
  //       }
  //     };

  //     axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //       console.log(response.data.payload)
  //        products= response.data.payload; 
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  // }, [])
  useEffect(() => {
    console.log(proFilters);
    let slider = bannerData.filter((image) => (image.banner_place_type == "Other"))
    console.log(slider, 'bannnerss');
    setBannerData(slider[0])


  }, [])

  return (
    <>
      <Loader data={props.categories} />
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
      <Header applyFilters={applyFilters} getProducts={getProducts} proFilters={proFilters} categories={props.categories}  />
      <main className="main">
        <div className="section-box shop-template mt-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 order-first order-lg-last">
                <Banner banner={props.banners} />
                {/* <div className="banner-ads-top mb-30">
                  <a href="shop-single-product-3.html">
                    <img src={bannerImg.src} alt="Ecom" />
                  </a>
                </div> */}
                <div className="box-filters mt-0 pb-5 border-bottom">
                  <div className="row">

                    <div className="col-xl-10 col-lg-9 mb-10 text-lg-end text-center">
                      <span className="font-sm color-gray-900 font-medium border-1-right span">
                        Showing 1&ndash;16 of 17 results
                      </span>
                      <div className="d-inline-block">
                        <span className="font-sm color-gray-500 font-medium">
                          Sort by:
                        </span>
                        <div className="dropdown dropdown-sort border-1-right">
                          <button
                            className="btn dropdown-toggle font-sm color-gray-900 font-medium"
                            id="dropdownSort"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {proFilters.sort_order}
                          </button>
                          <ul
                            className="dropdown-menu dropdown-menu-light"
                            aria-labelledby="dropdownSort"
                            style={{ margin: "0px" }}
                          >
                            <li>
                              <a className="dropdown-item active" href="#"
                                onClick={() => { getProducts(`page_size=${proFilters.page_size}&page_number=${proFilters.page_number}&search_string=${proFilters.search_string}&sort_column=${proFilters.sort_column}&sort_order=ASC&categories_ids=${proFilters.categories_ids}&brands_ids=${proFilters.brands_ids}&price_from=${proFilters.price_from}&price_to=${proFilters.price_to}&waranty_duration_ids=-1${proFilters.waranty_duration_ids}&vendor_id=${proFilters.vendor_id}`); applyFilters('sort_order', 'ASC') }}
                              >
                                ASC
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#"
                                onClick={() => { getProducts(`page_size=${proFilters.page_size}&page_number=${proFilters.page_number}&search_string=${proFilters.search_string}&sort_column=${proFilters.sort_column}&sort_order=DSC&categories_ids=${proFilters.categories_ids}&brands_ids=${proFilters.brands_ids}&price_from=${proFilters.price_from}&price_to=${proFilters.price_to}&waranty_duration_ids=-1${proFilters.waranty_duration_ids}&vendor_id=${proFilters.vendor_id}`); applyFilters('sort_order', 'DSC') }}
                              >
                                DSC
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Comments products
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="d-inline-block">
                        <span className="font-sm color-gray-500 font-medium">
                          Show
                        </span>
                        <div className="dropdown dropdown-sort border-1-right">
                          <button
                            className="btn dropdown-toggle font-sm color-gray-900 font-medium"
                            id="dropdownSort2"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-bs-display="static"
                          >
                            <span>{proFilters.page_size} items</span>
                          </button>
                          <ul
                            className="dropdown-menu dropdown-menu-light"
                            aria-labelledby="dropdownSort2"
                          >
                            <li>
                              <a className="dropdown-item active" href="#" onClick={() => { getProducts(`page_size=30&page_number=${proFilters.page_number}&search_string=${proFilters.search_string}&sort_column=${proFilters.sort_column}&sort_order=${proFilters.sort_order}&categories_ids=${proFilters.categories_ids}&brands_ids=${proFilters.brands_ids}&price_from=${proFilters.price_from}&price_to=${proFilters.price_to}&waranty_duration_ids=-1${proFilters.waranty_duration_ids}&vendor_id=${proFilters.vendor_id}`); applyFilters('page_size', 30) }}>
                                30 items
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" onClick={() => { getProducts(`page_size=50&page_number=${proFilters.page_number}&search_string=${proFilters.search_string}&sort_column=${proFilters.sort_column}&sort_order=${proFilters.sort_order}&categories_ids=${proFilters.categories_ids}&brands_ids=${proFilters.brands_ids}&price_from=${proFilters.price_from}&price_to=${proFilters.price_to}&waranty_duration_ids=-1${proFilters.waranty_duration_ids}&vendor_id=${proFilters.vendor_id}`); applyFilters('page_size', 50) }}>
                                50 items
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" onClick={() => { getProducts(`page_size=100&page_number=${proFilters.page_number}&search_string=${proFilters.search_string}&sort_column=${proFilters.sort_column}&sort_order=${proFilters.sort_order}&categories_ids=${proFilters.categories_ids}&brands_ids=${proFilters.brands_ids}&price_from=${proFilters.price_from}&price_to=${proFilters.price_to}&waranty_duration_ids=-1${proFilters.waranty_duration_ids}&vendor_id=${proFilters.vendor_id}`); applyFilters('page_size', 100) }}>
                                100 items
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="row mt-20">
                  {getPro?.map((item, id) => (<>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="card-grid-style-3">
                        <div className="card-grid-inner">
                          <div className="tools">

                            <Link
                              className="btn btn-wishlist btn-tooltip mb-10"
                              href="/WishList"
                              aria-label="Add To Wishlist"
                            ></Link>

                            <a
                              className="btn btn-quickview btn-tooltip"
                              aria-label="Quick view"
                              href="#ModalQuickview"
                              data-bs-toggle="modal"
                            ></a>
                          </div>
                          <div className="image-box">
                            <span className="label bg-brand-2">-17%</span>
                            <a href="shop-single-product.html">
                              <img
                                src="assets/imgs/page/homepage1/imgsp3.png"
                                alt="Ecom"
                              />
                            </a>
                          </div>
                          <div className="info-right">
                            <a
                              className="font-xs color-gray-500"
                              href="shop-vendor-single.html"
                            >
                              {item.brand_name}
                            </a>
                            <br />
                            <a
                              className="color-brand-3 font-sm-bold"
                              href="shop-single-product.html"
                            >
                              {item.product_name}
                            </a>
                            <div className="rating">
                              <img src={star.src} alt="Ecom" />
                              <img src={star.src} alt="Ecom" />
                              <img src={star.src} alt="Ecom" />
                              <img src={star.src} alt="Ecom" />
                              <img src={star.src} alt="Ecom" />
                              <span className="font-xs color-gray-500">(65)</span>
                            </div>
                            <div className="price-info">
                              <strong className="font-lg-bold color-brand-3 price-main">
                                ${item.discounted_amount}
                              </strong>
                              <span className="color-gray-500 price-line">
                                ${item.product_sale_rate}
                              </span>
                            </div>
                            <div className="mt-20 box-btn-cart">
                              <a className="btn btn-cart" href="shop-cart.html">
                                Add To Cart
                              </a>
                            </div>
                            <ul className="list-features">
                              <li>{item.product_description}</li>
                              {/* <li>3.1GHz 6-core 10th-generation Intel Core i5</li>
                            <li>AMD Radeon Pro 5300 graphics</li> */}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div></>))}

                </div>
                <nav>
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link page-prev" href="#"></a>
                    </li>
                    {pagination.map(page => (<> <li className={(page == proFilters.page_number) ? "page-item active" : "page-item"}>
                      <a className="page-link" href="#"
                        onClick={() => { getProducts(`page_size=${proFilters.page_size}&page_number=${page}&search_string=${proFilters.search_string}&sort_column=${proFilters.sort_column}&sort_order=${proFilters.sort_order}&categories_ids=${proFilters.categories_ids}&brands_ids=${proFilters.brands_ids}&price_from=${proFilters.price_from}&price_to=${proFilters.price_to}&waranty_duration_ids=-1${proFilters.waranty_duration_ids}&vendor_id=${proFilters.vendor_id}`); applyFilters('page_number', page) }}
                      >
                        {page}
                      </a>
                    </li></>))}


                    <li className="page-item">
                      <a className="page-link page-next" href="#"></a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3 order-last order-lg-first">
                <div className="sidebar-border mb-0">
                  <div className="sidebar-head">
                    <h6 className="color-gray-900">Product Categories</h6>
                  </div>
                  <div className="sidebar-content">
                    <ul className="list-nav-arrow" >
                      {proCatg.filter(
                        (levl1) => levl1.level === 1)
                        .map((levl1 => (<> <li>
                          <a href="#" style={{ color: (levl1.category_id == proFilters.categories_ids) ? 'orange' : '' }}
                            onClick={() => { getProducts(`page_size=${proFilters.page_size}&page_number=${proFilters.page_number}&search_string=${proFilters.search_string}&sort_column=${proFilters.sort_column}&sort_order=${proFilters.sort_order}&categories_ids=${levl1.category_id}&brands_ids=${proFilters.brands_ids}&price_from=${proFilters.price_from}&price_to=${proFilters.price_to}&waranty_duration_ids=-1${proFilters.waranty_duration_ids}&vendor_id=${proFilters.vendor_id}`); applyFilters("categories_ids", levl1.category_id) }}
                          >
                            {levl1.name}
                            {/* <span className="number">09</span> */}
                          </a>
                        </li></>)))}
                    </ul>
                    {/* <ul className="list-nav-arrow">
                      <li>
                        <a href="shop-grid.html">
                          Computers &amp; Laptop
                          <span className="number">09</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">
                          Electric accessories<span className="number">12</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">
                          Mainboard &amp; CPU<span className="number">24</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">
                          Bluetooth devices<span className="number">34</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">
                          Mouse &amp; Keyboard<span className="number">65</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">
                          Wired Headphone<span className="number">15</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">
                          Gaming Gatgets<span className="number">76</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">
                          Smart watches<span className="number">89</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">
                          Cell Phones<span className="number">23</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html">
                          Headphone<span className="number">98</span>
                        </a>
                      </li>
                    </ul> */}
                    {/* <div>
                      <div className="collapse" id="moreMenu">
                        <ul className="list-nav-arrow">
                          <li>
                            <a href="shop-grid.html">
                              Home theater<span className="number">98</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid.html">
                              Cameras & drones
                              <span className="number">124</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid.html">
                              PC gaming<span className="number">56</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid.html">
                              Smart home<span className="number">87</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid.html">
                              Networking<span className="number">36</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a
                        className="link-see-more mt-5"
                        data-bs-toggle="collapse"
                        href="#moreMenu"
                        role="button"
                        aria-expanded="false"
                        aria-controls="moreMenu"
                      >
                        See More
                      </a>
                    </div> */}
                  </div>
                </div>
                <div className="sidebar-border mb-40">
                  <div className="sidebar-head">
                    <h6 className="color-gray-900">Products Filter</h6>
                  </div>
                  <div className="sidebar-content">
                    <h6 className="color-gray-900  mb-10">Price</h6>
                    <div className="box-slider-range">
                      <div className="row mb-20">
                        <div className="col-sm-12">
                          {/* <MultiRangeSlider
                            minValue={proFilters.price_from}
                            maxValue={proFilters.price_to}
                            baseClassName="multi-range-slider"
                            subSteps={false}
                            style={{
                              border: "0",
                              boxShadow: "none",
                              color: "white",
                              backgroundColor: "white",
                            }}
                            ruler={false}
                            barInnerColor="#FD9636"
                            barLeftColor="white"
                            thumbLeftColor="#FD9636"
                            thumbRightColor="#FD9636"
                            min={proFilters.price_from}
                            max={proFilters.price_to}
                            step={5}
                            label={false}
                            preventWheel={false}
                            onChange={(e) => {
                              // handleInput(e);
                            }}
                          /> */}

                          <label >
                            <span className=" m-0 p-0">Min:</span>
                            <input type="number" className="mt-10 priceRange" value={proFilters.price_from} min={0} step={1.00}
                              onChange={(e) => { getProducts(`page_size=${proFilters.page_size}&page_number=${proFilters.page_number}&search_string=${proFilters.search_string}&sort_column=${proFilters.sort_column}&sort_order=${proFilters.sort_order}&categories_ids=${proFilters.categories_ids}&brands_ids=${proFilters.brands_ids}&price_from=${e.target.value}&price_to=${proFilters.price_to}&waranty_duration_ids=-1${proFilters.waranty_duration_ids}&vendor_id=${proFilters.vendor_id}`); applyFilters('price_from', e.target.value) }}
                            />
                          </label>
                          <label>
                            <span className=" ml-5">Max:</span>
                            <input type="number" className="mt-10 priceRange" value={proFilters.price_to} min={0}
                              onChange={(e) => { getProducts(`page_size=${proFilters.page_size}&page_number=${proFilters.page_number}&search_string=${proFilters.search_string}&sort_column=${proFilters.sort_column}&sort_order=${proFilters.sort_order}&categories_ids=${proFilters.categories_ids}&brands_ids=${proFilters.brands_ids}&price_from=${proFilters.price_from}&price_to=${e.target.value}&waranty_duration_ids=-1${proFilters.waranty_duration_ids}&vendor_id=${proFilters.vendor_id}`); applyFilters('price_to', e.target.value) }}
                            />
                          </label>
                        </div>
                      </div>

                    </div>
                    {/* <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" checked="checked" />
                          <span className="text-small">Free - $100</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">145</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$100 - $200</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">56</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$200 - $400</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">23</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$400 - $600</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">43</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$600 - $800</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">65</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Over $1000</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">56</span>
                      </li>
                    </ul> */}

                    <h6 className="color-gray-900 mt-20 mb-10">Brands</h6>
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" checked="checked" />
                          <span className="text-small">Apple</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">12</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Sony</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">34</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Toshiba</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">56</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Assus</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">78</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Samsung</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">23</span>
                      </li>
                    </ul>
                    <h6 className="color-gray-900 mt-20 mb-10">Rating</h6>
                    <ul className="list-checkbox">
                      <li className="mb-5">
                        <a href="#">
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                            (5 stars)
                          </span>
                        </a>
                      </li>
                      <li className="mb-5">
                        <a href="#">
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img
                            src={`${greyStar.src}`}
                            alt="Ecom"
                          />
                          <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                            (4 stars)
                          </span>
                        </a>
                      </li>
                      <li className="mb-5">
                        <a href="#">
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img
                            src={`${greyStar.src}`}
                            alt="Ecom"
                          />
                          <img
                            src={`${greyStar.src}`}
                            alt="Ecom"
                          />
                          <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                            (3 stars)
                          </span>
                        </a>
                      </li>
                      <li className="mb-5">
                        <a href="#">
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img
                            src={`${greyStar.src}`}
                            alt="Ecom"
                          />
                          <img
                            src={`${greyStar.src}`}
                            alt="Ecom"
                          />
                          <img
                            src={`${greyStar.src}`}
                            alt="Ecom"
                          />
                          <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                            (2 stars)
                          </span>
                        </a>
                      </li>
                      <li className="mb-5">
                        <a href="#">
                          <img src={star.src} alt="Ecom" />
                          <img
                            src={`${greyStar.src}`}
                            alt="Ecom"
                          />
                          <img
                            src={`${greyStar.src}`}
                            alt="Ecom"
                          />
                          <img
                            src={`${greyStar.src}`}
                            alt="Ecom"
                          />
                          <img
                            src={`${greyStar.src}`}
                            alt="Ecom"
                          />
                          <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                            (1 star)
                          </span>
                        </a>
                      </li>
                    </ul>

                  </div>
                </div>
                <div className="box-slider-item mb-30">
                  <div className="head pb-15 border-brand-2">
                    <h5 className="color-gray-900">Best seller</h5>
                  </div>
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
                </div>
                <div className="box-slider-item">
                  <div className="head pb-15 border-brand-2">
                    <h5 className="color-gray-900">Product Tags</h5>
                  </div>
                  <div className="content-slider mb-50">
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Games
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Electronics
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Video
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Cellphone
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Indoor
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      VGA Card
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      USB
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Lightning
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Camera
                    </a>
                    <a className="btn btn-border" href="shop-grid.html">
                      Window
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Air Vent
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Bedroom
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Laptop
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Dashboard
                    </a>
                    <a className="btn btn-border mr-5" href="shop-grid.html">
                      Keyboard
                    </a>
                  </div>
                </div>
                <div className="banner-right h-500 text-center mb-30">
                  {/* <span className="text-no font-11">No.9</span> */}
                  <h5 className="font-23 mt-20">
                  {bannerData?.banner_heading}
                  </h5>
                  <p className="text-desc font-16 mt-15">
                    {bannerData?.banner_text}
                  </p>
                  <a href={{
                pathname: '/ShopGrid',
                query:
                  `page_size=30&page_number=1&search_string=-1&sort_column=product_name&sort_order=ASC&categories_ids=-1&brands_ids=-1&price_from=0.00&price_to=1000.00&waranty_duration_ids=-1&vendor_id=-1`

              }}>View Details</a>
                </div>
                <style jsx>
                  {`
                    
                .banner-right {
                  border-radius: 4px;
                  display: inline-block;
                  width: 100%;
                  height: 670px;
                  background: url(${bannerData?.banner_url}) no-repeat 0px 0px;
                  background-size: cover;
                  padding: 50px 10px;
                }
                  `}
                </style>
              </div>
            </div>
          </div>
        </div>
        <InfoSection />

        {/* quickview modal */}
        <div
          className="modal fade"
          id="ModalQuickview"
          tabindex="-1"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <QuickModal star={star} img1={img1} img2={img2} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ShopGrid;
export async function getServerSideProps(context) {
  let filter = context.query

  console.log(filter, 'categoryyy', context.query)
  var axios = require('axios');
  let products = [];
  let categories = []
  var config1 = {
    method: 'get',
    url: `http://countydev92-001-site1.ftempurl.com/api/marketplace/getProductsFiltered?page_size=${filter.page_size}&page_number=${filter.page_number}&search_string=${filter.search_string}&sort_column=${filter.sort_column}&sort_order=${filter.sort_order}&categories_ids=${filter.categories_ids}&brands_ids=${filter.brands_ids}&price_from=${filter.price_from}&price_to=${filter.price_to}&waranty_duration_ids=${filter.waranty_duration_ids}&vendor_id=${filter.vendor_id}`,
    headers: {
      'Authorization': 'Bearer N59Ag_m1BMrcMDIcd0pnS_DewxEyc4Qs_XIBl1zCLv3ZnKpkEd4usksRUWGxmHL0n7lQF5QltkvRLnGvGNOuZNiB-5kdd-HzarGbmdTmWFHbemWQbrXti59NJbBGhjS3sxX0RwQWUzyHDmgD17r6AIUfsLAUNotNzKCy3bgJhF5hy8U2ay9Lg7eSo4LEhfd0xTTLyekNusqziIJ7vOWp1sQraoyMD9cSE_CQjQCWkm4GG18hTZP_lAXFAtR5LVqbGC2zpgVk2b-iSlODO2TlgzwfiLF7UDEeNV-QAlng36N0733nOcI2Xj0bOXmxNJ8HmNBotrgRYBCs73ehQwSzDweZJKG_ez42YAW-bT5aNvf8S-tJv3ID4vItgMvoX5p5VEKVbVt9PDqzz0OTnDALNQ'
    }
  };

  try {
    const response = await axios(config1); // wait for the axios request to complete
    products = response.data.payload;
  } catch (error) {
    console.log(error);
  }
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
  };
  let banners = []
  var config3 = {
    method: 'get',
    url: `http://countydev92-001-site1.ftempurl.com/api/marketplace/getStoreBanner?status=active`,

  };

  try {
    console.log(context, 'context');
    const response = await axios(config3); // wait for the axios request to complete
    banners = response.data.payload;
  } catch (error) {
    console.log(error);
  }
  


  return {
    props: { products, categories, banners }, // pass the populated products array as props
  };
}

