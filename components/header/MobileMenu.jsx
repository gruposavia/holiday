"use client";

import Link from "next/link";
import { useTranslation } from 'react-i18next';
import {

  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
  categorieMobileItems,
  categorieMegaMenuItems,
} from "../../data/mainMenuData";
import {
  isActiveLink,

} from "../../utils/linkActiveChecker";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

const MobileMenu = ({ locale }) => {
  const pathname = usePathname();
  console.log("🚀 ~ MobileMenu ~ pathname:", pathname)
  const { t } = useTranslation()
  const [isActiveParent, setIsActiveParent] = useState(false)
  const [isActiveNestedParentTwo, setisActiveNestedParentTwo] = useState(false)
  const [isActiveNestedParent, setisActiveNestedParent] = useState(false)

  const router = useRouter()

  useEffect(() => {

    categorieMegaMenuItems.map((megaMenu => {
      megaMenu?.menuCol?.map((megaCol => {
        megaCol?.menuItems?.map((item => {
          item?.menuList?.map((list) => {
            if (list.routePath?.split('/')[1] == pathname.split('/')[1]) {
              setIsActiveParent(true)
              setisActiveNestedParentTwo(item?.title)
              setisActiveNestedParent(megaMenu?.id)
            }
          })
        }))
      }))
    }))



  }, [])

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href={`/${locale}/`}>
          <img src="/img/general/lightLogo.png" alt="brand" />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}


      <Sidebar width="400" backgroundColor="#fff">

        <Menu>
        <MenuItem
            onClick={() => router.push(`/${locale}/`)}
            className={
              pathname === `/${locale}`
                ? "menu-active-link"
                : ""
            }

          >
            {t('main-menu:home')}
          </MenuItem>
          <MenuItem
            onClick={() => router.push(`/${locale}/membership`)}
            className={
              pathname === `/${locale}/membership` ? "menu-active-link" : ""
            }

          >
            {t('main-menu:membership')}
          </MenuItem>
          <MenuItem
            onClick={() => router.push(`/${locale}/help-center`)}
            className={
              pathname === `/${locale}/help-center` ? "menu-active-link" : ""
            }

          >
            {t('main-menu:help-center')}
          </MenuItem>
          <MenuItem
            onClick={() => router.push(`/${locale}/contact`)}
            className={
              pathname === `/${locale}/contact` ? "menu-active-link" : ""
            }
          >
            {t('main-menu:contact')}
          </MenuItem>

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
      </div>
      {/* End pro-footer */}
    </>
  );
};


export default MobileMenu;
