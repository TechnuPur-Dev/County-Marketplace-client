import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
const Topbar = () => {
  const [token, settoken] = useState("")
  useEffect(() => {
    const tokenAcc = Cookies.get("token");
    settoken(tokenAcc)
  }, [])
  return (
    <div className="topbar top-brand-2">
      <div className="container-topbar">
        <div className="menu-topbar-left d-none d-xl-block">
          <ul className="nav-small">
            <li>

              <Link className="font-xs" href={`/About`}>
                About Us
              </Link>
            </li>

            {!token && <><li>
              <Link className="font-xs" href={`/Register`}>
                Register
              </Link>
            </li>
              <li>
                <Link className="font-xs" href={`/Login`}>
                  Login
                </Link>
              </li></>}
          </ul>
        </div>
        <div className="info-topbar text-center d-none d-xl-block">
          <span className="font-xs color-brand-3">
            Free shipping for all orders over
          </span>
          <span className="font-sm-bold color-success"> $75.00</span>
        </div>
        <div className="menu-topbar-right">
          <span className="font-xs color-brand-3">Need help? Call Us:</span>
          <span className="font-sm-bold color-success"> + 1800 900</span>
          {/* <div className="dropdown dropdown-language">
            <button
              className="btn dropdown-toggle"
              id="dropdownPage"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
              data-bs-display="static"
            >
              <span className="dropdown-right font-xs color-brand-3">
                <img src={English} /> English
              </span>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-light"
              aria-labelledby="dropdownPage"
              data-bs-popper="static"
            >
              <li>
                <a className="dropdown-item">
                  <img src={English} alt="Ecom" /> English
                </a>
              </li>
              <li>
                <a className="dropdown-item">
                  <img src={France} alt="Ecom" /> Français
                </a>
              </li>
              <li>
                <a className="dropdown-item">
                  <img src={Espa} alt="Ecom" /> Español
                </a>
              </li>
              <li>
                <a className="dropdown-item">
                  <img src={Portugal} alt="Ecom" /> Português
                </a>
              </li>
              <li>
                <a className="dropdown-item">
                  <img src={china} alt="Ecom" /> 中国人
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-language">
            <button
              className="btn dropdown-toggle"
              id="dropdownPage2"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
              data-bs-display="static"
            >
              <span className="dropdown-right font-xs color-brand-3">USD</span>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-light dropdown-menu-end"
              aria-labelledby="dropdownPage2"
              data-bs-popper="static"
            >
              <li>
                <a className="dropdown-item active" href="#">
                  USD
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  EUR
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  AUD
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  SGP
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
