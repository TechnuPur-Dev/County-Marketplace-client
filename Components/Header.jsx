import React, { useEffect, useRef, useState } from "react";
import favicon from "../public/imgs/template/logo.svg";
import ecomImg from "../public/imgs/page/homepage1/imgsp5.png";
import logo from "../public/imgs/template/logo.svg";
import cart from "../public/imgs/page/homepage1/imgsp4.png";
import monitor from "../public/imgs/template/monitor.svg";
import account from "../public/imgs/template/ava_1.png";
import Select from "react-select";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router'
import Cookies from "js-cookie";
const Header = (props) => {
  const [Name, setName] = useState("")
  const router = useRouter();
  // console.log(props, 'headerpppp')
  var axios = require("axios");
  const [toggleClass, setToggleClass] = useState(false);
  const [expandList, setExpandList] = useState(false);
  const [expandAccount, setExpandAccount] = useState(false);
  const [searchString, setSearchString] = useState('')
  const [catg, setCatg] = useState(props.categories);
  // for account logo expand
  const myRef = useRef();
  // for mobile view menu
  const myRef2 = useRef();
  //Search custom Styles
  const customStyles = {
    indicatorSeparator: () => { },
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#425A8B",
      };
    },
    menu: (base) => ({
      ...base,
      width: "max-content",
      minWidth: "85%",
      marginTop: 15,
      zIndex: "2",
    }),

    dropdownIndicator: (base, state) => ({
      ...base,
      transition: "all .2s ease",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
      svgPath:
        "M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z",
    }),
    control: (base, state) => ({
      ...base,
      // background: "#023950",
      width: "max-content",
      minWidth: "85%",
      minHeight: 13,
      height: 13,
      outline: "none",
      border: "none",
      fontSize: 13,
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "white" : "white",
      },
      // '& svg': { display: 'none' },
      // '&::before': {
      //   border: '…',
      //   transform: 'rotate(…)'
      // },
      // '&::after': {
      //   border: '…',
      //   transform: 'rotate(…)'
      // }
    }),
  };
  const AccountDropdown = () => {
    setExpandAccount(!expandAccount);
  };
  const options = [
    { value: " Clothing & Apparel", label: " Clothing & Apparel" },
    { value: "Footwear/Shoes", label: "Footwear/Shoes" },
    { value: "Cosmetics", label: "Cosmetics" },
    { value: " Electronics", label: " Electronics" },
    { value: "Digital Gadgets", label: "Digital Gadgets" },
    { value: "Games & Toys", label: "Games & Toys" },
    { value: "Stationery", label: "Stationery" },
    { value: " Furniture & Equipment", label: " Furniture & Equipment" },
    { value: "Sports Products", label: "Sports Products" },
    { value: "Health & Medical", label: "Health & Medical" },
    { value: "Home Decor", label: "Home Decor" },
    { value: "Bakery", label: "Bakery" },
    { value: "Groceries", label: "Groceries" },
    { value: " Garden & Outdoor", label: " Garden & Outdoor" },
    { value: "Exercise/Fitness supplies", label: "Exercise/Fitness supplies" },
    { value: "Jewellery", label: "Jewellery" },
    { value: "Infant/Baby Products", label: "Infant/Baby Products" },
    { value: "Restaurent", label: "Restaurent" },
  ];
  const SignOut = () => {
    Cookies.remove('token')
    router.push('/Login')
  }
  // Sticky Menu Area and handle click outside event
  useEffect(() => {
    const token = Cookies.get("token");
    setName(token)
    window.addEventListener("scroll", isSticky);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", isSticky);
      document.removeEventListener("mousedown", handleClickOutside);
    };




  });
  let Search = (e) => {
    e.preventDefault()
    if (props.getProducts) {
      props?.getProducts(`page_size=${props?.proFilters?.page_size}&page_number=${props?.proFilters?.page_number}&search_string=${(searchString == '') ? -1 : searchString}&sort_column=${props?.proFilters?.sort_column}&sort_order=${props?.proFilters?.sort_order}&categories_ids=${props?.proFilters?.categories_ids}&brands_ids=${props?.proFilters?.brands_ids}&price_from=${props?.proFilters?.price_from}&price_to=${props?.proFilters?.price_to}&waranty_duration_ids=-1${props?.proFilters?.waranty_duration_ids}&vendor_id=${props?.proFilters?.vendor_id}`)
      props?.applyFilters('search_string', searchString == '' ? -1 : searchString)
    }
    else {
      if (searchString !== '') {
        router.push({
          pathname: '/ShopGrid',
          query: `page_size=30&page_number=1&search_string=${(searchString == '') ? -1 : searchString}&sort_column=product_name&sort_order=ASC&categories_ids=-1&brands_ids=-1&price_from=0.00&price_to=1000.00&waranty_duration_ids=-1&vendor_id=-1`

        })
      }
    }

  }

  //Dynamic Categories Menu

  // let getProduct = async (item,i) => {
  //  console.log(i,'parenttt')
  //   let proCatg = catg.filter((fil_item) => (fil_item.category_id == item.parent_id))

  //   var config = {
  //     method: 'get',
  //     url: `http://countydev92-001-site1.ftempurl.com/api/marketplace/getProductsFiltered?page_size=30&page_number=1&search_string=-1&sort_column=product_name&sort_order=ASC&categories_ids=${proCatg[0].parent_id}&brands_ids=-1&price_from=0.00&price_to=1000.00&waranty_duration_ids=-1&vendor_id=-1`,
  //     headers: {
  //       'Authorization': 'Bearer N59Ag_m1BMrcMDIcd0pnS_DewxEyc4Qs_XIBl1zCLv3ZnKpkEd4usksRUWGxmHL0n7lQF5QltkvRLnGvGNOuZNiB-5kdd-HzarGbmdTmWFHbemWQbrXti59NJbBGhjS3sxX0RwQWUzyHDmgD17r6AIUfsLAUNotNzKCy3bgJhF5hy8U2ay9Lg7eSo4LEhfd0xTTLyekNusqziIJ7vOWp1sQraoyMD9cSE_CQjQCWkm4GG18hTZP_lAXFAtR5LVqbGC2zpgVk2b-iSlODO2TlgzwfiLF7UDEeNV-QAlng36N0733nOcI2Xj0bOXmxNJ8HmNBotrgRYBCs73ehQwSzDweZJKG_ez42YAW-bT5aNvf8S-tJv3ID4vItgMvoX5p5VEKVbVt9PDqzz0OTnDALNQ'
  //     }
  //   };

  //   try {
  //     const response = await axios(config); // wait for the axios request to complete
  //     console.log(JSON.stringify(response.data));
  //     console.log(response.data.payload)

  //   } catch (error) {
  //     console.log(error);
  //   }

  // }
  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setExpandAccount(false);
    }
    if (!myRef2.current.contains(e.target)) {
      setToggleClass(false);
    }
  };
  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".sticky-bar");
    const scrollTop = window.scrollY;
    scrollTop >= 200
      ? header.classList.add("stick")
      : header.classList.remove("stick");
  };
  const navTrigger = () => {
    setExpandAccount(false);
    setToggleClass(!toggleClass);
  };
  const expand = () => {
    setExpandList(!expandList);
  };
  return (
    <div>

      <header className="header header-container sticky-bar">
        {/* <!--=====Sticky Top bar=====-->*/}
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link href={`/`}>

                  <Image
                    height="10"
                    width="110"
                    alt="Ecom"
                    src={`${favicon.src}`}
                  />
                </Link>
              </div>
              <div className="header-search">
                <div className="box-header-search">
                  <form className="form-search" method="post" action="#">
                    {/* <div className="box-category">
                      <Select
                        placeholder="All Categories"
                        styles={customStyles}
                        options={options}
                        className=" select-active "
                        classNamePrefix="select"
                        isSearchable={true}
                      />
                    </div> */}
                    <div className="box-keysearch">
                      <input
                        className="form-control font-xs"
                        type="text"
                        value={props?.applyFilters && ((props?.proFilters?.search_string == -1) ? '' : props?.proFilters?.search_string) || searchString}
                        placeholder="Search for item"
                        onChange={(e) => { (props?.applyFilters) ? (setSearchString(e.target.value), props?.applyFilters('search_string', e.target.value)) : (setSearchString(e.target.value)) }}

                      />

                    </div>
                    <button id="searchCatg" onClick={Search}>Search</button>
                  </form>
                </div>
              </div>
              <div className="header-nav text-start">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu nav-opt">
                    <li>
                      <Link className="active" href={`/`}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href={`/About`}>About</Link>
                    </li>
                    <li>
                      <Link href={`/Contact`}>Contact</Link>
                    </li>
                    <li className="has-children">
                      <Link href={`/VendorList`}>Vendors</Link>

                      <ul className="sub-menu">
                        <li>
                          <Link href={`/VendorList`}>Vendors Listing</Link>
                        </li>
                        <li>
                          <Link href={`/SingleVendor`}>Vendor Single</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <div
                  className={`${toggleClass ? "burger-close" : " "
                    } burger-icon burger-icon-white`}
                  onClick={navTrigger}
                >
                  <span className="burger-icon-top"></span>
                  <span className="burger-icon-mid"></span>
                  <span className="burger-icon-bottom"></span>
                </div>
              </div>
              <div className="header-shop">
                <div className="d-inline-block box-dropdown-cart">
                  {Name && <span
                    className="font-lg icon-list icon-account"
                    onClick={AccountDropdown}
                  >
                    <span>My Account</span>
                  </span>}

                  <div
                    className={`${(expandAccount && "dropdown-account dropdown-open") ||
                      "dropdown-account"
                      } `}
                  >
                    <ul ref={myRef}>
                      <li>
                        <Link href={`/Account`}>My Account</Link>
                      </li>
                      <li>
                        <Link href={`/OrderTracking`}>Order Tracking</Link>
                      </li>
                      <li>
                        <Link href={`/MyOrders`}>My Orders</Link>
                      </li>
                      <li>
                        <Link href={`/WishList`}>My Wishlist</Link>
                      </li>
                      <li>
                        <Link href={`/Setting`}>Setting</Link>
                      </li>
                      <li onClick={SignOut}>
                        Sign out
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  className="font-lg icon-list icon-wishlist"
                  href={`/WishList`}
                >
                  <span>Wishlist</span>
                  <span className="number-levl2 font-xs">5</span>
                </Link>
                <div className="d-inline-block box-dropdown-cart">
                  <Link href={`/Cart`} className="font-lg icon-list icon-cart">
                    <span>Cart</span>
                    <span className="number-levl2 font-xs">2</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Sticky Top bar end */}
        {/* <!--===== Dynamic Categories  DIV =====--> */}
        <div id="wdw_NavBar" className="header-bottom">
          <div className="container">
            <div className="dropdown d-inline-block">
              <button
                style={{ backgroundColor: "#FD9636" }}
                className="btn dropdown-toggle btn-category"
                id="dropdownCategory"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
                data-bs-display="static"
              >
                <span className="dropdown-right font-sm-bold color-white">
                  Shop By Categories
                </span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-light wdw_FixedManu"
                aria-labelledby="dropdownCategory"
                data-bs-popper="static"
              >
                <div className="container">
                  <div className="sidebar-left">
                    <ul className="menu-texts menu-close"    // style={{minWidth:'250px'}}
                    >
                      {catg?.filter((levl1) => levl1.level === 1).map((levl1) => (

                        <li className={((catg.some((fil) => ((levl1.category_id == fil.parent_id))))) ? 'has-children' : ''} key={levl1.id}>
                          <a href="#">
                            <span className="img-link">
                              <Image src={`http://countydev92-001-site1.ftempurl.com/${levl1.category_icon_url}`} height={20} width={20} alt="Ecom" />
                            </span>
                            <span className="text-link">{levl1.name}</span>
                          </a>
                          <ul
                            className={((catg.some((fil) => ((levl1.category_id == fil.parent_id))))) ? 'sub-menu' : ''}
                            style={{ paddingRight: "0" }}
                          >
                            {catg
                              .filter(
                                (levl2) => levl2.level === 2 && levl1.category_id == levl2.parent_id)
                              .map((levl2) => (
                                <>
                                  <li className={((catg.some((fil) => ((levl2.category_id == fil.parent_id))))) ? 'has-children' : ''}>
                                    <a href="#">{levl2.name}</a>

                                    <ul className={((catg.some((fil) => ((levl2.category_id == fil.parent_id))))) ? 'has-sub-menu' : ''}
                                    >
                                      {catg
                                        .filter(
                                          (levl3) =>
                                            levl3.level === 3 &&
                                            levl2.category_id ==
                                            levl3.parent_id
                                        )
                                        .map((levl3) => (
                                          <>
                                            <li>
                                              <Link href={{
                                                pathname: '/ShopGrid',
                                                query:
                                                  `page_size=30&page_number=1&search_string=-1&sort_column=product_name&sort_order=ASC&categories_ids=${levl2.parent_id}&brands_ids=-1&price_from=0.00&price_to=1000.00&waranty_duration_ids=-1&vendor_id=-1`

                                              }}>{levl3.name}</Link>
                                            </li>
                                          </>
                                        ))}
                                    </ul>
                                  </li>
                                </>
                              ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="header-nav d-inline-block">
              <nav className="nav-main-menu d-none d-xl-block">
                <ul className="main-menu main-ctg">
                  <li>
                    {" "}
                    <Link href={`/ShopGrid`}>Fashion</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={`/ShopGrid`}>Kids Zone</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={`/ShopGrid`}>Games</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={`/ShopGrid`}>Electronics</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={`/ShopGrid`}>Medicine & Fitness</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={`/ShopGrid`}>Grocery</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={`/ShopGrid`}>Food Court</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={`/ShopGrid`}>Automotive & Agriculture</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={`/ShopGrid`}>Services</Link>
                  </li>
                </ul>

                {/* <!-- <ul className="main-menu" >
                <li className="has-children"> <a href="shop-grid.html">Fashion</a>
                <li className="has-children"> <a href="shop-grid.html">Kid's Zone</a>
                <li className="has-children"> <a href="shop-grid.html">Games</a>
                <li className="has-children"> <a href="shop-grid.html">Electronics</a></li>
                <li className="has-children"> <a href="shop-grid.html">Medicine & Fitness</a></li>
                <li className="has-children"> <a href="shop-grid.html">Grocery</a></li>
                <li className="has-children"> <a href="shop-grid.html">Food Court</a></li>
                <li className="has-children"> <a href="shop-grid.html">Automotive & Agriculture</a></li>
                <li className="has-children"> <a href="shop-grid.html">Services</a></li>
                  </ul> --> */}
              </nav>
            </div>
            {/* <!-- <div className="discount font-16 font-bold">SPECIAL OFFER</div> --> */}
          </div>
        </div>
        {/* <!--===== Dynamic Categories  DIV END! =====--> */}
      </header>
      {/*  <!--=====Mobile View Menu=====--> */}
      <div ref={myRef2} className={`${toggleClass ? "sidebar-visible" : " "
        } mobile-header-wrapper-style perfect-scrollbar`}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-logo">
              <a className="d-flex" href="index.html">
                <img alt="Ecom" src={logo.src} />
              </a>
            </div>
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav className="mt-15">
                  <ul className="mobile-menu font-heading">
                    <li className="has-children">
                      <Link className="active" href={`/`}>
                        Home
                      </Link>
                      {/* <span className="menu-expand"><i className="fi-rr-caret-down"></i></span> */}
                      {/* <ul className="sub-menu"></ul> */}
                    </li>
                    <li className="has-children">
                      <Link href={`/ShopGrid`}>Shop</Link>
                    </li>
                    <li>
                      <Link href={`/About`}>About</Link>
                    </li>
                    <li>
                      <Link href={`/Contact`}>Contact</Link>
                    </li>
                    <li
                      className={`has-children ${expandList ? "active" : ""}`}
                    >
                      <Link href={`/VendorList`}>Vendors</Link>
                      <span className="menu-expand" onClick={expand}>
                        <i className="fi-rr-caret-down"></i>
                      </span>
                      {expandList && (
                        <ul className="sub-menu">
                          <li>
                            <Link href={`/VendorList`}>Vendors Listing</Link>
                          </li>
                          <li>
                            <Link href={`/SingleVendor`}>Vendor Single</Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      {" "}
                      <Link href={`/ShopGrid`}>Fashion</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href={`/ShopGrid`}>Kids Zone</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href={`/ShopGrid`}>Games</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href={`/ShopGrid`}>Electronics</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href={`/ShopGrid`}>Medicine & Fitness</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href={`/ShopGrid`}>Grocery</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href={`/ShopGrid`}>Food Court</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href={`/ShopGrid`}>Automotive & Agriculture</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href={`/ShopGrid`}>Services</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="mobile-account">
                <div className="mobile-header-top">
                  {/* Account Options */}
                  <div className="user-account">
                    <a href="page-account.html">
                      <img src={account} alt="Ecom" />
                    </a>
                    <div className="content">
                      <h6 className="user-name">
                        Hello<span className="text-brand"> Steven !</span>
                      </h6>
                      <p className="font-xs text-muted">
                        You have 3 new messages
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="mobile-menu">
                  <li>
                    <Link href={`/Account`}>My Account</Link>
                  </li>
                  <li>
                    <Link href={`/OrderTracking`}>Order Tracking</Link>
                  </li>
                  <li>
                    <Link href={`/MyOrders`}>My Orders</Link>
                  </li>
                  <li>
                    <Link href={`/WishList`}>My Wishlist</Link>
                  </li>
                  <li>
                    <Link href={`/Setting`}>Setting</Link>
                  </li>
                  <li onClick={SignOut}>
                    Sign out
                  </li>
                </ul>
              </div>
              <div className="mobile-banner">
                <div className="bg-5 block-iphone">
                  <span className="color-brand-3 font-sm-lh32">
                    Starting from $899
                  </span>
                  <h3 className="font-xl mb-10">iPhone 12 Pro 128Gb</h3>
                  <p className="font-base color-brand-3 mb-10">Special Sale</p>
                  <Link className="btn btn-arrow" href={`/ShopGrid`}>
                    learn more
                  </Link>
                </div>
              </div>
              <div className="site-copyright color-gray-400 mt-30">
                Copyright 2022 &copy; Ecom - Marketplace Template.
                <br />
                Designed by
                {/* <a href="http://alithemes.com" target="_blank">
                  &nbsp; AliThemes
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  <!--=====Mobile View Menu End=====--> */}
    </div>
  );
};

export default Header;
