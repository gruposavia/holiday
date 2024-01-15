/* eslint-disable @next/next/no-page-custom-font */
"use client";

import Aos from "aos";
import { useEffect } from "react";
import SrollTop from "../../components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "../../styles/index.scss";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Link from "next/link";
import TagManager from 'react-gtm-module'
import Head from 'next/head';

const tagManagerArgs = {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID_PRODUCTION
}

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
  if(tagManagerArgs.gtmId) TagManager.initialize(tagManagerArgs)
}


export default function RootLayout({ children }) {

  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
    
  }, []);

  return (
    <html lang='en' >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body>
        <main>
          <Provider store={store}>
            {children}
            <SrollTop />
          </Provider>
        </main>
      </body>
    </html>
  );
}
