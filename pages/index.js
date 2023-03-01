import Banner from "../Components/Banner";
import BestSeller from "../Components/BestSeller";
import CategoriesSection from "../Components/CategoriesSection";
import DealsSection from "../Components/DealsSection";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import InfoSection from "../Components/InfoSection";
import Loader from "../Components/Loaderr";
import Topbar from "../Components/Topbar";
import TopBrands from "../Components/TopBrands";
import ScrollToTop from "react-scroll-to-top";
import img1 from "../public/imgs/page/product/img-gallery-1.jpg";
import img2 from "../public/imgs/page/product/img-gallery-2.jpg";
import star from "../public/imgs/template/icons/star.svg";
import QuickModal from "@/Components/QuickModal";
export default function Home(props) {
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
      <Header />
      <main className="main">
        <DealsSection />
        <InfoSection />
        <CategoriesSection />
        <Banner banner={props.banners} />
        <BestSeller />
        <TopBrands />
        {/* <!----quickview modal ---->*/}
        <div
          className="modal fade"
          id="ModalQuickview"
          tabindex="-1"
          aria-hidden="true"
          style={{ display: "none" }}
        >
         <QuickModal star={star} img1={img1} img2={img2}/>
        </div>
        {/* <!----quickview modal end ---->*/}
      </main>
      <Footer />
    </>
  );
}
export async function getServerSideProps(context) {
  
  var axios = require('axios');
  let banners = []
  var config1 = {
    method: 'get',
    url: `http://countydev92-001-site1.ftempurl.com/api/marketplace/getStoreBanner?status=active`,
   
  };

  try {
    console.log(context,'context');
    const response = await axios(config1); // wait for the axios request to complete
    banners = response.data.payload;
  } catch (error) {
    console.log(error);
  }
  

  return {
    props: {banners}, // pass the populated products array as props
  };
}