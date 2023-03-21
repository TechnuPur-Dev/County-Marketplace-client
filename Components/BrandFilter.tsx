import React from 'react'

const BrandFilter = () => {
  return (
    <>
      <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" checked={true} />
                          <span className="text-small">Apple</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">12</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Sony</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">34</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Toshiba</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">56</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Assus</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">78</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Samsung</span>
                          <span className="checkmark"></span>
                        </label>
                        <span className="number-item">23</span>
                      </li>
                    </ul> 
    </>
  )
}

export default BrandFilter
