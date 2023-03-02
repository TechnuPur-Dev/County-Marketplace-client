import React, { useState } from 'react'
import Loader from '../Components/Loaderr'
import Topbar from '../Components/Topbar'
import Header from "../Components/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from '../Components/Footer';
import googleImg from "../public/imgs/page/account/google.svg"
import amazonImg from "../public/imgs/page/account/amazon.svg"
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Register = (props) => {
  const [show, setShow] = useState(false);
  let [validation, setValidtation] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [register, setRegister] = useState({
    username: "",
    full_name: "",
    email: "",
    password: ""
  })
  const registerUser = () => {
 
    let validate = false;
    if (register.password == '' || register.email == '' || register.full_name == '' || register.username == '')
      validate = true;
    setValidtation(validate)
    var axios = require('axios');
    var data = JSON.stringify(register);
    if (!validate) {
      localStorage.setItem("e-mail", register.email);
      var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://countydev92-001-site1.ftempurl.com/api/marketplace/registered_customer',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios(config)
        .then(function (response) {
          console.log(data);
          alert(JSON.stringify(response.data.message));
          handleShow();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  return (
    <>
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
      <Header categories={props.categories}/>
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
                    <div className="form-group">
                      <label className="mb-5 font-sm color-gray-700">Username *</label>
                      <input className="form-control" type="text" value={register.username} onChange={(e) => { setRegister({ ...register, username: e.target.value }) }}  placeholder="stevenjob" />
                      {validation && register.username=='' && <span className="error">This field is required !</span>}

                    </div>
                    <label className="mb-5 font-sm color-gray-700">Full Name *</label>
                    <input className="form-control" type="text" value={register.full_name} onChange={(e) => { setRegister({ ...register, full_name: e.target.value }) }} placeholder="Steven job" />
                    {validation && register.full_name=='' &&  <span className="error">This field is required !</span>}

                  </div>
                  <div className="form-group">
                    <label className="mb-5 font-sm color-gray-700">Email *</label>
                    <input className="form-control" type="email" value={register.email} onChange={(e) => { setRegister({ ...register, email: e.target.value }) }}  placeholder="stevenjob@gmail.com" />
                    {validation && register.email=='' &&  <span className="error">This field is required !</span>}
                  </div>

                  <div className="form-group">
                    <label className="mb-5 font-sm color-gray-700">Password *</label>
                    <input className="form-control" type="password" value={register.password} onChange={(e) => { setRegister({ ...register, password: e.target.value }) }} placeholder="********" />
                    {validation && register.password=='' &&  <span className="error">This field is required !</span>}

                  </div>
                  {/* <div className="form-group">
                  <label className="mb-5 font-sm color-gray-700">Re-Password *</label>
                  <input className="form-control" type="password" placeholder="******************"/>
                </div> */}
                  <div className="form-group">
                    <label>
                      <input className="checkagree" type="checkbox" />By clicking Register button, you agree our terms and policy,
                    </label>
                  </div>
                  <div className="form-group">
                    <input className="font-md-bold btn btn-buy" type="submit" onClick={registerUser} value="Sign Up" />
                  </div>


                  <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header  >
                      <Modal.Title >Verify OTP</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="form-register  mb-5">
                        <div className="form-group">
                          <label className="mb-5 font-sm color-gray-700">Email *</label>
                          <input className="form-control" type="email" placeholder="stevenjob@gmail.com" />
                        </div>
                        <div className="form-group">
                          <label className="mb-5 font-sm color-gray-700">OTP *</label>
                          <input className="form-control" type="number" placeholder="1234" />
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Verify
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <div className="mt-20"><span className="font-xs color-gray-500 font-medium">Already have an account?</span><Link className="font-xs color-brand-3 font-medium" href={`/Login`}> Sign In</Link></div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="box-login-social pt-65 pl-50">
                  <h5 className="text-center">Use Social Network Account</h5>
                  <div className="box-button-login mt-25">
                    <a className="btn btn-login font-md-bold color-brand-3 mb-15">
                      Sign up with<img src={googleImg.src} alt="Ecom" /></a>
                    <a className="btn btn-login font-md-bold color-brand-3 mb-15">Sign up with
                      <span className="color-blue font-md-bold"> Facebook</span></a>
                    <a className="btn btn-login font-md-bold color-brand-3 mb-15">
                      Sign up with<img src={amazonImg.src} alt="Ecom" /></a></div>
                  <div className="mt-10 text-center"><span className="font-xs color-gray-900">
                    Buying for work?</span><a className="color-brand-1 font-xs" href="#">
                      Create a free business account</a></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Register
export async function getServerSideProps(context) {
  var axios = require('axios');
  let categories=[]
  var config2 = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://countydev92-001-site1.ftempurl.com/api/marketplace/GetCategorys",
    headers: {},
  };

  try {
    const response = await axios(config2); // wait for the axios request to complete
    categories = response.data.payload;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {categories}, // pass the populated products array as props
  };
}