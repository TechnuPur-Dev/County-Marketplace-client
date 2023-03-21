import React from 'react'
import star from "../public/imgs/template/icons/star.svg";
import greyStar from "../public//imgs/template/icons/star-gray.svg"
const RatingFilter = () => {
  return (
    <>
     <ul className="list-checkbox">
                      <li className="mb-5">
                        <a href="#">
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                            (5 stars)
                          </span>
                        </a>
                      </li>
                      <li className="mb-5">
                        <a href="#">
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={`${greyStar.src}`} alt="Ecom" />
                          <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                            (4 stars)
                          </span>
                        </a>
                      </li>
                      <li className="mb-5">
                        <a href="#">
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={`${greyStar.src}`} alt="Ecom" />
                          <img src={`${greyStar.src}`} alt="Ecom" />
                          <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                            (3 stars)
                          </span>
                        </a>
                      </li>
                      <li className="mb-5">
                        <a href="#">
                          <img src={star.src} alt="Ecom" />
                          <img src={star.src} alt="Ecom" />
                          <img src={`${greyStar.src}`} alt="Ecom" />
                          <img src={`${greyStar.src}`} alt="Ecom" />
                          <img src={`${greyStar.src}`} alt="Ecom" />
                          <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                            (2 stars)
                          </span>
                        </a>
                      </li>
                      <li className="mb-5">
                        <a href="#">
                          <img src={star.src} alt="Ecom" />
                          <img src={`${greyStar.src}`} alt="Ecom" />
                          <img src={`${greyStar.src}`} alt="Ecom" />
                          <img src={`${greyStar.src}`} alt="Ecom" />
                          <img src={`${greyStar.src}`} alt="Ecom" />
                          <span className="ml-10 font-xs color-gray-500 d-inline-block align-top">
                            (1 star)
                          </span>
                        </a>
                      </li>
                    </ul>
      
    </>
  )
}

export default RatingFilter
