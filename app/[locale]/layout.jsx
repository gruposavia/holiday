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
import Script from 'next/script';
import i18nConfig from '@/i18nConfig';

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


export default function RootLayout({  children}) {

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
        <Script
        id=""
        src="https://ibe.hitit.aero/searchapi.js"
        strategy="beforeInteractive"
        onReady={() => {
          //const api = new CraneSearchAPI('https://ibe.hitit.aero');
          
        }}
      />
          <Provider store={store}>
            {children}
            <SrollTop />
          </Provider>
        </main>
      </body>
    </html>
  );
}
