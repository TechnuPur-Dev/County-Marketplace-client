import React from 'react'
import star from '../public/imgs/template/icons/star.svg'
const Whishlist = (props) => {
  const {styleClass}=props
  return (
    <div className={styleClass} id="tab-wishlist" role="tabpanel" aria-labelledby="tab-wishlist">
    <div className="box-wishlist">
      <div className="head-wishlist">
        <div className="item-wishlist">
          <div className="wishlist-cb">
            <input className="cb-layout cb-all" type="checkbox" />
          </div>
          <div className="wishlist-product"><span className="font-md-bold color-brand-3">Product</span></div>
          <div className="wishlist-price"><span className="font-md-bold color-brand-3">Price</span></div>
          <div className="wishlist-status"><span className="font-md-bold color-brand-3">Stock status</span></div>
          <div className="wishlist-action"><span className="font-md-bold color-brand-3">Action</span></div>
          <div className="wishlist-remove"><span className="font-md-bold color-brand-3">Remove</span></div>
        </div>
      </div>
      <div className="content-wishlist">
        <div className="item-wishlist">
          <div className="wishlist-cb">
            <input className="cb-layout cb-select" type="checkbox" />
          </div>
          <div className="wishlist-product">
            <div className="product-wishlist">
              <div className="product-image"><a href="shop-single-product.html"><img src="assets/imgs/page/product/img-sub.png" alt="Ecom"/></a></div>
              <div className="product-info"><a href="shop-single-product.html">
                  <h6 className="color-brand-3">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star Refrigerator </h6></a>
                <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
              </div>
            </div>
          </div>
          <div className="wishlist-price">
            <h4 className="color-brand-3">$2.51</h4>
          </div>
          <div className="wishlist-status"><span className="btn btn-gray font-md-bold color-brand-3">In Stock</span></div>
          <div className="wishlist-action"><a className="btn btn-cart font-sm-bold" href="shop-cart.html">Add to Cart</a></div>
          <div className="wishlist-remove"><a className="btn btn-delete" href="#"></a></div>
        </div>
        <div className="item-wishlist">
          <div className="wishlist-cb">
            <input className="cb-layout cb-select" type="checkbox" />
          </div>
          <div className="wishlist-product">
            <div className="product-wishlist">
              <div className="product-image"><a href="shop-single-product.html"><img src="assets/imgs/page/product/img-sub2.png" alt="Ecom"/></a></div>
              <div className="product-info"><a href="shop-single-product.html">
                  <h6 className="color-brand-3">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star Refrigerator </h6></a>
                <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
              </div>
            </div>
          </div>
          <div className="wishlist-price">
            <h4 className="color-brand-3">$1.51</h4>
          </div>
          <div className="wishlist-status"><span className="btn btn-gray font-md-bold color-brand-3">In Stock</span></div>
          <div className="wishlist-action"><a className="btn btn-cart font-sm-bold" href="shop-cart.html">Add to Cart</a></div>
          <div className="wishlist-remove"><a className="btn btn-delete" href="#"></a></div>
        </div>
        <div className="item-wishlist">
          <div className="wishlist-cb">
            <input className="cb-layout cb-select" type="checkbox" />
          </div>
          <div className="wishlist-product">
            <div className="product-wishlist">
              <div className="product-image"><a href="shop-single-product.html"><img src="assets/imgs/page/product/img-sub3.png" alt="Ecom"/></a></div>
              <div className="product-info"><a href="shop-single-product.html">
                  <h6 className="color-brand-3">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star Refrigerator </h6></a>
                <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
              </div>
            </div>
          </div>
          <div className="wishlist-price">
            <h4 className="color-brand-3">$3.51</h4>
          </div>
          <div className="wishlist-status"><span className="btn btn-gray font-md-bold color-brand-3">In Stock</span></div>
          <div className="wishlist-action"><a className="btn btn-cart font-sm-bold" href="shop-cart.html">Add to Cart</a></div>
          <div className="wishlist-remove"><a className="btn btn-delete" href="#"></a></div>
        </div>
        <div className="item-wishlist">
          <div className="wishlist-cb">
            <input className="cb-layout cb-select" type="checkbox" />
          </div>
          <div className="wishlist-product">
            <div className="product-wishlist">
              <div className="product-image"><a href="shop-single-product.html"><img src="assets/imgs/page/product/img-sub4.png" alt="Ecom"/></a></div>
              <div className="product-info"><a href="shop-single-product.html">
                  <h6 className="color-brand-3">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star Refrigerator </h6></a>
                <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
              </div>
            </div>
          </div>
          <div className="wishlist-price">
            <h4 className="color-brand-3">$4.51</h4>
          </div>
          <div className="wishlist-status"><span className="btn btn-gray font-md-bold color-brand-3">In Stock</span></div>
          <div className="wishlist-action"><a className="btn btn-cart font-sm-bold" href="shop-cart.html">Add to Cart</a></div>
          <div className="wishlist-remove"><a className="btn btn-delete" href="#"></a></div>
        </div>
        <div className="item-wishlist">
          <div className="wishlist-cb">
            <input className="cb-layout cb-select" type="checkbox" />
          </div>
          <div className="wishlist-product">
            <div className="product-wishlist">
              <div className="product-image"><a href="shop-single-product.html"><img src="assets/imgs/page/product/img-sub5.png" alt="Ecom"/></a></div>
              <div className="product-info"><a href="shop-single-product.html">
                  <h6 className="color-brand-3">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star Refrigerator </h6></a>
                <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
              </div>
            </div>
          </div>
          <div className="wishlist-price">
            <h4 className="color-brand-3">$3.51</h4>
          </div>
          <div className="wishlist-status"><span className="btn btn-gray font-md-bold color-brand-3">In Stock</span></div>
          <div className="wishlist-action"><a className="btn btn-cart font-sm-bold" href="shop-cart.html">Add to Cart</a></div>
          <div className="wishlist-remove"><a className="btn btn-delete" href="#"></a></div>
        </div>
        <div className="item-wishlist">
          <div className="wishlist-cb">
            <input className="cb-layout cb-select" type="checkbox" />
          </div>
          <div className="wishlist-product">
            <div className="product-wishlist">
              <div className="product-image"><a href="shop-single-product.html"><img src="assets/imgs/page/product/img-sub.png" alt="Ecom"/></a></div>
              <div className="product-info"><a href="shop-single-product.html">
                  <h6 className="color-brand-3">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star Refrigerator </h6></a>
                <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
              </div>
            </div>
          </div>
          <div className="wishlist-price">
            <h4 className="color-brand-3">$2.51</h4>
          </div>
          <div className="wishlist-status"><span className="btn btn-gray font-md-bold color-brand-3">In Stock</span></div>
          <div className="wishlist-action"><a className="btn btn-cart font-sm-bold" href="shop-cart.html">Add to Cart</a></div>
          <div className="wishlist-remove"><a className="btn btn-delete" href="#"></a></div>
        </div>
        <div className="item-wishlist">
          <div className="wishlist-cb">
            <input className="cb-layout cb-select" type="checkbox" />
          </div>
          <div className="wishlist-product">
            <div className="product-wishlist">
              <div className="product-image"><a href="shop-single-product.html"><img src="assets/imgs/page/product/img-sub2.png" alt="Ecom"/></a></div>
              <div className="product-info"><a href="shop-single-product.html">
                  <h6 className="color-brand-3">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star Refrigerator </h6></a>
                <div className="rating"><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><img src={star.src} alt="Ecom"/><span className="font-xs color-gray-500"> (65)</span></div>
              </div>
            </div>
          </div>
          <div className="wishlist-price">
            <h4 className="color-brand-3">$1.51</h4>
          </div>
          <div className="wishlist-status"><span className="btn btn-gray font-md-bold color-brand-3">In Stock</span></div>
          <div className="wishlist-action"><a className="btn btn-cart font-sm-bold" href="shop-cart.html">Add to Cart</a></div>
          <div className="wishlist-remove"><a className="btn btn-delete" href="#"></a></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Whishlist