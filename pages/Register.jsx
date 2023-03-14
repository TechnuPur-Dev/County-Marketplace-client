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
import { toast } from 'react-toastify';
import { useRouter  } from 'next/router';
import Cookies from "js-cookie";

const Register = (props) => {
  const router = useRouter()
  var axios = require('axios');
  const [show, setShow] = useState(false);
  let [validation, setValidtation] = useState(false);
  let [otpVerify, setOtpVerify] = useState({ email: '', otp: '' })
  const [register, setRegister] = useState({
    username: "",
    full_name: "",
    email: "",
    password: "",
    phone_number: "",
    is_email_verification: false
  })
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://countydev92-001-site1.ftempurl.com/api/marketplace/getOTP',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        let customers_id = localStorage.getItem("customers_id");
        let Storedemail = localStorage.getItem("e-mail");
        let getOtp = response.data?.find(element => {
          return element.store_customers_id == customers_id;
        });
        setOtpVerify({ email: Storedemail, otp: getOtp.verification_code })
      })
      .catch(function (error) {
        console.log(error);
      });

  };
 
  const registerUser = () => {
    let validate = false;
    let dataRegister={}
    if (register.password == '' || register.username == '' || register.full_name == '')
      validate = true;
    if (register.phone_number == '') {
      if (register.email == '')
        validate = true;
    }
    if (register.email != '') {
      dataRegister= {...register, is_email_verification: true }
      setRegister(dataRegister)
    }
    setValidtation(validate)
    if (!validate) {
      console.log(dataRegister,'registerrerr');
      var data = JSON.stringify(dataRegister);
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
          localStorage.setItem("customers_id", response.data.payload.store_customers_id);
          localStorage.setItem("username", response.data.payload.username);
          console.log(data,data);
          toast.success(
            JSON.stringify(response.data.message)
          );
          handleShow();
        })
        .catch(function (error) {
         
          toast.error(
            JSON.stringify(error?.response?.data?.Message)
          );
        });
    }
  }
  const Verifying = () => {
    var config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `http://countydev92-001-site1.ftempurl.com/api/marketplace/VerifyOTP?otp=${otpVerify.otp}&email=${otpVerify.email}`,
      headers: {}
    };

    axios(config)
      .then(function (response) {
        toast.success(
          JSON.stringify(response.data.message)
        );
        handleClose();
        router.push(`/Login`);
      })
      .catch(function (error) {
        toast.error(
          JSON.stringify(error?.response?.data?.Message)
        );
      });

  }
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
      <Header categories={props.categories} />
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
                      <input className="form-control" type="text" value={register.username} onChange={(e) => { setRegister({ ...register, username: e.target.value }) }} placeholder="stevenjob" />
                      {validation && register.username == '' && <span className="error">This field is required !</span>}

                    </div>
                    <label className="mb-5 font-sm color-gray-700">Full Name *</label>
                    <input className="form-control" type="text" value={register.full_name} onChange={(e) => { setRegister({ ...register, full_name: e.target.value }) }} placeholder="Steven job" />
                    {validation && register.full_name == '' && <span className="error">This field is required !</span>}

                  </div>
                  <div className="form-group">
                    <label className="mb-5 font-sm color-gray-700">Email *</label>
                    <input className="form-control" type="email" value={register.email} onChange={(e) => { setRegister({ ...register, email: e.target.value }) }} placeholder="stevenjob@gmail.com" />
                    {validation && register.email == '' && <span className="error">This field is required !</span>}
                  </div>
                  <div className="form-group">
                    <label className="mb-5 font-sm color-gray-700">Phone Number *</label>
                    <input className="form-control" type="number" value={register.phone_number} onChange={(e) => { setRegister({ ...register, phone_number: e.target.value }) }} placeholder="03065423891" />
                    {validation && register.phone_number == '' && <span className="error">This field is required !</span>}

                  </div>

                  <div className="form-group">
                    <label className="mb-5 font-sm color-gray-700">Password *</label>
                    <input className="form-control" type="password" value={register.password} onChange={(e) => { setRegister({ ...register, password: e.target.value }) }} placeholder="********" />
                    {validation && register.password == '' && <span className="error">This field is required !</span>}

                  </div>

                  {/* <div className="form-group">
                  <label className="mb-5 font-sm color-gray-700">Re-Password *</label>
                  <input className="form-control" type="password" placeholder="******************"/>
                </div> */}
                  {/* <div className="form-group">
                    <label>
                      <input className="checkagree" type="checkbox" />By clicking Register button, you agree our terms and policy,
                    </label>
                  </div> */}
                  <div className="form-group">
                    <input className="font-md-bold btn btn-buy" type="submit" onClick={registerUser} value="Sign Up" />
                  </div>


                  <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header  >
                      <Modal.Title >Verify OTP</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="form-register  ">
                        <div className="form-group">
                          <label className=" font-sm color-gray-700">Email *</label>
                          <input className="form-control" type="email" value={otpVerify?.email} placeholder="stevenjob@gmail.com" />
                        </div>
                        <div className="form-group">
                          <label className=" font-sm color-gray-700">OTP *</label>
                          <input className="form-control" type="text" value={otpVerify?.otp} placeholder="12G4" />
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={Verifying}>
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
  const { req, res } = context;
  const token = req.cookies.token || Cookies.get("token");
  if (token) {
    res.setHeader("location", "/Account");
    res.statusCode = 302;
    res.end();
  }
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