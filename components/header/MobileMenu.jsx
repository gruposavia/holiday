"use client";

import Link from "next/link";
import { useTranslation } from 'react-i18next';
import {
  Sidebar,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";
import { usePathname, useRouter } from "next/navigation";
import LanguageMegaMenu from "./LanguageMegaMenu";


const MobileMenu = ({ locale }) => {
  const pathname = usePathname();
  const { t } = useTranslation();


  const { push } = useRouter();

  const menuItems = [
    { path: `/${locale}`, label: t('main-menu:home') },
    { path: `/${locale}/membership`, label: t('main-menu:membership') },
    { path: `/${locale}/help-center`, label: t('main-menu:help-center') },
    { path: `/${locale}/contact`, label: t('main-menu:contact') },
  ];

  const handleMenuItemClick = (path) => {
    push(path);
  };

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href={`/${locale}/`}>
          <img src="/img/general/lightLogo.png" alt="brand" width={'auto'} />
        </Link>
        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
      </div>
      <Sidebar width="400" backgroundColor="#fff">
        <Menu>
          {menuItems.map(({ path, label }, index) => (
            <MenuItem
              key={index}
              onClick={() => handleMenuItemClick(path)}
              className={pathname === path ? "menu-active-link" : ""}
            >
              {label}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
      <div className="mobile-footer px-20 py-5 border-top-light"></div>
      <div className="pro-footer" style={{ height: '100%' }}>
        <div className="d-flex items-center justify-center w-full mb-40">
          <Link
            href="https://hla-stage.crane.aero/"
            prefetch
            rel="noopener noreferrer"

            style={{ width: '100%' }}
            className="button px-30 w-full fw-400 text-14 -dark-2 bg-dark-4 h-50 text-white"
          >
            {t('main-menu:sign-in')}
          </Link>
        </div>
        <ContactInfo t={t} />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">{t('contact:follow-us')}</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
        <LanguageMegaMenu textClass="text-dark-1 mt-20" locale={locale} />
      </div>
    </>
  );
};

export default MobileMenu;
