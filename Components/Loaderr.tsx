import React, { useState, useEffect } from "react";
import favicon from "../public/imgs/template/favicon.svg";
const Loader = (props) => {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    if (props.data.length != 0)
      setFlag(false);

  }, []);

  return (
    <>
      {flag && (
        <div id="preloader-active">
          <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
              <div className="text-center">
                <img className="mb-10" src={favicon.src} alt="Ecom" />
                <div className="preloader-dots"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
