import React from 'react'
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Loader from "../Components/Loaderr";
import Topbar from "../Components/Topbar";
import ScrollToTop from "react-scroll-to-top";
import InfoSection from '../Components/InfoSection';
import aboutImg from '../public/imgs/page/about/img.png'
import team from '../public/imgs/page/about/staft6.png'
import BrandList from '../Components/BrandList';
import StoreInfo from '../Components/StoreInfo';
import ContactInfo from '../Components/ContactInfo';
import Link from 'next/link';
 const About = (props) => {
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
      <div className="section-box" >
        <div className="breadcrumbs-div">
          <div className="container">
            <ul className="breadcrumb">
              <li><Link className="font-xs color-gray-1000" href={`/`}>Home</Link></li>
              <li><Link className="font-xs color-gray-500" href={`/About`}>About Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <section className="section-box shop-template mt-30 mb-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <h5 className="color-gray-500 mb-10">About us</h5>
              <h2>Global Leading Online Shop</h2>
              <div className="row mt-20">
                <div className="col-lg-6">
                  <p className="font-sm font-medium color-gray-700 mb-15">Ecom expands global footprint, delivering entertaining experiences customised to each user. Branches are expanding both in size and number.</p>
                  <p className="font-sm font-medium color-gray-700 mb-15">Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Lacus vel facilisis volutpat est velit. Urna neque viverra justo nec. Suspendisse faucibus interdum posuere lorem ipsum dolor. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Tortor vitae purus faucibus ornare.</p>
                  <p className="font-sm font-medium color-gray-700 mb-15">Tempus iaculis urna id volutpat lacus laoreet. Id neque aliquam vestibulum morbi blandit. Lacinia quis vel eros donec ac odio tempor orci. Lectus sit amet est placerat in egestas erat imperdiet. Nunc congue nisi vitae suscipit. Sed adipiscing diam donec adipiscing tristique risus.</p>
                  <ul className="list-services mt-20">
                    <li className="hover-up">We provide qualified & expert</li>
                    <li className="hover-up">Modern tools & technology use</li>
                    <li className="hover-up">Neat & cleaning top Services</li>
                    <li className="hover-up">We Develop Digital Future</li>
                  </ul>
                </div>
                <div className="col-lg-6"><img src={aboutImg.src} alt="Ecom"/></div>
              </div>
              <div className="box-contact-support pt-80 pb-50 pl-50 pr-50 background-gray-50 mt-50 mb-90">
                <div className="row">
                  <div className="col-lg-3 mb-30 text-center text-lg-start">
                    <h4 className="mb-5">12 Years</h4>
                    <p className="font-md color-gray-700">We’ve more than 12 years working experience.</p>
                  </div>
                  <div className="col-lg-3 mb-30 text-center text-lg-start">
                    <h4 className="mb-5">2000+ Employee</h4>
                    <p className="font-md color-gray-700 mb-5">We’ve more than 2000 employees working near you.</p>
                  </div>
                  <div className="col-lg-3 mb-30 text-center text-lg-start">
                    <h4 className="mb-5">68 Branches</h4>
                    <p className="font-md color-gray-700 mb-5">We have 68 branches across the country and are expanding</p>
                  </div>
                  <div className="col-lg-3 mb-30 text-center text-lg-start">
                    <h4 className="mb-5">15 Countries</h4>
                    <p className="font-md color-gray-700 mb-5">We are present in 15 countries around the world</p>
                  </div>
                </div>
              </div>
              <h5 className="color-gray-500 mb-10">Behind The Brands</h5>
              <h2 className="mb-40">The people who work at Ecom share the vision and values of our community.</h2>
              <div className="row mb-50">
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card-staff hover-up">
                    <div className="image-staff"><img src={team.src} alt="Ecom"/></div>
                    <div className="info-staff">
                      <h5>Ronald Richards</h5>
                      <p className="font-md color-gray-500">Chief Executive Officer</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card-staff hover-up">
                    <div className="image-staff"><img src={team.src} alt="Ecom"/></div>
                    <div className="info-staff">
                      <h5>Jenny Wilson</h5>
                      <p className="font-md color-gray-500">Chief Financial Officer</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card-staff hover-up">
                    <div className="image-staff"><img src={team.src} alt="Ecom"/></div>
                    <div className="info-staff">
                      <h5>Cody Fisher</h5>
                      <p className="font-md color-gray-500">Chief Operating Officer</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card-staff hover-up">
                    <div className="image-staff"><img src={team.src} alt="Ecom"/></div>
                    <div className="info-staff">
                      <h5>Jacob Jones</h5>
                      <p className="font-md color-gray-500">Chief Technology Officer</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card-staff hover-up">
                    <div className="image-staff"><img src={team.src} alt="Ecom"/></div>
                    <div className="info-staff">
                      <h5>Leslie Alexander</h5>
                      <p className="font-md color-gray-500">Chief Marketing Officer</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card-staff hover-up">
                    <div className="image-staff"><img src={team.src} alt="Ecom"/></div>
                    <div className="info-staff">
                      <h5>Ralph Edwards</h5>
                      <p className="font-md color-gray-500">Chief Human Resources Officer</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card-staff hover-up">
                    <div className="image-staff"><img src={team.src} alt="Ecom"/></div>
                    <div className="info-staff">
                      <h5>Eleanor Pena</h5>
                      <p className="font-md color-gray-500">Chief Legal Officer</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card-staff hover-up">
                    <div className="image-staff"><img src={team.src} alt="Ecom"/></div>
                    <div className="info-staff">
                      <h5>Theresa Webb</h5>
                      <p className="font-md color-gray-500">Chief Product Officer</p>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className="color-gray-500 mb-10">Our Partners</h5>
              <h2 className="mb-40">Trusted by 18.000+ Vendors</h2>
          <BrandList/>
              <div className="border-1 mb-80 mt-50"></div>
             <StoreInfo/>
            </div>
          </div>
        </div>
        <ContactInfo/>
      </section>
      
      <InfoSection/>
      </main>
      <Footer/>
    </>
  )
}
 export default About
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