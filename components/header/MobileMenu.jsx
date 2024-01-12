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
import { useState } from "react";
import LanguageMegaMenu from "./LanguageMegaMenu";
import Image from "next/image";

const MobileMenu = ({ locale }) => {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [activeStates, setActiveStates] = useState({
    parent: false,
    nestedParentTwo: false,
    nestedParent: false,
  });

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
          <img src="/img/general/lightLogo.png" alt="brand" width={'auto'}/>
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
      <div className="pro-footer">
        <ContactInfo t={t}/>
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
