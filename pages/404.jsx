import React from 'react'
import Loader from '../Components/Loaderr'
import Topbar from '../Components/Topbar'
import Header from "../Components/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from '../Components/Footer';
import account from "../public/imgs/page/account/404.png";
import Link from 'next/link';

const NotFound = (props) => {
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
       <Header categories={props.categories} />
      <main className="main">
      <section className="section-box shop-template mt-60">
        <div className="container">
          <div className="text-center mb-150 mt-50"> 
            <div className="image-404 mb-50"> <img src={account.src} alt="Ecom"/></div>
            <h3>404 - Page Not Found</h3>
            <p className="font-md-bold color-gray-600">Looks like, page does not exist</p>
            <div className="mt-15"> <Link className="btn btn-buy w-auto arrow-back" href={`/`}>Back to Homepage</Link></div>
          </div>
        </div>
      </section>
      </main>
      <Footer/>
    </>
  )
}
 
export default NotFound
