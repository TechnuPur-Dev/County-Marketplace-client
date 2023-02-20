import React from 'react'
import Loader from '../Components/Loaderr'
import Topbar from '../Components/Topbar'
import Header from "../Components/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from '../Components/Footer';
import googleImg from "../public/imgs/page/account/google.svg"
import amazonImg from "../public/imgs/page/account/amazon.svg"
import Link from 'next/link';

const Register = () => {
  return (
    <>
      <Loader/>
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
      <Header />
      <main className="main">
      <section className="section-box shop-template mt-60">
        <div className="container">
          <div className="row mb-100">
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <h3>Create an account</h3>
              <p className="font-md color-gray-500">Access to all features. No credit card required.</p>
              <div className="form-register mt-30 mb-30">
                <div className="form-group">
                  <label className="mb-5 font-sm color-gray-700">Full Name *</label>
                  <input className="form-control" type="text" placeholder="Steven job"/>
                </div>
                <div className="form-group">
                  <label className="mb-5 font-sm color-gray-700">Email *</label>
                  <input className="form-control" type="text" placeholder="stevenjob@gmail.com"/>
                </div>
                <div className="form-group">
                  <label className="mb-5 font-sm color-gray-700">Username *</label>
                  <input className="form-control" type="text" placeholder="stevenjob"/>
                </div>
                <div className="form-group">
                  <label className="mb-5 font-sm color-gray-700">Password *</label>
                  <input className="form-control" type="password" placeholder="******************"/>
                </div>
                <div className="form-group">
                  <label className="mb-5 font-sm color-gray-700">Re-Password *</label>
                  <input className="form-control" type="password" placeholder="******************"/>
                </div>
                <div className="form-group">
                  <label>
                    <input className="checkagree" type="checkbox"/>By clicking Register button, you agree our terms and policy,
                  </label>
                </div>
                <div className="form-group">
                  <input className="font-md-bold btn btn-buy" type="submit" value="Sign Up"/>
                </div>
                <div className="mt-20"><span className="font-xs color-gray-500 font-medium">Already have an account?</span><Link className="font-xs color-brand-3 font-medium" href={`/Login`}> Sign In</Link></div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="box-login-social pt-65 pl-50">
                <h5 className="text-center">Use Social Network Account</h5>
                <div className="box-button-login mt-25">
                <a className="btn btn-login font-md-bold color-brand-3 mb-15">
                Sign up with<img src={googleImg.src} alt="Ecom"/></a>
                <a className="btn btn-login font-md-bold color-brand-3 mb-15">Sign up with
                <span className="color-blue font-md-bold"> Facebook</span></a>
                <a className="btn btn-login font-md-bold color-brand-3 mb-15">
                Sign up with<img src={amazonImg.src} alt="Ecom"/></a></div>
                <div className="mt-10 text-center"><span className="font-xs color-gray-900">
                Buying for work?</span><a className="color-brand-1 font-xs" href="#">
                Create a free business account</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer/>
    </>
  )
}

export default Register
