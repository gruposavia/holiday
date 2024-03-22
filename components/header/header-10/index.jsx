
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import MainMenu from "../MainMenu";
import MobileMenu from "../MobileMenu";
import CurrenctyMegaMenu from "../CurrenctyMegaMenu";
import LanguageMegaMenu from "../LanguageMegaMenu";
import { useTranslation } from 'react-i18next';

const Header1 = ({ locale }) => {
  const { t } = useTranslation();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    locale && <>
      {" "}
      <header className={`header ${navbar ? "is-sticky bg-white" : ""}`}>
        <div className="header__container header__container-1500 mx-auto px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link href={`/${locale}`} className="header-logo mr-50">
                  <img src="/img/general/lightLogo.png" alt="logo icon" />
                  <img src="/img/general/lightLogo.png" alt="logo icon" />
                </Link>
                {/* End logo */}

                <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style="text-dark-1" locale={locale} />
                  </div>
                </div>
                {/* End header-menu */}
              </div>

              {/* End d-flex */}
            </div>
            {/* End col */}
            <div className="col-auto">
              <div className="d-flex items-center">

                <div className="d-flex items-center is-menu-opened-hide xl:d-none">
                  {/* <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://hla-stage.crane.aero/"
                    className="button px-30 fw-400 text-14 -dark-4 bg-dark-2 h-50 text-white"
                  >
                    {t('main-menu:agency-access')}
                  </Link> */}
                  <Link
                    href="https://book-hla.crane.aero/"
                    prefetch
                    rel="noopener noreferrer"
                    className="button px-30 fw-400 text-14 -dark-4 bg-dark-2 h-50 text-white"
                  >
                    {t('main-menu:sign-in')}
                  </Link>
                </div>
                <div className="row x-gap-20 items-center xxl:d-none ml-20">
                  <CurrenctyMegaMenu textClass="text-dark-1" />
                  {/* End Megamenu for Currencty */}

                  {/* Start vertical devider*/}
                  <div className="col-auto">
                    <div className="w-1 h-20 bg-white-20" />
                  </div>
                  {/* End vertical devider*/}

                  <LanguageMegaMenu textClass="text-dark-1" locale={locale} />
                  {/* End Megamenu for Language */}
                </div>
                {/* End d-flex */}

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1">
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />
                    <div
                      className="offcanvas offcanvas-start mobile_menu-contnet"
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu locale={locale} />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* End header */}
    </>
  );
};

export default Header1;
