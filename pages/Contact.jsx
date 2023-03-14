import React from 'react'
import Loader from '../Components/Loaderr'
import Topbar from '../Components/Topbar'
import Header from "../Components/Header";
import ScrollToTop from "react-scroll-to-top";
import StoreInfo from '../Components/StoreInfo';
import ContactInfo from '../Components/ContactInfo';
import Footer from '../Components/Footer';
import InfoSection from '../Components/InfoSection';
import Link from 'next/link';


const Contact = (props) => {
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
        <div className="breadcrumbs-div mb-0">
          <div className="container">
            <ul className="breadcrumb">
              <li><Link className="font-xs color-gray-1000" href={`/`}>Home</Link></li>
              <li><Link className="font-xs color-gray-500" href={`/Contact`}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <section className="section-box shop-template mt-0 mb-30">
        <div className="container">
          <div className="box-contact">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-form">
                  <h3 className="color-brand-3 mt-60">Contact Us</h3>
                  <p className="font-sm color-gray-700 mb-30">Our team would love to hear from you!</p>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input className="form-control" type="text" placeholder="First name"/>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input className="form-control" type="text" placeholder="Last name"/>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input className="form-control" type="email" placeholder="Email"/>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input className="form-control" type="tel" placeholder="Phone number"/>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea className="form-control" placeholder="Message" rows="5"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input className="btn btn-buy w-auto" type="submit" value="Send message"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325467.51371614134!2d-73.98947743776016!3d40.72209526768085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1svi!2s!4v1664373110059!5m2!1svi!2s" height="550" style={{"border":0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
         <StoreInfo/>
        </div>
        <ContactInfo/>
        </section>
        <InfoSection/>
      </main>
      <Footer/>
    </>
  )
}

export default Contact
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
