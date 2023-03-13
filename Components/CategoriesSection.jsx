import Image from 'next/image';
import React, { useState } from 'react'
import Link from "next/link";
const CategoriesSection = (props) => {
  const [catg, setCatg] = useState(props.categories)
  return (
    <div className="container">
      <div className="pb-0 head-main text-center border-none">
        <h4 className="color-gray-900">Most Popular Categories</h4>
      </div>
      <div className="mt-10">
        <ul className="list-9-col ">

          {catg?.filter((levl1) => levl1.level === 1).map((levl1, index) => (
            <li key={index} >
              
                <div className="box-category hover-up">
                  <div className="image"><Link href={{
                pathname: '/ShopGrid',
                query:
                  `page_size=30&page_number=1&search_string=-1&sort_column=product_name&sort_order=ASC&categories_ids=${levl1.category_id}&brands_ids=-1&price_from=0.00&price_to=1000.00&waranty_duration_ids=-1&vendor_id=-1`

              }}><Image height={110} width={70} src={`http://countydev92-001-site1.ftempurl.com/${levl1.category_icon_url}`} alt="Ecom" /></Link></div>
                  <div className="text-info"><a className="font-sm color-gray-900 font-bold" >{levl1.name}</a>
                    <p className="font-xs color-gray-500">1025 items</p>
                  </div>
                </div>
              
            </li>
          ))}


        </ul>
      </div>
    </div>
  )
}

export default CategoriesSection
