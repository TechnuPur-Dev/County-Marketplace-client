// import '@/styles/globals.css'\
import { useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/mystyle.css'; 

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Component {...pageProps} />
}
