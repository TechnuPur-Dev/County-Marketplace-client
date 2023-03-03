import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'

const Banner = (props) => {
  const [bannerData, setBannerData] = useState(props?.banner)
  let router = useRouter()
  console.log(router, 'bannnerss');
  useEffect(() => {
    if (router.route == '/') {
      console.log(bannerData, 'bannnerss');
      let slider = bannerData.filter((image) => (image.banner_place_type == "Slider"))
      console.log(slider, 'bannnerss');
      setBannerData(slider[0])
    }
    else if (router.route == '/ShopGrid') {
      console.log(bannerData, 'bannnerss');
      let slider = bannerData.filter((image) => (image.banner_place_type == "Slider"))
      console.log(slider, 'bannnerss');
      setBannerData(slider[1])
    }
    else {
      alert('page nhi')
    }
  }, [])


  return (
    <div className="section-box mt-30 mb-50">
      <div className="container">
        <div className="box-ads-2 box-ads-3"> <img src={`${bannerData?.banner_url}`} alt="Ecom" />
          <div className="ads-info">
            <h6 className="color-white mb-5">{bannerData?.banner_heading}</h6>
            <h3 className="color-white mb-15">{bannerData?.banner_text}</h3>
            <Link
              href={{
                pathname: '/ShopGrid',
                query:
                  `page_size=30&page_number=1&search_string=-1&sort_column=product_name&sort_order=ASC&categories_ids=-1&brands_ids=-1&price_from=0.00&price_to=1000.00&waranty_duration_ids=-1&vendor_id=-1`

              }}
              className="btn btn-brand-2 btn-arrow-right">{bannerData?.banner_heading}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
