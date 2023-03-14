import React, { useEffect,useState } from 'react'
import Loader from '../Components/Loaderr'
import Topbar from '../Components/Topbar'
import Header from "../Components/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from '../Components/Footer';
import OrderTracking from '../Components/OrderTracking';
import Settings from '../Components/Settings';
import Orders from '../Components/Orders';
import Whishlist from '../Components/Whishlist';
import Cookies from "js-cookie"; 

const Account = (props) => {
  console.log(props,'infooo');
  const [info, setInfo] = useState(props?.info)
  useEffect(() => {
    localStorage.setItem("username",props?.info?.full_name)
    localStorage.setItem("e-mail",props?.info?.email)
  }, [])
  
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
       <Header categories={props?.categories} />
      <main className="main">
      <section className="section-box shop-template mt-30">
      <div className="container box-account-template">
      <h3>Hello {info?.full_name}</h3>
          <p className="font-md color-gray-500">From your account dashboard. you can easily check & view your recent orders,<br className="d-none d-lg-block"/>manage your shipping and billing addresses and edit your password and account details.</p>
          <div className="box-tabs mb-100">
          <ul className="nav nav-tabs nav-tabs-account" role="tablist">
              <li><a className="active" href="#tab-notification" data-bs-toggle="tab" role="tab" aria-controls="tab-notification" aria-selected="true">Notification</a></li>
              <li><a href="#tab-wishlist" data-bs-toggle="tab" role="tab" aria-controls="tab-wishlist" aria-selected="true">Wishlist</a></li>
              <li><a href="#tab-orders" data-bs-toggle="tab" role="tab" aria-controls="tab-orders" aria-selected="true">Orders</a></li>
              <li><a href="#tab-order-tracking" data-bs-toggle="tab" role="tab" aria-controls="tab-order-tracking" aria-selected="true">Order Tracking</a></li>
              <li><a href="#tab-setting" data-bs-toggle="tab" role="tab" aria-controls="tab-setting" aria-selected="true">Setting</a></li>
            </ul>
            <div className="border-bottom mt-20 mb-40"></div>
            <div className="tab-content mt-30">
            <div className="tab-pane fade active show" id="tab-notification" role="tabpanel" aria-labelledby="tab-notification">
                <div className="list-notifications">
                  <div className="item-notification">
                    <div className="image-notification"><img src="assets/imgs/page/account/img-1.png" alt="Ecom"/></div>
                    <div className="info-notification">
                      <h5 className="mb-5">COD payment confirmed</h5>
                      <p className="font-md color-brand-3">Order<span className="font-md-bold"> 220914QR92BXNH</span> has been confirmed. Please check the estimated delivery time in the order details section!</p>
                    </div>
                    <div className="button-notification"><a className="btn btn-buy w-auto">View Details</a></div>
                  </div>
                  
                  
                </div>
                {/* <nav>
                  <ul className="pagination">
                    <li className="page-item"><a className="page-link page-prev" href="#"></a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link active" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                    <li className="page-item"><a className="page-link" href="#">6</a></li>
                    <li className="page-item"><a className="page-link page-next" href="#"></a></li>
                  </ul>
                </nav> */}
              </div>
             <Whishlist styleClass={"tab-pane fade"}/>
              <Orders styleClass={"tab-pane fade"}/>
             <OrderTracking styleClass={"tab-pane fade"}/>
             <Settings styleClass={"tab-pane fade"} info={props.info} allAddress={props.allAddress}/>
             
            </div>
          </div>
      </div>
      </section>
      </main>
      <Footer/>
    </>
  )
}

export default Account
export async function getServerSideProps(context) {
  const { req, res } = context;
  const token = req.cookies.token || Cookies.get("token");
  if (!token) {
    res.setHeader("location", "/Login");
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
  let info = {}
  var config1 = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://countydev92-001-site1.ftempurl.com/api/marketplace/getStoreCustomerProfile",
  
  headers: { 
    'Authorization': `Bearer ${token}`
  }
  };

  try {
    const response = await axios(config1); // wait for the axios request to complete
    info = response.data.payload;
    
  } catch (error) {
    console.log(error);
     
  }
  let allAddress = {}
  var config1 = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://countydev92-001-site1.ftempurl.com/api/marketplace/GetCustomerAddressBook",
  
  headers: { 
    'Authorization': `Bearer ${token}`
  }
  };

  try {
    const response = await axios(config1); // wait for the axios request to complete
    allAddress = response.data.payload;
    
  } catch (error) {
    console.log(error);
     
  }
  return {
    props: { categories,info,allAddress }, // pass the populated products array as props
  };
}