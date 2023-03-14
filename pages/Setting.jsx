import React from 'react'
import Loader from '../Components/Loaderr'
import Topbar from '../Components/Topbar'
import Header from "../Components/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from '../Components/Footer';
import Settings from '../Components/Settings';
import Link from 'next/link';
const SettingPage = (props) => {
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
        <div className="breadcrumbs-div">
          <div className="container">
            <ul className="breadcrumb">
            <li><Link className="font-xs color-gray-1000" href={`/`}>Home</Link></li>
              <li><Link className="font-xs color-gray-500" href={`/Account`}>Account</Link></li>
              <li><Link className="font-xs color-gray-500" href={`/Settings`}>Settings</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container pt-10">
      <div className="col-10"> 
      <Settings styleClass={"tab-pane fade active show"} info={props.info} allAddress={props.allAddress}/>
      </div>
     
      </div>
  
      </main>
      <Footer/>
    </>
  )
}

export default SettingPage
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