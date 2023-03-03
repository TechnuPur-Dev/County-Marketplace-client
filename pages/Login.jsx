import React, { useState } from "react";
import Loader from "../Components/Loaderr";
import Topbar from "../Components/Topbar";
import Header from "../Components/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../Components/Footer";
import Link from "next/link";
import googleImg from "../public/imgs/page/account/google.svg";
import amazonImg from "../public/imgs/page/account/amazon.svg";
import  qs from 'qs'
import { toast } from "react-toastify";

const Login = (props) => {
  let [loginData, setLoginData] = useState({
    username: '',
    password: '',
    grant_type: 'password'
  })
  const SignIn = () => {
    var axios = require('axios');
    var data = qs.stringify(loginData);
    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://countydev92-001-site1.ftempurl.com/login',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        toast.success(
          JSON.stringify(response.data.message)
        );
      })
      .catch(function (error) {

        toast.error(
          JSON.stringify(error?.response?.data?.Message)
        );
      });

  }

  return (
    <>
      {" "}
      <Loader />
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
        <section className="section-box shop-template mt-60">
          <div className="container">
            <div className="row mb-100">
              <div className="col-lg-1"></div>
              <div className="col-lg-5">
                <h3>Member Login</h3>
                <p className="font-md color-gray-500">Welcome back!</p>
                <div className="form-register mt-30 mb-30">
                  <div className="form-group">
                    <label className="mb-5 font-sm color-gray-700">
                      Email / Phone *
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="stevenjob@gmail.com"
                      value={loginData.username}
                      onChange={(e) => { setLoginData({ ...loginData, username: e.target.value }) }}
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-5 font-sm color-gray-700">
                      Password *
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="********"
                      value={loginData.password}
                      onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="color-gray-500 font-xs">
                          <input className="checkagree" type="checkbox" />
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-6 text-end">
                      <div className="form-group">
                        <a className="font-xs color-gray-500" href="#">
                          Forgot your password?
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      className="font-md-bold btn btn-buy"
                      type="submit"
                      value="Log In"
                      onClick={SignIn}
                    />
                  </div>
                  <div className="mt-20">
                    <span className="font-xs color-gray-500 font-medium">
                      Have not an account?
                    </span>
                    <Link
                      className="font-xs color-brand-3 font-medium"
                      href={`/Register`}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="box-login-social pt-65 pl-50">
                  <h5 className="text-center">Use Social Network Account</h5>
                  <div className="box-button-login mt-25">
                    <a className="btn btn-login font-md-bold color-brand-3 mb-15">
                      Sign up with
                      <img src={googleImg.src} alt="Ecom" />
                    </a>
                    <a className="btn btn-login font-md-bold color-brand-3 mb-15">
                      Sign up with
                      <span className="color-blue font-md-bold"> Facebook</span>
                    </a>
                    <a className="btn btn-login font-md-bold color-brand-3 mb-15">
                      Sign up with
                      <img src={amazonImg.src} alt="Ecom" />
                    </a>
                  </div>
                  <div className="mt-10 text-center">
                    <span className="font-xs color-gray-900">
                      Buying for work?
                    </span>
                    <a className="color-brand-1 font-xs" href="#">
                      Create a free business account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
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